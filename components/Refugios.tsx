import { servicios } from '@/lib/data'
import Reveal from './Reveal'
import ParadaScene from './ParadaScene'
import { SpotlightCard } from './ui/spotlight-card'

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
  // Refugio: techo + postes + panel retro-iluminado + banco
  refugio: (
    <>
      <path d="M3 5.5h18" />
      <path d="M5 5.5v14M19 5.5v14" />
      <rect x="7.5" y="8.5" width="5" height="7.5" rx="0.8" />
      <path d="M15 15h4M16 15v4.5M18 15v4.5" />
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

/** Banda nocturna de servicios: 4 flip cards (2×2) + parada interactiva */
export default function Refugios() {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-[#080C12]"
      style={{
        backgroundImage: 'url(/fondo-colectivo.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center bottom',
      }}
    >
      {/* Suavizado del borde superior de la banda */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/70 to-transparent" />

      <div className="container relative py-12 md:py-24">
        {/* Encabezado */}
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-cyan/70 bg-brand-navyDeep px-6 py-2.5 text-base font-bold uppercase tracking-[0.25em] text-brand-cyan shadow-[0_8px_28px_-6px_rgba(0,201,247,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
            Qué hacemos
          </span>
          <h2
            className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl"
            style={{ textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}
          >
            Todo lo que necesitás para estar en la calle.
          </h2>
        </Reveal>

        {/* Grid: 4 cards (2×2) a la izquierda + parada a la derecha,
            envuelto en el marco spotlight (solo borde, sin card) */}
        <SpotlightCard
          glowColor="blue"
          glowSize={380}
          className="mt-12 rounded-[2rem] p-4 md:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {servicios.map((s, i) => (
              <article key={s.titulo} className="h-full">
                {/* Zona de hover estable (no rota) */}
                <div className="card-spin-zone group h-full">
                  <div className="card-flip3d">
                    {/* ---- Cara frontal: vidrio azul ---- */}
                    <div
                      className="card-face relative flex h-full flex-col justify-center overflow-hidden rounded-2xl p-3 sm:min-h-[250px] sm:p-6 text-white"
                      style={{
                        background:
                          'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        boxShadow:
                          'inset 0 1px 0 rgba(255,255,255,0.14), 0 22px 50px -18px rgba(6,20,40,0.45)',
                        backdropFilter: 'blur(22px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                      }}
                    >
                      {/* Header: ícono + título lado a lado */}
                      <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
                        <div
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full sm:h-12 sm:w-12"
                          style={{
                            background:
                              'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.12))',
                            border: '1px solid rgba(255,255,255,0.18)',
                            boxShadow: '0 8px 24px -8px rgba(0,201,247,0.35)',
                          }}
                        >
                          <DualIcon icono={s.icono} size={26} id={`grad-f-${s.icono}`} />
                        </div>
                        <h3 className="font-display text-[0.85rem] font-bold leading-tight text-white sm:text-[1.2rem]">
                          {s.titulo}
                        </h3>
                      </div>

                      <p className="text-[11px] leading-snug text-white/70 sm:text-sm">{s.descripcion}</p>

                      <ul className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                        {s.detalles.map((d) => (
                          <li key={d} className="flex items-center gap-1.5 text-[10px] text-white/70 sm:gap-2 sm:text-[13px]">
                            <svg
                              className="shrink-0 text-brand-cyan"
                              width="12"
                              height="12"
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
                      className="card-face card-face-back flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl p-3 text-center sm:gap-5 sm:p-6"
                      style={{
                        background:
                          'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                        border: '1px solid rgba(255,255,255,0.16)',
                        boxShadow:
                          'inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 50px -18px rgba(6,20,40,0.5)',
                        backdropFilter: 'blur(22px) saturate(150%)',
                        WebkitBackdropFilter: 'blur(22px) saturate(150%)',
                      }}
                    >
                      {/* Loguito grande en círculo */}
                      <div
                        className="relative inline-flex h-11 w-11 items-center justify-center rounded-full sm:h-20 sm:w-20"
                        style={{
                          background:
                            'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.14))',
                          border: '1px solid rgba(255,255,255,0.2)',
                          boxShadow: '0 10px 30px -10px rgba(0,201,247,0.45)',
                        }}
                      >
                        <span className="sm:hidden">
                          <DualIcon icono={s.icono} size={24} id={`grad-bm-${s.icono}`} />
                        </span>
                        <span className="hidden sm:inline">
                          <DualIcon icono={s.icono} size={46} id={`grad-b-${s.icono}`} />
                        </span>
                      </div>

                      <h3 className="relative font-display text-[0.9rem] font-bold text-white sm:text-[1.35rem]">
                        {s.titulo}
                      </h3>

                      {/* CTA con el mismo formato que Solicitar presupuesto */}
                      <a href="#contacto" className="btn-cta !px-4 !py-2 !text-[11px] uppercase tracking-widest sm:!px-7 sm:!py-3 sm:!text-sm">
                        <span>Consultar</span>
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
              </article>
            ))}
          </div>

          {/* DERECHA — escena interactiva: la parada se eleva al hover */}
          <Reveal direction="right-clean" delay={140}>
            <ParadaScene />
          </Reveal>
          </div>
        </SpotlightCard>
      </div>
    </section>
  )
}