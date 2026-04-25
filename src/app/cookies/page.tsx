import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de Cookies utilizada en Datos Claros MX.",
};

export default function CookiesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-3xl font-heading font-bold gradient-text mb-8">Política de Cookies</h1>
        
        <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] space-y-6">
          <p>
            Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en <strong>Datos Claros MX</strong>, los tipos de cookies que empleamos y cómo usted puede controlar sus preferencias.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en su navegador o dispositivo (computadora, tablet, smartphone) cuando visita una página web. Sirven para recordar sus preferencias, mejorar la velocidad del sitio y ofrecer una experiencia más personalizada.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">2. ¿Cómo utilizamos las cookies?</h2>
          <p>
            En Datos Claros MX usamos cookies principalmente para tres propósitos esenciales:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Cookies Esenciales o Técnicas:</strong> Son necesarias para que la arquitectura de nuestra plataforma funcione correctamente y de forma ultra-rápida. No capturan datos personales identificables.</li>
            <li><strong>Cookies Analíticas:</strong> Nos ayudan a entender el volumen de tráfico, qué indicadores son los más buscados y cómo interactúan los usuarios con nuestra interfaz.</li>
            <li><strong>Cookies Publicitarias (Google AdSense):</strong> Para que el sitio se mantenga gratuito, utilizamos proveedores de publicidad de terceros (Google). Estas cookies permiten mostrarle anuncios relevantes y medir su eficacia.</li>
          </ul>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">3. Las cookies de Google (DART)</h2>
          <p>
            Google, como proveedor externo, utiliza cookies para publicar anuncios en nuestro sitio. El uso de la cookie DART permite a Google mostrar anuncios a nuestros visitantes en función de sus visitas a nuestro sitio web y a otros sitios de Internet. 
          </p>
          <p>
            Los usuarios pueden darse de baja del uso de la cookie DART visitando la política de privacidad de la red de anuncios y contenido de Google en la siguiente dirección web: <a href="http://www.google.com/privacy_ads.html" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Políticas de anuncios de Google</a>.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">4. ¿Cómo controlar sus cookies?</h2>
          <p>
            La mayoría de los navegadores web le permiten controlar las cookies a través de las preferencias de configuración. Usted puede configurar su navegador para que rechace todas las cookies o le indique cuándo se está enviando una. Sin embargo, al deshabilitarlas, algunas funciones de nuestro sitio podrían no procesar de manera ptima.
          </p>
          <p>
            Para gestionar la publicidad personalizada, le sugerimos administrar su configuración directamente en las herramientas que Google provee a los usuarios web.
          </p>

          <p className="mt-12 text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-6">
            Última actualización: <strong>Abril de 2026</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
