import type { MetadataRoute } from "next";
import { CATEGORIES } from "@/lib/inegi/categories";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:9100";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/categorias`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/mapa`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/buscar`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/categorias/${cat.slug}`,
    lastModified: now,
    changeFrequency: "daily" as const,
    priority: 0.8,
  }));

  // Subcategory pages
  const subPages: MetadataRoute.Sitemap = [];
  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      subPages.push({
        url: `${SITE_URL}/categorias/${cat.slug}/${sub.slug}`,
        lastModified: now,
        changeFrequency: "daily" as const,
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...categoryPages, ...subPages];
}
