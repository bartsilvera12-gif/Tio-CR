import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import CondicionesCarousel from './CondicionesCarousel'

const condiciones = [
  { title: 'Contrato anual.', body: null },
  { title: 'Incluye la primera impresión de la lona.', body: null },
  {
    title: 'Primer pago:',
    body: 'dos meses adelantados (cuotas 01 y 02).',
  },
  {
    title: 'Siguientes pagos:',
    body: 'cuotas 03 a 12, pago mensual adelantado.',
  },
]

/** Estilo idéntico a las cards de "Qué hacemos": navy translúcido con blur */
const glassCardStyle = {
  background:
    'linear-gradient(150deg, rgba(14,34,71,0.72) 0%, rgba(6,20,40,0.78) 100%)',
  border: '1px solid rgba(255,255,255,0.16)',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.14), 0 22px 50px -18px rgba(6,20,40,0.45)',
  backdropFilter: 'blur(22px) saturate(150%)',
  WebkitBackdropFilter: 'blur(22px) saturate(150%)',
} as const

export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="relative overflow-hidden bg-white py-24 text-brand-ink md:py-32"
    >
      {/* Blob principal grande cruzando ambas cards */}
      <GlowBlob
        className="left-[10%] top-[38%] h-[540px] w-[900px]"
        opacity={0.35}
        radius="52% 48% 60% 40% / 48% 55% 45% 52%"
        animated
        speed="slow"
      />
      {/* Blob secundario a la derecha */}
      <GlowBlob
        className="right-[-5%] top-[20%] h-[380px] w-[500px]"
        opacity={0.28}
        rotate={22}
        radius="42% 58% 60% 40% / 55% 42% 58% 45%"
      />
      {/* Blob de acento pequeño detrás del título */}
      <GlowBlob
        className="left-1/2 top-[5%] h-[240px] w-[400px] -translate-x-1/2"
        opacity={0.18}
        rotate={-10}
        radius="55% 45% 62% 38% / 48% 60% 40% 55%"
      />

      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-brand-cyanDark">
            <span className="h-[2px] w-8 rounded-full bg-brand-cyan" />
            Propuesta de inversión
            <span className="h-[2px] w-8 rounded-full bg-brand-cyan" />
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Una inversión clara y transparente
          </h2>
          <p className="mt-5 text-lg text-brand-ink/70">
            Tarifa fija por cara de cartel, con todo lo necesario para salir a
            la ruta incluido.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Card izquierda: precio */}
          <Reveal direction="below">
            <div
              className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-8 text-white md:p-10"
              style={glassCardStyle}
            >
              {/* Glow interno cian */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,201,247,0.22),transparent_60%)]" />

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
                  por cada{' '}
                  <strong className="text-white">faz / cara</strong> del cartel
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
              className="relative h-full overflow-hidden rounded-3xl p-8 text-white md:p-10"
              style={glassCardStyle}
            >
              <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                Condiciones
              </div>

              <CondicionesCarousel items={condiciones} theme="dark" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
