import { contacto } from '@/lib/data'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <Reveal direction="left">
            <img src="/logo.png" alt="TIOCR" className="h-9" />
            <p className="mt-5 max-w-xs text-sm text-white/60">
              Marketing y servicios publicitarios. Cartelería gigante y
              publicidad exterior en rutas e interior del Paraguay.
            </p>
          </Reveal>

          <Reveal direction="below" delay={120}>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Servicios
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="transition-colors hover:text-brand-cyan">Cartelería de ruta</li>
              <li className="transition-colors hover:text-brand-cyan">Pantallas LED</li>
              <li className="transition-colors hover:text-brand-cyan">Campañas en el interior</li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={240}>
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
          </Reveal>
        </div>

        <Reveal delay={400}>
          <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
            Cobertura: Coronel Oviedo · Ciudad del Este · Encarnación · Pedro Juan
            Caballero · Salto del Guairá · Caacupé · Quiindy · Villa Florida ·
            Corpus Christi.
            <div className="mt-2">
              © {new Date().getFullYear()} Tíos R — Marketing y Servicios
              Publicitarios.
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
