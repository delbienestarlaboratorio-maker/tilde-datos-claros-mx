import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white font-bold text-sm">
                DA
              </div>
              <span className="font-heading text-lg font-semibold gradient-text">
                Datos Abiertos MX
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              Datos públicos del INEGI traducidos a lenguaje sencillo para todos los mexicanos.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-heading font-semibold text-sm uppercase tracking-wider text-[var(--color-text-secondary)] mb-4">
              Explorar
            </h3>
            <ul className="space-y-2">
              {["Categorías", "Mapa Interactivo", "Buscar Datos"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(/ /g, "-").replace("í", "i")}`}
                    className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-cyan)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4">
              Legal y Política
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacidad"
                  className="hover:text-[var(--color-accent-cyan)] transition-colors"
                >
                  Aviso de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="hover:text-[var(--color-accent-cyan)] transition-colors"
                >
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-[var(--color-accent-cyan)] transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

      <div className="border-t border-[var(--color-border-subtle)] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Datos Claros MX — Un proyecto del ecosistema Tilde
          </p>
          <p className="text-xs text-[var(--color-text-muted)]">
            Hecho con 💙 para México
          </p>
        </div>
      </div>
    </footer>
  );
}
