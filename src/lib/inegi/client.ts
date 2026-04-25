// ============================================================
// INEGI Data Processing Client (Decoupled - 100% Local Storage)
// ============================================================
import type { INEGISerie, ProcessedIndicator } from "./types";

/**
 * Process raw INEGI response into a clean ProcessedIndicator
 */
export function processIndicator(
  serie: INEGISerie,
  config: { id: string; name: string; inegi_id: string; unit: string; description: string }
): ProcessedIndicator {
  const observations = serie.OBSERVATIONS
    .filter((o) => o.OBS_VALUE && o.OBS_VALUE !== "")
    .map((o) => ({
      date: o.TIME_PERIOD,
      value: parseFloat(o.OBS_VALUE),
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  const last = observations[observations.length - 1];
  const prev = observations.length > 1 ? observations[observations.length - 2] : undefined;

  let changePercent: number | undefined;
  let trend: "up" | "down" | "stable" = "stable";

  if (last && prev && prev.value !== 0) {
    changePercent = ((last.value - prev.value) / Math.abs(prev.value)) * 100;
    trend = changePercent > 0.1 ? "up" : changePercent < -0.1 ? "down" : "stable";
  }

  return {
    id: config.id,
    name: config.name,
    inegi_id: config.inegi_id,
    unit: config.unit || serie.UNIT || "",
    description: config.description,
    lastValue: last ? last.value.toLocaleString("es-MX") : "N/A",
    lastDate: last ? last.date : "N/A",
    previousValue: prev ? prev.value.toLocaleString("es-MX") : undefined,
    changePercent: changePercent ? Math.round(changePercent * 100) / 100 : undefined,
    trend,
    observations,
    source: serie.SOURCE || "INEGI",
    lastUpdate: serie.LASTUPDATE || new Date().toISOString(),
  };
}

