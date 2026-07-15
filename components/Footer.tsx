import { contacto } from '@/lib/data'
import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-2.5 pb-10 md:py-6 md:pb-8">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          <Reveal direction="left" className="col-span-2 md:col-span-1">
            <img src="/logo.webp" alt="TIOCR" className="h-4 md:h-7" />
            <p className="mt-1 line-clamp-2 max-w-xs text-[9px] leading-snug text-white/60 md:mt-2.5 md:line-clamp-none md:text-[13px]">
              Marketing y servicios publicitarios. Cartelería gigante y
              publicidad exterior en rutas e interior del Paraguay.
            </p>
          </Reveal>

          <Reveal direction="below" delay={120}>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-brand-cyan md:text-xs md:tracking-widest">
              Servicios
            </div>
            <ul className="mt-0.5 space-y-0 text-[9px] leading-snug text-white/70 md:mt-2 md:space-y-0.5 md:text-[13px] md:leading-relaxed">
              <li className="transition-colors hover:text-brand-cyan">Cartelería de ruta</li>
              <li className="transition-colors hover:text-brand-cyan">Pantallas LED</li>
              <li className="transition-colors hover:text-brand-cyan">Ploteado de buses</li>
            </ul>
          </Reveal>

          <Reveal direction="right" delay={240}>
            <div className="text-[9px] font-semibold uppercase tracking-wider text-brand-cyan md:text-xs md:tracking-widest">
              Contacto
            </div>
            <ul className="mt-0.5 space-y-0 text-[9px] leading-snug text-white/70 md:mt-2 md:space-y-0.5 md:text-[13px] md:leading-relaxed">
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