import { servicios } from '@/lib/data'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
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
        backgroundImage: 'linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)), url(/fondo2.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
          <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-cyan/70 bg-brand-navyDeep px-6 py-2.5 text-base font-bold uppercase tracking-[0.25em] text-brand-cyan shadow-[0_8px_28px_-6px_rgba(0,201,247,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
            Qué hacemos
          </span>
          <h2 className="mt-3 font-display text-5xl font-bold tracking-tight text-white md:text-6xl" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.6)" }}>
            Todo lo que necesitás para estar en la calle.
          </h2>
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
                        'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.14), 0 22px 50px -18px rgba(6,20,40,0.45)',
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
                        'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                      border: '1px solid rgba(255,255,255,0.16)',
                      boxShadow:
                        'inset 0 1px 0 rgba(255,255,255,0.1), 0 22px 50px -18px rgba(6,20,40,0.5)',
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

        {/* ============================================================
            Refugio de buses — imagen izq (sin card) + texto der (dentro de card)
            ============================================================ */}
        <div className="mt-20 md:mt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
            {/* IZQUIERDA — card con el texto */}
            <Reveal direction="left-clean">
              <div
                className="relative overflow-hidden rounded-3xl p-8 md:p-10"
                style={{
                  background: 'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.14), 0 30px 60px -18px rgba(6,20,40,0.65), 0 0 60px -20px rgba(0,201,247,0.35)',
                }}
              >
                {/* Glow interno cian */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,247,0.2),transparent_60%)]" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
                    Nuevo servicio
                  </span>

                  <h3 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                    <span className="text-brand-cyan">Refugios de buses</span>
                    <br />
                    <span className="text-white">impactando en cada parada.</span>
                  </h3>

                  <p className="mt-6 max-w-lg text-lg text-white/70">
                    Estructuras premium en puntos de alta afluencia peatonal — tu marca visible las 24 horas donde la gente espera, mira y escanea.
                  </p>

                  <ul className="mt-7 space-y-3">
                    {[
                      'Paneles retro-iluminados de alta visibilidad día y noche',
                      'Ubicaciones estratégicas en avenidas y accesos urbanos',
                      'Impacto directo sobre peatones, ciclistas y automovilistas',
                      'Formato exclusivo, sin competencia visual en el mismo espacio',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg
                          className="mt-1 shrink-0 text-brand-cyan"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        <span className="text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <a href="#contacto" className="btn-cta uppercase tracking-widest">
                      <span>Consultar refugios</span>
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

            {/* DERECHA — escena interactiva: la parada se eleva al hover */}
            <Reveal direction="right-clean" delay={140}>
              <ParadaScene />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}