import { servicios } from '@/lib/data'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

const iconos: Record<string, React.ReactNode> = {
  // Cartel de ruta: pantalla sobre poste con patas
  ruta: (
    <>
      <rect x="3" y="3.5" width="18" height="10.5" rx="2" />
      <path d="M9 14l-2 6.5M15 14l2 6.5M6.2 18.5h11.6" />
    </>
  ),
  // Pantalla LED: monitor con play (contenido dinámico)
  led: (
    <>
      <rect x="2.5" y="4.5" width="19" height="12.5" rx="2" />
      <path d="M10.2 8.2l4.8 2.55-4.8 2.55z" />
      <path d="M12 17v3.5M8.5 20.5h7" />
    </>
  ),
  // Campañas: megáfono
  campana: (
    <>
      <path d="M3 10.8L21 5v13.5L3 13.6v-2.8z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
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
        className="right-[-8%] top-[5%] h-[700px] w-[920px]"
        opacity={0.32}
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
                        'linear-gradient(150deg, rgba(14,34,71,0.72) 0%, rgba(6,20,40,0.78) 100%)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.14), 0 22px 50px -18px rgba(6,20,40,0.45)',
                      backdropFilter: 'blur(22px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                    }}
                  >
                    {/* Ícono grande mitad blanco / mitad cian, en círculo */}
                    <div
                      className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.12))',
                        border: '1px solid rgba(255,255,255,0.18)',
                      }}
                    >
                      <DualIcon icono={s.icono} size={42} id={`grad-f-${s.icono}`} />
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
                        'linear-gradient(150deg, rgba(14,34,71,0.85) 0%, rgba(3,10,26,0.9) 100%)',
                      border: '1px solid rgba(0,201,247,0.4)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 50px -18px rgba(6,20,40,0.5)',
                      backdropFilter: 'blur(22px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                    }}
                  >
                    {/* Glow de fondo */}
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.18),transparent_65%)]" />

                    {/* Loguito grande en círculo */}
                    <div
                      className="relative inline-flex h-28 w-28 items-center justify-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.14))',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <DualIcon icono={s.icono} size={56} id={`grad-b-${s.icono}`} />
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
