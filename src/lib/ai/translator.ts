// ============================================================
// Ollama/Qwen AI Translator — Raw INEGI → Human Language
// ============================================================
import type { ProcessedIndicator } from "../inegi/types";

const OLLAMA_URL = process.env.OLLAMA_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "qwen2.5:7b";

interface AITranslation {
  title: string;
  summary: string;
  insight: string;
  whatItMeans: string;
}

/**
 * Translate a processed INEGI indicator into human-readable Spanish
 */
export async function translateIndicator(
  indicator: ProcessedIndicator
): Promise<AITranslation | null> {
  const prompt = `Eres un comunicador de datos experto. Tu trabajo es explicar estadísticas del INEGI de México 
de forma que CUALQUIER persona sin conocimientos técnicos las entienda perfectamente.

Datos del indicador:
- Nombre: ${indicator.name}
- Descripción técnica: ${indicator.description}
- Último valor: ${indicator.lastValue} ${indicator.unit}
- Fecha: ${indicator.lastDate}
- Valor anterior: ${indicator.previousValue || "No disponible"} ${indicator.unit}
- Cambio: ${indicator.changePercent !== undefined ? indicator.changePercent + "%" : "No disponible"}
- Tendencia: ${indicator.trend === "up" ? "subiendo" : indicator.trend === "down" ? "bajando" : "estable"}

Responde SOLO en formato JSON válido (sin markdown ni backticks) con estos campos:
{
  "title": "Un título llamativo y entendible (máx 80 caracteres)",
  "summary": "Explicación en 2-3 oraciones simples, como si le explicaras a un amigo",
  "insight": "¿Qué significa este número para la vida cotidiana? (2 oraciones)",
  "whatItMeans": "Si este número sube/baja, ¿cómo te afecta? (1-2 oraciones)"
}`;

  try {
    const res = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        options: {
          temperature: 0.7,
          num_predict: 500,
        },
      }),
    });

    if (!res.ok) {
      console.error(`Ollama error: ${res.status}`);
      return null;
    }

    const data = await res.json();
    const text = data.response?.trim();

    if (!text) return null;

    // Try to parse JSON from the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as AITranslation;
    }

    return null;
  } catch (error) {
    console.error("AI translation error:", error);
    return null;
  }
}

/**
 * Generate a general category summary using AI
 */
export async function generateCategorySummary(
  categoryName: string,
  indicators: ProcessedIndicator[]
): Promise<string | null> {
  const dataPoints = indicators
    .slice(0, 5)
    .map((i) => `${i.name}: ${i.lastValue} ${i.unit} (${i.trend === "up" ? "↑" : i.trend === "down" ? "↓" : "→"})`)
    .join("\n");

  const prompt = `Eres un analista de datos que habla en español simple y claro. 
Resume la situación actual de "${categoryName}" en México basándote en estos datos del INEGI:

${dataPoints}

Escribe un párrafo de 3-4 oraciones, como un resumen de noticias, sin tecnicismos. 
No uses comillas ni formateo especial. Solo texto plano.`;

  try {
    const res = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt,
        stream: false,
        options: { temperature: 0.7, num_predict: 300 },
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.response?.trim() || null;
  } catch {
    return null;
  }
}
