import React from "react";
import SmartText from "@/components/ui/SmartText";
import { generateFAQJsonLD } from "@/lib/seo/metadata";

interface IndicatorBase {
  name: string;
  description: string;
  lastValue: string;
  unit: string;
  lastDate: string;
  aiInsight?: string;
  aiSummary?: string;
}

interface FAQSectionProps {
  categoryName: string;
  subcategoryName: string;
  subcategoryDescription: string;
  indicators: IndicatorBase[];
  color?: string;
}

export default function FAQSection({
  categoryName,
  subcategoryName,
  subcategoryDescription,
  indicators,
  color = "var(--color-accent-blue)",
}: FAQSectionProps) {
  // Synthesize up to 5 Q&A pairs automatically
  const faqs: { question: string; answer: string; enhancedAnswer: React.ReactNode }[] = [];

  // Q1: General definition
  faqs.push({
    question: `¿Qué es la información de ${subcategoryName} en México?`,
    answer: subcategoryDescription,
    enhancedAnswer: <SmartText text={subcategoryDescription} color={color} />,
  });

  // Data-driven questions specifically from the top 3-4 indicators
  indicators.slice(0, 4).forEach((ind) => {
    // Q2..n: What does this particular specific metric mean?
    if (ind.aiInsight) {
      faqs.push({
        question: `¿Qué significa y cómo me afecta el dato de ${ind.name}?`,
        answer: ind.aiInsight,
        enhancedAnswer: <SmartText text={ind.aiInsight} color={color} />,
      });
    }

    // Q3..n: Facts/Stats
    const statAnswer = `Según el reporte estructurado, el dato más actual para ${ind.name} en México es de ${ind.lastValue} ${ind.unit}. (Fecha de corte registrada: ${ind.lastDate}).`;
    faqs.push({
      question: `¿Cuál es la cifra más reciente de ${ind.name}?`,
      answer: statAnswer,
      enhancedAnswer: (
        <span>
          Según el reporte estructurado, el dato más actual para{" "}
          <strong style={{ color }}>{ind.name}</strong> en México es de{" "}
          <strong className="text-white">{ind.lastValue}</strong>{" "}
          <span className="text-[var(--color-text-muted)]">{ind.unit}</span>.{" "}
          <br />
          <span className="text-xs text-[var(--color-text-muted)] mt-2 block">
            (Fecha de corte registrada: {ind.lastDate})
          </span>
        </span>
      ),
    });
  });

  // Limit to max 5 FAQs for UX
  const finalFaqs = faqs.slice(0, 5);

  const jsonLD = generateFAQJsonLD(finalFaqs);

  return (
    <div className="mt-16 mb-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <h2 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
        <span>❓</span> Preguntas Frecuentes
      </h2>
      <div className="space-y-4">
        {finalFaqs.map((faq, i) => (
          <details
            key={i}
            className="group glass-card border border-[var(--color-border)] rounded-xl [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-[var(--color-text-primary)] hover:text-white transition-colors">
              <span>{faq.question}</span>
              <span className="transition duration-300 group-open:rotate-180 shrink-0 text-[var(--color-text-muted)] group-hover:text-white">
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <div className="p-5 pt-0 text-[var(--color-text-secondary)] leading-relaxed border-t border-[var(--color-border-subtle)] mt-2 pt-4">
              {faq.enhancedAnswer}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
