import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de Uso de la plataforma Datos Claros MX.",
};

export default function TerminosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-3xl font-heading font-bold gradient-text mb-8">Términos y Condiciones de Uso</h1>
        
        <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] space-y-6">
          <p>
            Bienvenido a <strong>Datos Claros MX</strong>. Al acceder y utilizar este portal web, usted acepta cumplir con los siguientes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de ellos, le solicitamos no utilizar esta plataforma.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">1. Naturaleza del Sitio</h2>
          <p>
            Datos Claros MX es una iniciativa independiente y de carácter informativo. <strong>No somos una entidad gubernamental ni representamos oficialmente al Instituto Nacional de Estadística y Geografía (INEGI)</strong> ni a ninguna otra dependencia del Gobierno de México.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">2. Uso de la Información (Licencia Abierta)</h2>
          <p>
            La información estadística mostrada en este sitio proviene de fuentes públicas oficiales (Datos Abiertos de México) e históricas. El contenido de la plataforma se presenta "tal cual" con fines educativos, periodísticos y de análisis. 
          </p>
          <p>
            Usted es libre de copiar, compartir, difundir y utilizar los datos que aquí se muestran, siempre y cuando el uso de dicha información no sea para fines ilícitos. Agradecemos (aunque no obligamos) citar a Datos Claros MX como su fuente simplificada de información.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">3. Ausencia de Garantías M</h2>
          <p>
            Aunque realizamos un esfuerzo exhaustivo para asegurar la exactitud de los datos mediante procesos automatizados, <strong>Datos Claros MX no garantiza la precisión absoluta</strong>, puntualidad o integridad de la información proporcionada. La toma de decisiones financieras, académicas o legales basadas en la información de este sitio es responsabilidad exclusiva del usuario.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">4. Disponibilidad del Sistema</h2>
          <p>
            Procuramos que el sitio sea ultrarrápido y esté siempre en línea. No obstante, nos reservamos el derecho de suspender, modificar o interrumpir el acceso a la plataforma en cualquier momento y sin previo aviso por razones de mantenimiento técnico.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">5. Propiedad Intelectual</h2>
          <p>
            El diseño original del sitio, la arquitectura de software, logotipos (DC), códigos, estilos visuales y la síntesis generada por inteligencia artificial son propiedad exclusiva de Datos Claros MX. Los datos estadísticos puros subyacentes son de dominio público.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">6. Enlaces a Terceros</h2>
          <p>
            Este sitio web puede contener enlaces o referencias a sitios web de terceros y mostrar publicidad a través de redes como Google AdSense. No tenemos control sobre el contenido de dichos sitios, por lo que no asumimos ninguna responsabilidad directa sobre sus páginas ni prácticas de privacidad.
          </p>

          <p className="mt-12 text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-6">
            Última actualización: <strong>Abril de 2026</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
