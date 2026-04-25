import { notFound } from "next/navigation";
import Link from "next/link";
import { CATEGORIES, getCategoryBySlug } from "@/lib/inegi/categories";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { readIndicator } from "@/lib/data/store";
import DataCard from "@/components/data/DataCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return generatePageMetadata({
    title: `${category.icon} ${category.name} — Datos de México`,
    description: category.description,
    path: `/categorias/${slug}`,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  // Load first indicator from each subcategory for preview
  const subcategoryPreviews = category.subcategories.map((sub) => {
    const indicatorData = sub.indicators.map((ind) => {
      const local = readIndicator(ind.id);
      return { config: ind, data: local };
    });
    return { sub, indicatorData };
  });

  // Count total indicators with data
  const totalWithData = subcategoryPreviews.reduce(
    (acc, { indicatorData }) =>
      acc + indicatorData.filter((d) => d.data).length,
    0
  );

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-8">
          <Link href="/categorias" className="hover:text-white transition-colors">
            Categorías
          </Link>
          <span>/</span>
          <span style={{ color: category.color }}>{category.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 mb-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0"
              style={{ backgroundColor: `${category.color}15` }}
            >
              {category.icon}
            </div>
            <div>
              <h1
                className="text-3xl sm:text-4xl font-heading font-bold"
                style={{ color: category.color }}
              >
                {category.name}
              </h1>
              <p className="text-[var(--color-text-secondary)] mt-1">
                {category.description}
              </p>
              <p className="text-xs text-[var(--color-text-muted)] mt-2">
                {totalWithData} indicador{totalWithData !== 1 ? "es" : ""} con datos •{" "}
                {category.subcategories.length} subcategoría{category.subcategories.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        {/* Subcategories */}
        <div className="space-y-12">
          {subcategoryPreviews.map(({ sub, indicatorData }) => (
            <section key={sub.id}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-white">
                    {sub.name}
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {sub.description}
                  </p>
                </div>
                <Link
                  href={`/categorias/${slug}/${sub.slug}`}
                  className="text-sm px-4 py-2 rounded-lg transition-colors shrink-0 hover:opacity-80"
                  style={{
                    color: category.color,
                    backgroundColor: `${category.color}10`,
                  }}
                >
                  Ver todos →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {indicatorData.map(({ config, data }, idx) => (
                  <DataCard
                    key={config.id}
                    title={config.name}
                    value={data ? data.lastValue : "—"}
                    unit={config.unit}
                    description={data?.aiSummary ? data.aiSummary.substring(0, 120) + "..." : config.description}
                    trend={data?.trend as "up" | "down" | "stable" | undefined}
                    changePercent={data?.changePercent}
                    lastDate={data?.lastDate}
                    color={category.color}
                    index={idx}
                    href={`/categorias/${slug}/${sub.slug}`}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Source Attribution */}
        <div className="mt-16 glass-card p-5 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            📊 Fuente: INEGI. Los datos son obtenidos de las APIs públicas del
            INEGI y procesados para facilitar su comprensión. Los análisis
            presentados NO representan una postura oficial del INEGI.
          </p>
        </div>
      </div>
    </div>
  );
}
