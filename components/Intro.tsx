import Reveal from './Reveal'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32">
      {/* Fade desde el negro del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      {/* Halo cian de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,201,247,0.18),transparent_55%)]" />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <ParaguayVisual />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">Nuestra propuesta</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
              <span className="text-brand-cyan">Cartelería gigante</span>
              <br />
              <span className="text-white">
                y publicidad exterior en rutas e interior del Paraguay.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
              Llevamos tu marca más lejos. Impacto masivo, presencia estratégica
              y visibilidad real donde tu público está.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Mapa estilizado de Paraguay con pins cian pulsantes */
function ParaguayVisual() {
  const pins = [
    [190, 155], [225, 180], [255, 195], [200, 225],
    [275, 250], [235, 285], [180, 320], [255, 335],
    [220, 370], [155, 265],
  ]
  return (
    <div className="relative w-full max-w-md">
      {/* Glow atrás del mapa */}
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,201,247,0.35),transparent_70%)] blur-2xl" />
      <svg viewBox="0 0 400 460" className="w-full drop-shadow-[0_20px_40px_rgba(0,201,247,0.25)]">
        <defs>
          <linearGradient id="pyFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#00C9F7" stopOpacity="0.18" />
            <stop offset="1" stopColor="#00C9F7" stopOpacity="0.04" />
          </linearGradient>
        </defs>
        <path
          d="M120 40 L280 30 L340 90 L360 180 L330 260 L340 330 L300 380 L240 420 L180 430 L140 400 L100 350 L60 260 L70 170 L90 100 Z"
          fill="url(#pyFill)"
          stroke="#00C9F7"
          strokeWidth="1.8"
          strokeOpacity="0.8"
          strokeLinejoin="round"
        />
        {pins.map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="12" fill="#00C9F7" opacity="0.2">
              <animate
                attributeName="r"
                values="10;22;10"
                dur="3.2s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0;0.4"
                dur="3.2s"
                begin={`${i * 0.25}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={x} cy={y} r="4.5" fill="#00C9F7" />
          </g>
        ))}
      </svg>
    </div>
  )
}
