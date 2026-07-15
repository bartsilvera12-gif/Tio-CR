import { servicios } from '@/lib/data'
import Reveal from './Reveal'
import ParadaScene from './ParadaScene'

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
        backgroundImage: 'url(/fondo3.webp)',
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

        {/* Grid: 4 cards (2×2) a la izquierda + parada a la derecha */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
          <div className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0">
            {servicios.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 120} as="article" className="h-full w-[78vw] shrink-0 snap-center sm:w-auto sm:shrink" direction="below">
                {/* Zona de hover estable (no rota) */}
                <div className="card-spin-zone group h-full">
                  <div className="card-flip3d">
                    {/* ---- Cara frontal: vidrio azul ---- */}
                    <div
                      className="card-face relative flex h-full flex-col overflow-hidden rounded-2xl p-5 text-white"
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
                      {/* Ícono grande mitad blanco / mitad cian, en círculo */}
                      <div
                        className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full"
                        style={{
                          background:
                            'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.12))',
                          border: '1px solid rgba(255,255,255,0.18)',
                          boxShadow: '0 8px 24px -8px rgba(0,201,247,0.35)',
                        }}
                      >
                        <DualIcon icono={s.icono} size={32} id={`grad-f-${s.icono}`} />
                      </div>

                      <h3 className="font-display text-[1.35rem] font-bold text-white">
                        {s.titulo}
                      </h3>
                      <p className="mt-2 text-sm leading-snug text-white/70">{s.descripcion}</p>

                      <ul className="mt-4 space-y-2">
                        {s.detalles.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-[13px] text-white/70">
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
                      className="card-face card-face-back flex flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl p-6 text-center"
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
                        className="relative inline-flex h-20 w-20 items-center justify-center rounded-full"
                        style={{
                          background:
                            'linear-gradient(160deg, rgba(255,255,255,0.14), rgba(0,201,247,0.14))',
                          border: '1px solid rgba(255,255,255,0.2)',
                          boxShadow: '0 10px 30px -10px rgba(0,201,247,0.45)',
                        }}
                      >
                        <DualIcon icono={s.icono} size={46} id={`grad-b-${s.icono}`} />
                      </div>

                      <h3 className="relative font-display text-[1.35rem] font-bold text-white">
                        {s.titulo}
                      </h3>

                      {/* CTA con el mismo formato que Solicitar presupuesto */}
                      <a href="#contacto" className="btn-cta uppercase tracking-widest">
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
              </Reveal>
            ))}
          </div>

          {/* DERECHA — escena interactiva: la parada se eleva al hover */}
          <Reveal direction="right-clean" delay={140}>
            <ParadaScene />
          </Reveal>
        </div>
      </div>
    </section>
  )
}