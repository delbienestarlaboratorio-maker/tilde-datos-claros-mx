import Link from "next/link";
import { CATEGORIES } from "@/lib/inegi/categories";
import { readIndicator } from "@/lib/data/store";
import CategoryCard from "@/components/ui/CategoryCard";
import StatHighlight from "@/components/data/StatHighlight";
import AdBanner from "@/components/ui/AdBanner";

export default function HomePage() {
  // Load featured indicators from local data
  const featuredIndicators = [
    readIndicator("pib-total"),
    readIndicator("inflacion-anual"),
    readIndicator("desocupacion"),
    readIndicator("poblacion-total"),
    readIndicator("salario-minimo"),
    readIndicator("internet"),
  ].filter(Boolean) as NonNullable<ReturnType<typeof readIndicator>>[];

  // Stats bar
  const totalIndicators = CATEGORIES.reduce(
    (sum, cat) => sum + cat.subcategories.reduce(
      (s, sub) => s + sub.indicators.length, 0
    ), 0
  );

  const statsBar = [
    { label: "Categorías", value: `${CATEGORIES.length}`, icon: "📊" },
    { label: "Indicadores", value: `${totalIndicators}`, icon: "📈" },
    { label: "Estados", value: "32", icon: "🗺️" },
    { label: "Actualización", value: "Diaria", icon: "🔄" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-[var(--color-text-secondary)] mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Datos actualizados con información pública del INEGI
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight text-balance">
            Los datos de{" "}
            <span className="gradient-text">México</span>
            <br />
            explicados para{" "}
            <span className="gradient-text">todos</span>
          </h1>

          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Economía, población, salud, educación y más. 
            Toda la información del INEGI traducida a un lenguaje que 
            cualquier persona puede entender.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categorias"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explorar Datos
            </Link>
            <Link
              href="/mapa"
              className="px-8 py-4 rounded-xl glass-card font-semibold text-[var(--color-text-secondary)] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              🗺️ Ver Mapa Interactivo
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 -mt-10 mb-16 relative z-20">
        <AdBanner dataAdSlot="1122334455" />
      </div>

      {/* Stats Bar */}
      <section className="py-8 border-y border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsBar.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-heading font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-[var(--color-text-muted)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Data */}
      {featuredIndicators.length > 0 && (
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
                Datos{" "}
                <span className="gradient-text">destacados</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
                Los indicadores más importantes de México, actualizados y
                explicados en lenguaje sencillo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredIndicators.map((ind, i) => (
                <StatHighlight
                  key={ind.id}
                  label={ind.name}
                  value={ind.lastValue}
                  unit={ind.unit}
                  trend={ind.trend as "up" | "down" | "stable"}
                  changePercent={ind.changePercent}
                  color={
                    i === 0 ? "#22d3ee" :
                    i === 1 ? "#a78bfa" :
                    i === 2 ? "#f97316" :
                    i === 3 ? "#10b981" :
                    i === 4 ? "#eab308" :
                    "#ec4899"
                  }
                  delay={i * 0.08}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Grid */}
      <section className="py-16 px-4 bg-[var(--color-bg-surface)]/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Explora por{" "}
              <span className="gradient-text">categoría</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Toda la información del INEGI organizada en temas fáciles de
              navegar. Haz clic en cualquier categoría para ver los datos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {CATEGORIES.map((cat, i) => (
              <CategoryCard
                key={cat.id}
                slug={cat.slug}
                name={cat.name}
                description={cat.description}
                icon={cat.icon}
                color={cat.color}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            ¿Cómo{" "}
            <span className="gradient-text">funciona</span>?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Extraemos los datos",
                desc: "Consultamos las APIs oficiales del INEGI para tener los datos públicos más actualizados de México.",
                icon: "🔄",
              },
              {
                step: "02",
                title: "Los traducimos con IA",
                desc: "Nuestra IA local (Qwen) convierte las cifras técnicas en explicaciones sencillas que cualquiera puede entender.",
                icon: "🤖",
              },
              {
                step: "03",
                title: "Tú los entiendes",
                desc: "Gráficas históricas, mapas interactivos y textos claros para que tomes decisiones informadas.",
                icon: "💡",
              },
            ].map((item) => (
              <div key={item.step} className="glass-card p-6 text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs font-mono text-[var(--color-accent-cyan)] mb-2">
                  PASO {item.step}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Coverage */}
      <section className="py-16 px-4 bg-[var(--color-bg-surface)]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-heading font-bold text-center mb-8">
            📅 Cobertura{" "}
            <span className="gradient-text">histórica</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { topic: "Población", years: "1950 — 2024", span: "74 años" },
              { topic: "PIB / Economía", years: "2000 — 2024", span: "25 años" },
              { topic: "Salario Mínimo", years: "2000 — 2025", span: "26 años" },
              { topic: "Internet / Vivienda", years: "2005 — 2024", span: "20 años" },
              { topic: "Inflación (mensual)", years: "2020 — 2025", span: "Mensual" },
              { topic: "Empleo (mensual)", years: "2020 — 2025", span: "Mensual" },
              { topic: "Industria (mensual)", years: "2020 — 2025", span: "Mensual" },
              { topic: "Agricultura", years: "2010 — 2024", span: "15 años" },
              { topic: "Seguridad", years: "2010 — 2024", span: "15 años" },
            ].map((item) => (
              <div key={item.topic} className="glass-card p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{item.topic}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{item.years}</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] font-mono">
                  {item.span}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Información es{" "}
            <span className="gradient-text">poder</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-8">
            Los datos de tu país, explicados para que tú los entiendas. 
            Sin tecnicismos, sin complicaciones.
          </p>
          <Link
            href="/categorias"
            className="inline-block px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            Comenzar a explorar →
          </Link>
        </div>
      </section>
    </div>
  );
}
