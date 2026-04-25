"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/inegi/categories";
import Link from "next/link";

export default function BuscarPage() {
  const [query, setQuery] = useState("");

  // Build searchable index from categories
  const allItems = useMemo(() => {
    const items: {
      type: "category" | "subcategory" | "indicator";
      name: string;
      description: string;
      categoryName: string;
      categorySlug: string;
      categoryIcon: string;
      categoryColor: string;
      subSlug?: string;
      href: string;
    }[] = [];

    for (const cat of CATEGORIES) {
      items.push({
        type: "category",
        name: cat.name,
        description: cat.description,
        categoryName: cat.name,
        categorySlug: cat.slug,
        categoryIcon: cat.icon,
        categoryColor: cat.color,
        href: `/categorias/${cat.slug}`,
      });

      for (const sub of cat.subcategories) {
        items.push({
          type: "subcategory",
          name: sub.name,
          description: sub.description,
          categoryName: cat.name,
          categorySlug: cat.slug,
          categoryIcon: cat.icon,
          categoryColor: cat.color,
          subSlug: sub.slug,
          href: `/categorias/${cat.slug}/${sub.slug}`,
        });

        for (const ind of sub.indicators) {
          items.push({
            type: "indicator",
            name: ind.name,
            description: ind.description,
            categoryName: cat.name,
            categorySlug: cat.slug,
            categoryIcon: cat.icon,
            categoryColor: cat.color,
            subSlug: sub.slug,
            href: `/categorias/${cat.slug}/${sub.slug}`,
          });
        }
      }
    }

    return items;
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allItems
      .filter(
        (item) =>
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.categoryName.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [query, allItems]);

  const typeLabels = {
    category: "Categoría",
    subcategory: "Subcategoría",
    indicator: "Indicador",
  };

  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Buscar</span> datos
          </h1>
          <p className="text-[var(--color-text-secondary)]">
            Encuentra cualquier indicador, categoría o tema de datos del INEGI.
          </p>
        </div>

        {/* Search Input */}
        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-[var(--color-text-muted)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca: inflación, PIB, población, salarios..."
            className="w-full pl-12 pr-4 py-4 rounded-xl glass-card text-white placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors text-lg"
            autoFocus
          />
        </div>

        {/* Results */}
        {query.trim() && (
          <div className="space-y-3">
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              {results.length} resultado{results.length !== 1 ? "s" : ""} para
              &ldquo;{query}&rdquo;
            </p>

            {results.map((item, i) => (
              <motion.div
                key={`${item.href}-${item.name}-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
              >
                <Link href={item.href}>
                  <div className="glass-card p-4 hover-lift cursor-pointer">
                    <div className="flex items-start gap-3">
                      <span className="text-xl shrink-0">{item.categoryIcon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-heading font-semibold text-sm text-white truncate">
                            {item.name}
                          </h3>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
                            style={{
                              color: item.categoryColor,
                              backgroundColor: `${item.categoryColor}15`,
                            }}
                          >
                            {typeLabels[item.type]}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">
                          {item.description}
                        </p>
                        <p className="text-[10px] text-[var(--color-text-muted)] mt-1">
                          {item.categoryName}
                          {item.subSlug ? ` › ${item.name}` : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {results.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-[var(--color-text-muted)]">
                  No encontramos resultados. Intenta con otro término.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Suggestions when empty */}
        {!query.trim() && (
          <div>
            <p className="text-sm text-[var(--color-text-muted)] mb-4">
              Búsquedas populares:
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Inflación",
                "PIB",
                "Desempleo",
                "Población",
                "Salario mínimo",
                "Vivienda",
                "Educación",
                "Seguridad",
              ].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 rounded-lg glass-card text-sm text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-accent)] transition-all"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
