import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso de Privacidad",
  description: "Aviso de Privacidad de Datos Claros MX, en cumplimiento con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.",
};

export default function PrivacidadPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="glass-card p-8 md:p-12">
        <h1 className="text-3xl font-heading font-bold gradient-text mb-8">Aviso de Privacidad</h1>
        
        <div className="prose prose-invert max-w-none text-[var(--color-text-secondary)] space-y-6">
          <p>
            En cumplimiento con lo establecido por la <strong>Ley Federal de Protección de Datos Personales en Posesión de los Particulares</strong> (LFPDPPP) en México, <strong>Datos Claros MX</strong> pone a su disposición el presente Aviso de Privacidad.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">1. Identidad y Domicilio</h2>
          <p>
            Datos Claros MX (en adelante, "la Plataforma") es un portal web de acceso público y gratuito que recopila y simplifica información estadística. Tratamos sus datos bajo los más estrictos estándares de seguridad y privacidad digital.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">2. Datos Personales Recabados</h2>
          <p>
            La Plataforma <strong>no solicita ni almacena datos personales sensibles</strong>. Al navegar en nuestro sitio, podemos recopilar automáticamente información técnica a través de cookies propias o de terceros, que incluye:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Dirección IP anatimizada.</li>
            <li>Tipo de navegador y sistema operativo.</li>
            <li>Páginas visitadas dentro del portal para fines estadísticos.</li>
          </ul>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">3. Finalidad del Tratamiento de Datos</h2>
          <p>La información técnica recopilada se utiliza exclusivamente para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mejorar la experiencia de usuario y el rendimiento del sitio.</li>
            <li>Fines analíticos y medición de tráfico (mediante herramientas de terceros como Google Analytics).</li>
            <li>Mostra publicidad relevante (mediante Google AdSense).</li>
          </ul>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">4. Proveedores de Terceros y Google AdSense</h2>
          <p>
            Nuestro sitio utiliza <strong>Google AdSense</strong> para mostrar anuncios. Los proveedores de terceros, incluido Google, utilizan cookies para mostrar anuncios relevantes basándose en las visitas anteriores de un usuario a nuestro sitio web u otros sitios en Internet.
          </p>
          <p>
            El uso de cookies de publicidad permite a Google y a sus socios mostrar anuncios basados en sus visitas. Los usuarios pueden inhabilitar la publicidad personalizada visitando la <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent-cyan)] hover:underline">Configuración de Anuncios de Google</a>.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">5. Derechos ARCO</h2>
          <p>
            Al no solicitar información personal identificable (como nombres, correos o teléfonos), el ejercicio de los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición) no aplica sobre los registros de navegación anónimos. Si usted decide enviarnos un correo electrónico para consultas, sus datos de contacto no serán compartidos y serán eliminados tras resolver la duda.
          </p>

          <h2 className="text-xl font-heading text-white mt-8 mb-4">6. Cambios al Aviso de Privacidad</h2>
          <p>
            Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Dichas modificaciones estarán disponibles en esta misma página identificando la fecha de la última actualización.
          </p>

          <p className="mt-12 text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border-subtle)] pt-6">
            Última actualización: <strong>Abril de 2026</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
