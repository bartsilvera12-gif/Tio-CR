import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import CondicionesCarousel from './CondicionesCarousel'

const condiciones = [
  {
    title: 'Contrato anual.',
    body: null,
  },
  {
    title: 'Incluye la primera impresión de la lona.',
    body: null,
  },
  {
    title: 'Primer pago:',
    body: 'dos meses adelantados (cuotas 01 y 02).',
  },
  {
    title: 'Siguientes pagos:',
    body: 'cuotas 03 a 12, pago mensual adelantado.',
  },
]

export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="section relative overflow-hidden bg-brand-navyDeep text-white"
    >
      <GlowBlob
        className="right-[6%] top-[15%] h-[380px] w-[500px]"
        opacity={0.14}
        radius="50% 50% 55% 45% / 48% 52% 45% 55%"
        animated
        speed="slow"
      />
      <GlowBlob
        className="left-[5%] bottom-[10%] h-[320px] w-[420px]"
        opacity={0.09}
        rotate={20}
        radius="42% 58% 60% 40% / 55% 42% 58% 45%"
      />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
            <span className="h-[2px] w-8 rounded-full bg-brand-cyan" />
            Propuesta de inversión
            <span className="h-[2px] w-8 rounded-full bg-brand-cyan" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Una inversión clara y transparente
          </h2>
          <p className="mt-5 text-lg text-white/70">
            Tarifa fija por cara de cartel, con todo lo necesario para salir a la
            ruta incluido.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Card izquierda: precio */}
          <Reveal direction="below">
            <div
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10"
              style={{
                background:
                  'linear-gradient(160deg, rgba(14,34,71,0.75) 0%, rgba(4,12,26,0.82) 100%)',
                border: '1px solid rgba(0,201,247,0.4)',
                boxShadow:
                  'inset 0 1px 0 rgba(255,255,255,0.12), 0 22px 60px -20px rgba(0,201,247,0.35)',
                backdropFilter: 'blur(22px) saturate(150%)',
                WebkitBackdropFilter: 'blur(22px) saturate(150%)',
              }}
            >
              {/* Glow interno cian */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,201,247,0.18),transparent_60%)]" />

              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                  Costo mensual
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="font-display text-3xl font-bold text-brand-cyan md:text-4xl">
                    ₲
                  </span>
                  <span
                    className="stat-number font-display text-5xl font-bold tracking-tight text-brand-cyan md:text-6xl lg:text-7xl"
                    style={{ lineHeight: 1 }}
                  >
                    4.000.000
                  </span>
                  <span className="pb-2 text-lg font-semibold text-white/70">
                    + IVA
                  </span>
                </div>

                <p className="mt-4 text-base text-white/70">
                  por cada <strong className="text-white">faz / cara</strong> del
                  cartel
                </p>
              </div>

              <a
                href="#contacto"
                className="btn-cta relative mt-10 self-start uppercase tracking-widest"
              >
                <span>Solicitar propuesta</span>
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
          </Reveal>

          {/* Card derecha: condiciones */}
          <Reveal direction="below" delay={140}>
            <div
              className="glass relative h-full overflow-hidden rounded-3xl p-8 md:p-10"
              style={{ backdropFilter: 'blur(22px) saturate(150%)' }}
            >
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                Condiciones
              </div>

              <CondicionesCarousel items={condiciones} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
