import { contacto } from '@/lib/data'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-4 pb-14 md:py-6 md:pb-8">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          <Reveal direction="left" className="col-span-2 md:col-span-1">
            <img src="/logo.webp" alt="TIOCR" className="h-5 md:h-7" />
            <p className="mt-1.5 max-w-xs text-[10px] leading-snug text-white/60 md:mt-2.5 md:text-[13px]">
              Marketing y servicios publicitarios. Cartelería gigante y
              publicidad exterior en rutas e interior del Paraguay.
            </p>
          </Reveal>

          <Reveal direction="below" delay={120}>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan md:text-xs">
              Servicios
            </div>
            <ul className="mt-1 space-y-0 text-[10px] leading-relaxed text-white/70 md:mt-2 md:space-y-0.5 md:text-[13px]">
              <li className="transition-colors hover:text-brand-cyan">Cartelería de ruta</li>
              <li className="transition-colors hover:text-brand-cyan">Pantallas LED</li>
              <li className="transition-colors hover:text-brand-cyan">Ploteado de buses</li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={240}>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-brand-cyan md:text-xs">
              Contacto
            </div>
            <ul className="mt-1 space-y-0 text-[10px] leading-relaxed text-white/70 md:mt-2 md:space-y-0.5 md:text-[13px]">
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