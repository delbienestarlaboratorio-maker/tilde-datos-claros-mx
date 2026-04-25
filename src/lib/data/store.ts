// ============================================================
// Local Data Store — Read/Write INEGI JSON data
// ============================================================
import * as fs from "fs";
import * as path from "path";
import type { ProcessedIndicator } from "../inegi/types";

const DATA_DIR = path.join(process.cwd(), "src", "data", "indicadores");

function ensureDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Read a single indicator from local storage
 */
export function readIndicator(id: string): ProcessedIndicator | null {
  ensureDir();
  const filePath = path.join(DATA_DIR, `${id}.json`);
  if (!fs.existsSync(filePath)) return null;

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as ProcessedIndicator;
  } catch {
    return null;
  }
}

/**
 * Read all indicators from local storage
 */
export function readAllIndicators(): ProcessedIndicator[] {
  ensureDir();
  const files = fs.readdirSync(DATA_DIR).filter(
    (f) => f.endsWith(".json") && !f.includes(".translated")
  );

  const indicators: ProcessedIndicator[] = [];
  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(DATA_DIR, file), "utf-8");
      indicators.push(JSON.parse(content));
    } catch {
      // skip corrupted files
    }
  }

  return indicators;
}

/**
 * Write a processed indicator to local storage
 */
export function writeIndicator(indicator: ProcessedIndicator): void {
  ensureDir();
  const filePath = path.join(DATA_DIR, `${indicator.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(indicator, null, 2));
}

/**
 * Check if local data exists for a given indicator
 */
export function hasLocalData(id: string): boolean {
  ensureDir();
  return fs.existsSync(path.join(DATA_DIR, `${id}.json`));
}

/**
 * Get data stats
 */
export function getDataStats(): {
  count: number;
  lastSync: string | null;
  oldest: string | null;
} {
  ensureDir();
  const files = fs.readdirSync(DATA_DIR).filter(
    (f) => f.endsWith(".json") && !f.includes(".translated")
  );

  if (files.length === 0) {
    return { count: 0, lastSync: null, oldest: null };
  }

  const stats = files.map((f) =>
    fs.statSync(path.join(DATA_DIR, f)).mtime.getTime()
  );

  return {
    count: files.length,
    lastSync: new Date(Math.max(...stats)).toISOString(),
    oldest: new Date(Math.min(...stats)).toISOString(),
  };
}
