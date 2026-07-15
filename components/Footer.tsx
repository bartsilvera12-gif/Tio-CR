import { contacto } from '@/lib/data'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-6 pb-16 md:pb-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <Reveal direction="left" className="col-span-2 md:col-span-1">
            <img src="/logo.webp" alt="TIOCR" className="h-7" />
            <p className="mt-2.5 max-w-xs text-[13px] text-white/60">
              Marketing y servicios publicitarios. Cartelería gigante y
              publicidad exterior en rutas e interior del Paraguay.
            </p>
          </Reveal>

          <Reveal direction="below" delay={120}>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Servicios
            </div>
            <ul className="mt-2 space-y-0.5 text-[13px] text-white/70">
              <li className="transition-colors hover:text-brand-cyan">Cartelería de ruta</li>
              <li className="transition-colors hover:text-brand-cyan">Pantallas LED</li>
              <li className="transition-colors hover:text-brand-cyan">Ploteado de buses</li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={240}>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Contacto
            </div>
            <ul className="mt-2 space-y-0.5 text-[13px] text-white/70">
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

      </div>
    </footer>
  )
}