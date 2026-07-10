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
    <section id="servicios" className="section relative overflow-hidden bg-white text-brand-ink">
      {/* Blob cian sobre fondo blanco */}
      <GlowBlob
        className="right-[5%] top-[30%] h-[400px] w-[540px]"
        opacity={0.14}
        rotate={18}
        radius="45% 55% 62% 38% / 55% 40% 60% 45%"
      />
      <GlowBlob
        className="left-[-2%] bottom-[12%] h-[300px] w-[400px]"
        opacity={0.09}
        rotate={-20}
        radius="60% 40% 48% 52% / 44% 58% 42% 56%"
      />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Todo lo que necesitás para estar en la calle.
          </h2>
          <p className="mt-5 text-lg text-brand-ink/70">
            De la producción al montaje: cubrimos cada etapa de tu campaña de
            publicidad exterior.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 150} as="article" className="h-full" direction="below">
              {/* Zona de hover estable (no rota) */}
              <div className="card-spin-zone group h-full">
                <div className="card-flip3d">
                  {/* ---- Cara frontal (clara) ---- */}
                  <div className="card-face relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-white p-8 shadow-[0_18px_45px_-20px_rgba(6,20,40,0.25)]">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-cyan/12 text-brand-cyanDark">
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

                    <h3 className="font-display text-2xl font-bold text-brand-ink">
                      {s.titulo}
                    </h3>
                    <p className="mt-3 text-brand-ink/70">{s.descripcion}</p>

                    <ul className="mt-6 space-y-2.5">
                      {s.detalles.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-brand-ink/70">
                          <svg
                            className="shrink-0 text-brand-cyanDark"
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
                  </div>

                  {/* ---- Cara trasera (navy, contraste) ---- */}
                  <div className="card-face card-face-back flex flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border border-brand-cyan/40 bg-gradient-to-br from-brand-navyLight to-brand-navyDeep p-8 text-center shadow-[0_18px_45px_-20px_rgba(6,20,40,0.4)]">
                    {/* Glow de fondo */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.18),transparent_65%)]" />

                    {/* Loguito grande */}
                    <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-brand-cyan/15 text-brand-cyan">
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {iconos[s.icono]}
                      </svg>
                    </div>

                    <h3 className="relative font-display text-2xl font-bold text-white">
                      {s.titulo}
                    </h3>

                    {/* CTA con el mismo formato que Solicitar presupuesto */}
                    <a href="#contacto" className="btn-cta uppercase tracking-widest">
                      <span>Consultar este servicio</span>
                      <svg
                        className="cta-arrow"
                        width="16"
                        height="16"
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
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
