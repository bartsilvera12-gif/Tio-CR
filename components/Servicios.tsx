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

/** Ícono con stroke mitad blanco / mitad cian */
function DualIcon({
  icono,
  size,
  id,
}: {
  icono: string
  size: number
  id: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${id})`}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.5" stopColor="#FFFFFF" />
          <stop offset="0.5" stopColor="#00C9F7" />
        </linearGradient>
      </defs>
      {iconos[icono]}
    </svg>
  )
}

export default function Servicios() {
  return (
    <section id="servicios" className="section relative overflow-hidden bg-white text-brand-ink">
      {/* Blob principal: grande, visible y animado */}
      <GlowBlob
        className="right-[-5%] top-[15%] h-[560px] w-[720px]"
        opacity={0.24}
        radius="45% 55% 62% 38% / 55% 40% 60% 45%"
        animated
      />
      <GlowBlob
        className="left-[-2%] bottom-[12%] h-[300px] w-[400px]"
        opacity={0.1}
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
                  {/* ---- Cara frontal: vidrio azul ---- */}
                  <div
                    className="card-face relative flex h-full flex-col overflow-hidden rounded-2xl p-8 text-white"
                    style={{
                      background:
                        'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.96) 100%)',
                      border: '1px solid rgba(255,255,255,0.14)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.12), 0 22px 50px -18px rgba(6,20,40,0.5)',
                      backdropFilter: 'blur(20px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(150%)',
                    }}
                  >
                    {/* Ícono grande mitad blanco / mitad cian */}
                    <div className="mb-6 inline-flex h-[72px] w-[72px] items-center justify-center rounded-2xl bg-white/10">
                      <DualIcon icono={s.icono} size={38} id={`grad-f-${s.icono}`} />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">
                      {s.titulo}
                    </h3>
                    <p className="mt-3 text-white/70">{s.descripcion}</p>

                    <ul className="mt-6 space-y-2.5">
                      {s.detalles.map((d) => (
                        <li key={d} className="flex items-center gap-2.5 text-sm text-white/70">
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
                  </div>

                  {/* ---- Cara trasera ---- */}
                  <div
                    className="card-face card-face-back flex flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl p-8 text-center"
                    style={{
                      background:
                        'linear-gradient(150deg, rgba(14,34,71,0.97) 0%, rgba(3,10,26,0.98) 100%)',
                      border: '1px solid rgba(0,201,247,0.4)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 50px -18px rgba(6,20,40,0.55)',
                    }}
                  >
                    {/* Glow de fondo */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.18),transparent_65%)]" />

                    {/* Loguito grande */}
                    <div className="relative inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-white/10">
                      <DualIcon icono={s.icono} size={48} id={`grad-b-${s.icono}`} />
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
