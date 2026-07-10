import { servicios } from '@/lib/data'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

const iconos: Record<string, React.ReactNode> = {
  ruta: <path d="M6 20L10 4h4l4 16M9 12h6" />,
  led: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  campana: (
    <>
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
}

export default function Servicios() {
  return (
    <section id="servicios" className="section relative overflow-hidden bg-brand-navy text-white">
      <GlowBlob
        className="right-[5%] top-[38%] h-[380px] w-[500px]"
        opacity={0.1}
        rotate={18}
        radius="45% 55% 62% 38% / 55% 40% 60% 45%"
      />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Todo lo que necesitás para estar en la calle.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            De la producción al montaje: cubrimos cada etapa de tu campaña de
            publicidad exterior.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 150} as="article" className="h-full" direction="right">
              <div className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:!border-brand-cyan/50 hover:!bg-white/[0.09] hover:shadow-[0_28px_60px_-18px_rgba(0,201,247,0.45)]">
                {/* Barrido de luz al asentarse la card */}
                <span className="card-sheen" />

                {/* Glow interno que aparece en hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(0,201,247,0.12),transparent_60%)]" />

                {/* Ícono */}
                <div className="relative mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-brand-navy">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {iconos[s.icono]}
                  </svg>
                </div>

                <h3 className="relative font-display text-2xl font-bold text-white">
                  {s.titulo}
                </h3>
                <p className="relative mt-3 text-white/70">{s.descripcion}</p>

                {/* Detalles */}
                <ul className="relative mt-6 space-y-2.5">
                  {s.detalles.map((d) => (
                    <li key={d} className="flex items-center gap-2.5 text-sm text-white/60 transition-colors duration-300 group-hover:text-white/80">
                      <svg
                        className="shrink-0 text-brand-cyan"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* CTA que aparece en hover */}
                <div className="relative mt-auto pt-8">
                  <a
                    href="#contacto"
                    className="inline-flex translate-y-2 items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-cyan opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    Consultar este servicio
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>

                {/* Línea de acento inferior que crece en hover */}
                <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brand-cyan to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
