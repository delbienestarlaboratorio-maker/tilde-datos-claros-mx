import fs from "fs/promises";
import path from "path";
import { CATEGORIES } from "../src/lib/inegi/categories";

const SITE_URL = "https://datosclaros.mx";

async function generateSitemap() {
  console.log("Generando sitemap statico...");
  const staticPages = [
    { url: SITE_URL, priority: "1.0", frequency: "daily" },
    { url: `${SITE_URL}/categorias`, priority: "0.9", frequency: "weekly" },
    { url: `${SITE_URL}/mapa`, priority: "0.8", frequency: "weekly" },
    { url: `${SITE_URL}/buscar`, priority: "0.7", frequency: "weekly" },
  ];

  const categoryPages = CATEGORIES.map((cat) => ({
    url: `${SITE_URL}/categorias/${cat.slug}`,
    priority: "0.8",
    frequency: "daily",
  }));

  const subPages = [];
  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      subPages.push({
        url: `${SITE_URL}/categorias/${cat.slug}/${sub.slug}`,
        priority: "0.7",
        frequency: "daily",
      });
    }
  }

  const allPages = [...staticPages, ...categoryPages, ...subPages];

  const now = new Date().toISOString();
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (page) => `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${page.frequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  const publicDir = path.join(process.cwd(), "public");
  await fs.writeFile(path.join(publicDir, "sitemap.xml"), xml, "utf-8");
  console.log(`✅ Sitemap generado en public/sitemap.xml con ${allPages.length} rutas.`);
}

generateSitemap();
