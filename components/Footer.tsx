import { contacto } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <img src="/logo.png" alt="TIOCR" className="h-9" />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Marketing y servicios publicitarios. Cartelería gigante y
              publicidad exterior en rutas e interior del Paraguay.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Servicios
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Cartelería de ruta</li>
              <li>Pantallas LED</li>
              <li>Gigantografías</li>
              <li>Ploteado de buses</li>
              <li>Campañas en el interior</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Contacto
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`https://wa.me/${contacto.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-brand-cyan"
                >
                  WhatsApp · {contacto.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contacto.whatsapp2}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-brand-cyan"
                >
                  WhatsApp · {contacto.whatsapp2Display}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contacto.phone}`}
                  className="transition hover:text-brand-cyan"
                >
                  Línea fija · {contacto.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contacto.email}`}
                  className="transition hover:text-brand-cyan"
                >
                  {contacto.email}
                </a>
              </li>
              <li className="text-white/50">Paraguay · Cobertura nacional</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          Cobertura: Coronel Oviedo · Ciudad del Este · Encarnación · Pedro Juan
          Caballero · Salto del Guairá · Caacupé · Quiindy · Villa Florida ·
          Corpus Christi.
          <div className="mt-2">
            © {new Date().getFullYear()} Tíos R — Marketing y Servicios
            Publicitarios.
          </div>
        </div>
      </div>
    </footer>
  )
}
