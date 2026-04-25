import { NextResponse } from "next/server";
import { translateIndicator } from "@/lib/ai/translator";
import type { ProcessedIndicator } from "@/lib/inegi/types";

/**
 * POST /api/ai/translate
 * Translates a processed indicator via Ollama/Qwen
 */
export async function POST(request: Request) {
  try {
    const indicator = (await request.json()) as ProcessedIndicator;

    if (!indicator?.name) {
      return NextResponse.json(
        { error: "Invalid indicator data" },
        { status: 400 }
      );
    }

    const translation = await translateIndicator(indicator);

    if (!translation) {
      return NextResponse.json(
        { error: "AI translation unavailable. Ensure Ollama is running." },
        { status: 503 }
      );
    }

    return NextResponse.json({ translation });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Translation failed",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}
