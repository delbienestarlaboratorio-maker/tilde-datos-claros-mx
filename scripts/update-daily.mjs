import fs from "fs/promises";
import path from "path";

const API_BASE = "https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml";
const TOKEN = process.env.INEGI_API_TOKEN;

// The category taxonomy is our source of truth
// We read it directly from the lib folder
import { CATEGORIES } from "../src/lib/inegi/categories.ts";

async function fetchInegi(indicatorId) {
  const url = `${API_BASE}/INDICATOR/${indicatorId}/es/0700/false/BISE/2.0/${TOKEN}?type=json`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return await res.json();
}

async function updateAll() {
  if (!TOKEN) {
    console.error("❌ ERROR: INEGI_API_TOKEN no está definido en el entorno.");
    process.exit(1);
  }

  console.log("🚀 Iniciando actualización automatizada de Datos Claros MX...");
  const dataDir = path.join(process.cwd(), "src/data/indicadores");

  let updatedCount = 0;
  let failedCount = 0;

  for (const cat of CATEGORIES) {
    for (const sub of cat.subcategories) {
      for (const item of sub.indicators) {
        try {
          console.log(`Descargando actualización para: ${item.name} (${item.inegi_id})...`);
          
          // Download fresh data
          const data = await fetchInegi(item.inegi_id);
          
          if (!data || !data.Series || data.Series.length === 0) {
            console.warn(`⚠️ No se encontraron observaciones para ${item.inegi_id}`);
            failedCount++;
            continue;
          }

          // Process and save
          const serie = data.Series[0];
          const observations = serie.OBSERVATIONS
            .filter(o => o.OBS_VALUE !== null && o.OBS_VALUE !== "")
            .map(o => ({ date: o.TIME_PERIOD, value: parseFloat(o.OBS_VALUE) }))
            .sort((a, b) => a.date.localeCompare(b.date));

          const last = observations[observations.length - 1];
          const prev = observations.length > 1 ? observations[observations.length - 2] : undefined;

          let changePercent;
          let trend = "stable";

          if (last && prev && prev.value !== 0) {
            changePercent = ((last.value - prev.value) / Math.abs(prev.value)) * 100;
            trend = changePercent > 0.1 ? "up" : changePercent < -0.1 ? "down" : "stable";
          }

          const targetData = {
            id: item.id,
            name: item.name,
            inegi_id: item.inegi_id,
            unit: item.unit || serie.UNIT || "",
            description: item.description,
            lastValue: last ? last.value.toLocaleString("es-MX") : "N/A",
            lastDate: last ? last.date : "N/A",
            previousValue: prev ? prev.value.toLocaleString("es-MX") : undefined,
            changePercent: changePercent ? Math.round(changePercent * 100) / 100 : undefined,
            trend,
            observations,
            source: serie.SOURCE || "INEGI",
            lastUpdate: new Date().toISOString()
          };

          const savePath = path.join(dataDir, `${item.id}.json`);
          await fs.writeFile(savePath, JSON.stringify(targetData, null, 2), "utf-8");
          console.log(`✅ [OK] ${item.id}.json actualizado`);
          updatedCount++;

          // Gentle delay to avoid hammering INEGI servers
          await new Promise(r => setTimeout(r, 1000));

        } catch (error) {
          console.error(`❌ Error actualizando ${item.inegi_id}:`, error.message);
          failedCount++;
        }
      }
    }
  }

  console.log(`\n🎉 PROCESO COMPLETADO.`);
  console.log(`✅ Actualizados: ${updatedCount}`);
  console.log(`❌ Fallidos: ${failedCount}`);
}

updateAll();
