import { servicios } from '@/lib/data'
import { LiquidMetalButton } from './ui/liquid-metal-button'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

const iconos: Record<string, React.ReactNode> = {
  // Cartel de ruta: pantalla limpia sobre poste central
  ruta: (
    <>
      <rect x="3.5" y="4" width="17" height="10" rx="1.8" />
      <path d="M12 14v5.5" />
      <path d="M8 19.5h8" />
    </>
  ),
  // Pantalla LED: monitor con play centrado
  led: (
    <>
      <rect x="3" y="4.5" width="18" height="12" rx="2" />
      <path d="M10.3 8.3l4.6 2.45-4.6 2.45z" strokeLinejoin="round" />
      <path d="M12 16.5v3M9 19.5h6" />
    </>
  ),
  // Campañas: megáfono (legacy — no se usa)
  campana: (
    <>
      <path d="M3 10.8L21 5v13.5L3 13.6v-2.8z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  // Bus: ploteado urbano — carrocería + ventanas + ruedas
  bus: (
    <>
      <rect x="3.5" y="5" width="17" height="11.5" rx="2" />
      <path d="M3.5 10h17" />
      <path d="M7.5 6.5v3M11 6.5v3M14.5 6.5v3M18 6.5v3" />
      <circle cx="8" cy="18.5" r="1.5" />
      <circle cx="16" cy="18.5" r="1.5" />
      <path d="M3.5 16.5v2M20.5 16.5v2" />
    </>
  ),
}

/** Ícono con stroke mitad blanco (arriba) / mitad cian (abajo),
    corte único a mitad del ícono completo (userSpaceOnUse) */
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
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <defs>
        <linearGradient
          id={id}
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="0"
          y2="24"
        >
          <stop offset="0.48" stopColor="#FFFFFF" />
          <stop offset="0.52" stopColor="#00C9F7" />
        </linearGradient>
      </defs>
      {iconos[icono]}
    </svg>
  )
}

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden pt-8 pb-16 text-brand-ink md:pt-10 md:pb-20"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.40), rgba(255,255,255,0.40)), url(/fondo2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
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
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-6 py-2.5 text-base font-bold uppercase tracking-[0.25em] text-brand-cyanDark shadow-[0_4px_18px_-6px_rgba(0,201,247,0.4)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
            Qué hacemos
          </span>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Todo lo que necesitás para estar en la calle.
          </h2>
          <p className="mt-3 text-lg text-brand-ink/70">
            De la producción al montaje: cubrimos cada etapa de tu campaña de
            publicidad exterior.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 150} as="article" className="h-full" direction="below">
              {/* Zona de hover estable (no rota) */}
              <div className="card-spin-zone group h-full">
                <div className="card-flip3d">
                  {/* ---- Cara frontal: vidrio azul ---- */}
                  <div
                    className="card-face relative flex h-full flex-col overflow-hidden rounded-2xl p-6 text-white"
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
                      className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.12))',
                        border: '1px solid rgba(255,255,255,0.18)',
                        boxShadow: '0 8px 24px -8px rgba(0,201,247,0.35)',
                      }}
                    >
                      <DualIcon icono={s.icono} size={44} id={`grad-f-${s.icono}`} />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-white">
                      {s.titulo}
                    </h3>
                    <p className="mt-3 text-white/70">{s.descripcion}</p>

                    <ul className="mt-5 space-y-2.5">
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
                        'linear-gradient(150deg, rgba(14,34,71,0.72) 0%, rgba(6,20,40,0.78) 100%)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 50px -18px rgba(6,20,40,0.5)',
                      backdropFilter: 'blur(22px) saturate(150%)',
                      WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                    }}
                  >
                    {/* Loguito grande en círculo */}
                    <div
                      className="relative inline-flex h-32 w-32 items-center justify-center rounded-full"
                      style={{
                        background:
                          'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.14))',
                        border: '1px solid rgba(255,255,255,0.2)',
                        boxShadow: '0 10px 30px -10px rgba(0,201,247,0.45)',
                      }}
                    >
                      <DualIcon icono={s.icono} size={64} id={`grad-b-${s.icono}`} />
                    </div>

                    <h3 className="relative font-display text-2xl font-bold text-white">
                      {s.titulo}
                    </h3>

                    {/* CTA con el mismo formato que Solicitar presupuesto */}
                    <a href="#contacto" aria-label="Consultar este servicio" className="inline-block">
                      <LiquidMetalButton label="Consultar este servicio" variant="cyan" width={250} />
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