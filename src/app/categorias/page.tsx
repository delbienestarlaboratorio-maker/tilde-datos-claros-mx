import { CATEGORIES } from "@/lib/inegi/categories";
import CategoryCard from "@/components/ui/CategoryCard";
import { generatePageMetadata } from "@/lib/seo/metadata";

export const metadata = generatePageMetadata({
  title: "Todas las Categorías",
  description:
    "Explora todas las categorías de datos del INEGI: economía, población, salud, educación, seguridad, vivienda y más. Información de México al alcance de todos.",
  path: "/categorias",
});

export default function CategoriasPage() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Todas las{" "}
            <span className="gradient-text">categorías</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl mx-auto text-lg">
            {CATEGORIES.length} áreas de datos del INEGI organizadas para
            que encuentres lo que necesitas fácilmente.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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

        {/* INEGI Notice */}
        <div className="mt-12 glass-card p-5 text-center">
          <p className="text-xs text-[var(--color-text-muted)]">
            📊 Fuente: INEGI, Instituto Nacional de Estadística y Geografía.
            Los indicadores se actualizan automáticamente a partir de las APIs
            públicas del INEGI.
          </p>
        </div>
      </div>
    </div>
  );
}
