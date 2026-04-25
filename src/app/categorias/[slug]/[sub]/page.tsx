import { notFound } from "next/navigation";
import Link from "next/link";
import {
  CATEGORIES,
  getCategoryBySlug,
  getSubcategoryBySlug,
} from "@/lib/inegi/categories";
import { generatePageMetadata, generateIndicatorJsonLD } from "@/lib/seo/metadata";
import { readIndicator } from "@/lib/data/store";
import DataCard from "@/components/data/DataCard";
import ChartPanel from "@/components/data/ChartPanel";
import StatHighlight from "@/components/data/StatHighlight";
import SmartText from "@/components/ui/SmartText";
import FAQSection from "@/components/ui/FAQSection";
import AdBanner from "@/components/ui/AdBanner";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string; sub: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; sub: string }[] = [];
  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      params.push({ slug: cat.slug, sub: sub.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, sub: subSlug } = await params;
  const cat = getCategoryBySlug(slug);
  const sub = getSubcategoryBySlug(slug, subSlug);
  if (!cat || !sub) return {};
  return generatePageMetadata({
    title: `${sub.name} — ${cat.name}`,
    description: `${sub.description}. Datos del INEGI sobre ${sub.name.toLowerCase()} en México, explicados en lenguaje sencillo.`,
    path: `/categorias/${slug}/${subSlug}`,
  });
}

export default async function SubcategoryPage({ params }: Props) {
  const { slug, sub: subSlug } = await params;
  const category = getCategoryBySlug(slug);
  const subcategory = getSubcategoryBySlug(slug, subSlug);

  if (!category || !subcategory) {
    notFound();
  }

  // Load ALL indicators from local data
  const indicators = subcategory.indicators
    .map((config) => {
      const local = readIndicator(config.id);
      if (local) return local;
      return null;
    })
    .filter(Boolean) as NonNullable<ReturnType<typeof readIndicator>>[];

  // JSON-LD structured data
  const jsonLD = indicators.map((ind) =>
    generateIndicatorJsonLD({
      name: ind.name,
      description: ind.description,
      value: ind.lastValue,
      date: ind.lastDate,
      unit: ind.unit,
    })
  );

  // Find historical coverage
  const oldestDate = indicators.reduce((oldest, ind) => {
    if (ind.observations?.length > 0) {
      const firstObs = ind.observations[0].date;
      if (!oldest || firstObs < oldest) return firstObs;
    }
    return oldest;
  }, "" as string);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />

      <div className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8 flex-wrap">
            <Link href="/categorias" className="hover:text-white transition-colors">
              Categorías
            </Link>
            <span>/</span>
            <Link href={`/categorias/${slug}`} className="hover:text-white transition-colors">
              {category.name}
            </Link>
            <span>/</span>
            <span style={{ color: category.color }}>{subcategory.name}</span>
          </nav>

          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold mb-2">
              {subcategory.name}
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)]">
              <SmartText text={subcategory.description} color={category.color} />
            </p>
            {oldestDate && (
              <p className="text-xs text-[var(--color-text-muted)] mt-2">
                📅 Datos históricos desde {oldestDate.split("/")[0]} hasta la fecha
              </p>
            )}
          </div>

          {/* Stat Highlights */}
          {indicators.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {indicators.map((ind, i) => (
                <StatHighlight
                  key={ind.id}
                  label={ind.name}
                  value={ind.lastValue}
                  unit={ind.unit}
                  trend={ind.trend as "up" | "down" | "stable"}
                  changePercent={ind.changePercent}
                  color={category.color}
                  delay={i * 0.1}
                />
              ))}
            </div>
          )}

          {/* AI Summaries */}
          {indicators.some((ind) => ind.aiSummary) && (
            <div className="mb-10 space-y-4">
              <h2 className="text-xl font-heading font-semibold flex items-center gap-2">
                <span>🤖</span> Resumen con IA
              </h2>
              {indicators
                .filter((ind) => ind.aiSummary)
                .map((ind) => (
                  <div key={`ai-${ind.id}`} className="glass-card p-5">
                    <h3 className="font-heading font-semibold text-sm mb-2" style={{ color: category.color }}>
                      {ind.name}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                      <SmartText text={ind.aiSummary} color={category.color} />
                    </p>
                    {ind.aiInsight && (
                      <div className="p-3 rounded-lg bg-[var(--color-bg-primary)] border-l-2" style={{ borderLeftColor: category.color }}>
                        <p className="text-xs text-[var(--color-text-muted)] font-medium mb-1">💡 ¿Qué significa para ti?</p>
                        <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                          <SmartText text={ind.aiInsight} color={category.color} />
                        </p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          )}

          {/* Charts */}
          {indicators.length > 0 && (
            <div className="space-y-6 mb-10">
              {indicators
                .filter((ind) => ind.observations && ind.observations.length > 2)
                .map((ind) => (
                  <ChartPanel
                    key={ind.id}
                    data={ind.observations}
                    title={`Evolución: ${ind.name}`}
                    color={category.color}
                    unit={ind.unit}
                  />
                ))}
            </div>
          )}

          {/* Data Cards — Detailed */}
          {indicators.length > 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-heading font-semibold mb-6">
                Detalle de indicadores
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {indicators.map((ind, i) => (
                  <DataCard
                    key={ind.id}
                    title={ind.name}
                    value={ind.lastValue}
                    unit={ind.unit}
                    description={ind.description}
                    trend={ind.trend as "up" | "down" | "stable"}
                    changePercent={ind.changePercent}
                    lastDate={ind.lastDate}
                    color={category.color}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Empty State (only if truly no data) */}
          {indicators.length === 0 && (
            <div className="glass-card p-12 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-heading text-xl font-semibold mb-2">
                Datos en proceso
              </h3>
              <p className="text-[var(--color-text-muted)] max-w-md mx-auto">
                Ejecuta <code className="text-[var(--color-accent-cyan)]">node scripts/seed-data.mjs</code>{" "}
                para cargar los datos iniciales.
              </p>
            </div>
          )}

          {/* Dynamic FAQ Section */}
          {indicators.length > 0 && (
            <FAQSection
              categoryName={category.name}
              subcategoryName={subcategory.name}
              subcategoryDescription={subcategory.description}
              indicators={indicators}
              color={category.color}
            />
          )}

          {/* Monetization Footer Banner */}
          <AdBanner dataAdSlot="1234567890" />

          {/* Source */}
          <div className="mt-10 glass-card p-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-xs text-[var(--color-text-muted)]">
                📊 Fuente: INEGI, {subcategory.name}. Datos procesados desde las APIs públicas del INEGI.
                Los análisis y traducciones son elaboraciones propias y NO representan una postura oficial del INEGI.
              </p>
              {indicators.length > 0 && indicators[0].lastUpdate && (
                <span className="text-[10px] text-[var(--color-text-muted)] shrink-0 px-3 py-1 rounded-full bg-[var(--color-bg-primary)]">
                  Última actualización: {indicators[0].lastUpdate}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
