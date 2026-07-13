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
          <div className="mt-14 border-t border-white/10 pt-6 text-xs leading-relaxed text-white/40">
            Carteles de ruta en Caacupé, Quiindy, Villa Florida y Corpus Christi ·
            Cartelería en Pedro Juan Caballero, Santa Rita, Katueté y Yguazú ·
            Publicidad exterior en Campo 9, Santa Rosa del Aguaray, San Pedro,
            Obligado, María Auxiliadora y Tavapy · Cobertura en Central,
            Paraguarí, Misiones, Amambay, Canindeyú, Caaguazú, Alto Paraná,
            Itapúa y San Pedro.

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>
                  © {new Date().getFullYear()} Tíos R — Marketing y Servicios
                  Publicitarios.
                </span>
                <a
                  href="/privacidad"
                  className="text-white/60 transition hover:text-brand-cyan"
                >
                  Política de privacidad
                </a>
              </div>

              <a
                href="https://neura.com.py"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-white/50 transition hover:text-brand-cyan"
              >
                <span>Desarrollado por</span>
                <span className="font-display font-bold tracking-wide text-white transition group-hover:text-brand-cyan">
                  Neura
                </span>
                <svg
                  className="transition-transform group-hover:translate-x-0.5"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
