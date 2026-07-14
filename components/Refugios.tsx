import Reveal from './Reveal'
import ParadaScene from './ParadaScene'

/** Banda full-width del servicio Refugios de buses — calle nocturna de fondo */
export default function Refugios() {
  return (
    <section id="refugios" className="relative overflow-hidden">
      {/* ============================================================
          Refugio de buses — banda full-width con la calle nocturna de fondo
          ============================================================ */}
      <div
        className="relative bg-[#080C12]"
        style={{
          backgroundImage: 'url(/fondo3.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
        }}
      >
        {/* Suavizado del borde superior de la banda */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#080C12] to-transparent" />
        <div className="container relative py-16 md:py-24">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
            {/* IZQUIERDA — card con el texto */}
            <Reveal direction="left-clean">
              <div
                className="propuesta-card group relative overflow-hidden rounded-3xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 md:p-8"
                style={{
                  background: 'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
                }}
              >
                {/* Glow interno cian */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,247,0.2),transparent_60%)]" />

                <div className="relative">
                  <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
                    Nuevo servicio
                  </span>

                  <h3 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight md:text-4xl">
                    <span className="text-brand-cyan">Refugios de buses</span>
                    <br />
                    <span className="text-white">impactando en cada parada.</span>
                  </h3>

                  <p className="mt-4 max-w-lg text-base text-white/70">
                    Tu marca visible las 24 horas donde la gente espera, mira y escanea.
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {[
                      'Paneles retro-iluminados día y noche',
                      'Ubicaciones estratégicas en avenidas',
                      'Impacto directo sobre peatones y automovilistas',
                      'Formato exclusivo, sin competencia visual',
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
                        <span className="text-sm text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
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