import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Datos Claros MX — Datos de México en Lenguaje Simple",
    template: "%s | Datos Claros MX",
  },
  description:
    "Todos los datos del INEGI explicados de forma sencilla. Economía, población, salud, educación y más. Información de México que todos pueden entender.",
  keywords: [
    "INEGI",
    "datos México",
    "estadísticas México",
    "economía México",
    "PIB México",
    "inflación México",
    "población México",
    "datos abiertos",
    "censo México",
  ],
  authors: [{ name: "Datos Claros" }],
  openGraph: {
    title: "Datos Claros MX — Datos de México en Lenguaje Simple",
    description:
      "Todos los datos del INEGI explicados de forma sencilla para todos.",
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
        />
      </body>
    </html>
  );
}
