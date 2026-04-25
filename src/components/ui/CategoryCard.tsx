"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface CategoryCardProps {
  slug: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  index: number;
}

export default function CategoryCard({
  slug,
  name,
  description,
  icon,
  color,
  index,
}: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
    >
      <Link href={`/categorias/${slug}`}>
        <div className="glass-card p-6 hover-lift cursor-pointer group h-full">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4 transition-transform group-hover:scale-110"
            style={{ backgroundColor: `${color}15` }}
          >
            {icon}
          </div>
          <h3
            className="font-heading text-lg font-semibold mb-2 transition-colors"
            style={{ color }}
          >
            {name}
          </h3>
          <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-medium transition-colors" style={{ color }}>
            <span>Explorar datos</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
