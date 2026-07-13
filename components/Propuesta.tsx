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
      className="relative overflow-hidden py-24 text-brand-ink md:py-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.40), rgba(255,255,255,0.40)), url(/fondo2.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
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
          <span className="inline-flex items-center gap-2.5 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 px-6 py-2.5 text-base font-bold uppercase tracking-[0.25em] text-brand-cyanDark shadow-[0_4px_18px_-6px_rgba(0,201,247,0.4)]">
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
            Propuesta de inversión
          </span>
          <h2 className="mt-5 font-display text-4xl font-bold tracking-tight text-brand-ink md:text-5xl">
            Una inversión clara y transparente
          </h2>
          <p className="mt-5 text-lg text-brand-ink/70">
            Un servicio integral con todo lo necesario para poner tu marca en
            la ruta — sin costos ocultos ni sorpresas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Card izquierda: qué incluye */}
          <Reveal direction="left">
            <div
              className="propuesta-card spotlight-card group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white transition-all duration-500 ease-out hover:-translate-y-2 md:p-10"
              style={glassCardStyle}
            >
              {/* Glow interno cian */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,201,247,0.22),transparent_60%)]" />

              <div className="relative">
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                  Qué incluye
                </div>

                <h3 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  Todo listo para salir a la ruta.
                </h3>

                <ul className="mt-8 space-y-4">
                  {[
                    { t: 'Impresión de la lona', s: 'La primera impresión va incluida en el contrato.' },
                    { t: 'Instalación profesional', s: 'Equipo propio y protocolo de seguridad en altura.' },
                    { t: 'Mantenimiento del cartel', s: 'Revisión periódica de la estructura y la lona.' },
                    { t: 'Iluminación nocturna', s: 'En formatos aptos, sin costo adicional.' },
                    { t: 'Informe fotográfico', s: 'Comprobante mensual de que tu campaña está en la calle.' },
                  ].map((item) => (
                    <li key={item.t} className="propuesta-item flex gap-3">
                      <span className="propuesta-check mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-cyan/15 ring-1 ring-brand-cyan/40 transition-all duration-300 group-hover:bg-brand-cyan/30 group-hover:ring-brand-cyan/80 group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(0,201,247,0.6)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00C9F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-base font-semibold text-white">{item.t}</div>
                        <div className="text-sm text-white/60">{item.s}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </Reveal>

          {/* Card derecha: condiciones */}
          <Reveal direction="right" delay={220}>
            <div
              className="spotlight-card relative h-full overflow-hidden rounded-3xl p-8 text-white md:p-10"
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