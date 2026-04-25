// ============================================================
// SEO Metadata Generator
// ============================================================
import type { Metadata } from "next";

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Datos Abiertos MX";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:9100";

export function generatePageMetadata(params: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
}): Metadata {
  const fullTitle = `${params.title} | ${SITE_NAME}`;
  const url = `${SITE_URL}${params.path || ""}`;

  return {
    title: fullTitle,
    description: params.description,
    openGraph: {
      title: fullTitle,
      description: params.description,
      url,
      siteName: SITE_NAME,
      type: params.type || "website",
      locale: "es_MX",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: params.description,
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateIndicatorJsonLD(indicator: {
  name: string;
  description: string;
  value: string;
  date: string;
  unit: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "StatisticalPopulation",
    name: indicator.name,
    description: indicator.description,
    mainEntity: {
      "@type": "QuantitativeValue",
      value: indicator.value,
      unitText: indicator.unit,
    },
    dateModified: indicator.date,
    provider: {
      "@type": "Organization",
      name: "INEGI",
      url: "https://www.inegi.org.mx",
    },
    isBasedOn: {
      "@type": "Dataset",
      name: `${indicator.name} - INEGI`,
      description: `Datos procesados a partir de información pública del INEGI. Fuente original: INEGI.`,
      provider: {
        "@type": "Organization",
        name: "INEGI - Instituto Nacional de Estadística y Geografía",
      },
    },
  };
}

export function generateFAQJsonLD(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
