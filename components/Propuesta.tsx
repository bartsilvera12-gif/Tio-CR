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
    'linear-gradient(150deg, rgba(14,34,71,0.94) 0%, rgba(6,20,40,0.97) 100%)',
  border: '1px solid rgba(255,255,255,0.16)',
  boxShadow:
    'inset 0 1px 0 rgba(255,255,255,0.14), 0 22px 50px -18px rgba(6,20,40,0.45)',
} as const

export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="relative overflow-hidden py-24 text-white md:py-32"
      style={{
        backgroundImage: 'url(/fondo2.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blob principal grande cruzando ambas cards */}
      <GlowBlob
        className="left-[10%] top-[38%] h-[540px] w-[900px]"
        opacity={0.35}
        radius="52% 48% 60% 40% / 48% 55% 45% 52%"
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
          <span className="inline-flex items-center gap-2.5 rounded-full border-2 border-brand-cyan/70 bg-brand-navyDeep px-6 py-2.5 text-base font-bold uppercase tracking-[0.25em] text-brand-cyan shadow-[0_8px_28px_-6px_rgba(0,201,247,0.55),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
            Propuesta de inversión
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.55)" }}>
            Una inversión clara y transparente
          </h2>
        </Reveal>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <Reveal direction="left">
            <div
              className="propuesta-card spotlight-card relative h-full overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 ease-out hover:-translate-y-2 md:p-10"
              style={glassCardStyle}
            >
              {/* Glow interno cian */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,247,0.22),transparent_60%)]" />

              <div className="relative">
                <div className="mb-6 text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                  Condiciones
                </div>

                <CondicionesCarousel items={condiciones} theme="dark" />
              </div>
            </div>
          </Reveal>

          {/* CTA titilante — columna derecha */}
          <Reveal direction="right" delay={200}>
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="max-w-sm text-lg text-white/80" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.6)' }}>
                ¿Listo para poner tu marca en la ruta?
              </p>
              <a
                href="#contacto"
                className="btn-cta btn-blink px-12 py-6 text-lg uppercase tracking-widest"
              >
                <span>Solicitar propuesta</span>
                <svg
                  className="cta-arrow"
                  width="20"
                  height="20"
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
              <p className="text-sm text-white/60" style={{ textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}>
                Respondemos en menos de 24 horas hábiles.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}