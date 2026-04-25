import { NextResponse } from "next/server";
import { CATEGORIES, getAllIndicatorIds } from "@/lib/inegi/categories";
import { fetchIndicator, processIndicator } from "@/lib/inegi/client";
import { translateIndicator } from "@/lib/ai/translator";
import * as fs from "fs";
import * as path from "path";

const DATA_DIR = path.join(process.cwd(), "src", "data");

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * POST /api/inegi/sync
 * Triggers a full sync of all registered INEGI indicators
 * Saves raw + AI-translated data locally
 */
export async function POST(request: Request) {
  // Simple auth check (you can replace with a proper secret)
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.INEGI_API_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: { id: string; status: string; error?: string }[] = [];
  const indicatorsDir = path.join(DATA_DIR, "indicadores");
  ensureDir(indicatorsDir);

  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      for (const config of sub.indicators) {
        try {
          // 1. Fetch from INEGI
          const raw = await fetchIndicator(config.inegi_id);
          if (!raw?.Series?.[0]) {
            results.push({ id: config.id, status: "no_data" });
            continue;
          }

          // 2. Process
          const processed = processIndicator(raw.Series[0], config);

          // 3. Save raw data
          const filePath = path.join(indicatorsDir, `${config.id}.json`);
          fs.writeFileSync(filePath, JSON.stringify(processed, null, 2));

          // 4. Try AI translation
          try {
            const translation = await translateIndicator(processed);
            if (translation) {
              processed.aiSummary = translation.summary;
              processed.aiInsight = translation.insight;
              const translatedPath = path.join(
                indicatorsDir,
                `${config.id}.translated.json`
              );
              fs.writeFileSync(
                translatedPath,
                JSON.stringify({ ...processed, aiTranslation: translation }, null, 2)
              );
            }
          } catch {
            // AI translation is optional
          }

          results.push({ id: config.id, status: "synced" });
        } catch (error) {
          results.push({
            id: config.id,
            status: "error",
            error: error instanceof Error ? error.message : "Unknown",
          });
        }
      }
    }
  }

  const synced = results.filter((r) => r.status === "synced").length;
  const failed = results.filter((r) => r.status === "error").length;

  return NextResponse.json({
    message: `Sync complete: ${synced} synced, ${failed} failed`,
    timestamp: new Date().toISOString(),
    results,
  });
}

/**
 * GET /api/inegi/sync — Check sync status
 */
export async function GET() {
  const indicatorsDir = path.join(DATA_DIR, "indicadores");

  if (!fs.existsSync(indicatorsDir)) {
    return NextResponse.json({
      status: "never_synced",
      count: 0,
      registeredIndicators: getAllIndicatorIds().length,
    });
  }

  const files = fs.readdirSync(indicatorsDir).filter((f) => f.endsWith(".json") && !f.includes(".translated"));

  return NextResponse.json({
    status: "ready",
    count: files.length,
    registeredIndicators: getAllIndicatorIds().length,
    lastSync: files.length > 0
      ? fs.statSync(path.join(indicatorsDir, files[0])).mtime.toISOString()
      : null,
  });
}
