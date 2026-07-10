import Reveal from './Reveal'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32">
      {/* Fade desde el negro del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      {/* Halo cian de fondo */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(0,201,247,0.18),transparent_55%)]" />
      {/* Grid sutil de fondo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,201,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,201,247,0.5) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <Billboard />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">Nuestra propuesta</span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
              <span className="intro-title-cyan bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-cyan bg-clip-text text-transparent">
                Cartelería gigante
              </span>
              <br />
              <span className="text-white">
                y publicidad exterior en rutas e interior del Paraguay.
              </span>
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70 intro-body">
              Llevamos tu marca más lejos. Impacto masivo, presencia estratégica
              y visibilidad real donde tu público está.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Cartel publicitario 3D con video como pantalla */
function Billboard() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Halo neón general */}
      <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(0,201,247,0.28),transparent_70%)] blur-3xl" />

      <div className="relative aspect-[1/1] w-full">
        {/* SVG con toda la chapa/base del cartel */}
        <svg
          viewBox="0 0 600 600"
          className="absolute inset-0 h-full w-full"
          fill="none"
        >
          <defs>
            {/* Metálicos */}
            <linearGradient id="metalDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1e293b" />
              <stop offset="0.5" stopColor="#334155" />
              <stop offset="1" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="metalPole" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#1e293b" />
              <stop offset="0.5" stopColor="#475569" />
              <stop offset="1" stopColor="#1e293b" />
            </linearGradient>
            {/* Cono de luz */}
            <linearGradient id="lightCone" x1="0.5" y1="0" x2="0.5" y2="1">
              <stop offset="0" stopColor="#00E5FF" stopOpacity="0.75" />
              <stop offset="0.5" stopColor="#00C9F7" stopOpacity="0.35" />
              <stop offset="1" stopColor="#00C9F7" stopOpacity="0" />
            </linearGradient>
            {/* Anillo base cian */}
            <radialGradient id="baseGlow" cx="0.5" cy="0.5" r="0.6">
              <stop offset="0" stopColor="#00E5FF" stopOpacity="0.8" />
              <stop offset="1" stopColor="#00C9F7" stopOpacity="0" />
            </radialGradient>

            {/* Filter de glow neón */}
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 4 reflectores arriba con conos de luz */}
          {[130, 240, 360, 470].map((x, i) => (
            <g key={i}>
              {/* Brazo */}
              <rect x={x - 2} y="55" width="4" height="35" fill="url(#metalDark)" />
              {/* Cabeza del reflector */}
              <rect
                x={x - 22}
                y="42"
                width="44"
                height="18"
                rx="4"
                fill="url(#metalDark)"
                stroke="#0f172a"
                strokeWidth="1"
              />
              <rect x={x - 20} y="44" width="40" height="4" rx="2" fill="#0f172a" />
              {/* Cono de luz */}
              <path
                d={`M ${x - 20} 90 L ${x + 20} 90 L ${x + 60} 220 L ${x - 60} 220 Z`}
                fill="url(#lightCone)"
                filter="url(#neonGlow)"
                opacity="0.85"
              >
                <animate
                  attributeName="opacity"
                  values="0.7;0.95;0.7"
                  dur={`${3 + i * 0.4}s`}
                  repeatCount="indefinite"
                />
              </path>
            </g>
          ))}

          {/* Marco/bezel del cartel (chapa metálica alrededor del screen) */}
          <rect
            x="55"
            y="85"
            width="490"
            height="330"
            rx="18"
            fill="url(#metalDark)"
            stroke="#0f172a"
            strokeWidth="2"
          />
          {/* Reborde interno más oscuro */}
          <rect
            x="70"
            y="100"
            width="460"
            height="300"
            rx="12"
            fill="#050e1f"
          />

          {/* Poste vertical */}
          <rect
            x="290"
            y="415"
            width="20"
            height="115"
            fill="url(#metalPole)"
          />

          {/* Base — plataforma holográfica cian */}
          <ellipse
            cx="300"
            cy="540"
            rx="120"
            ry="20"
            fill="url(#baseGlow)"
            filter="url(#neonGlow)"
          >
            <animate
              attributeName="opacity"
              values="0.7;1;0.7"
              dur="2.5s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse
            cx="300"
            cy="540"
            rx="105"
            ry="14"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="2"
            opacity="0.9"
          />
          <ellipse
            cx="300"
            cy="540"
            rx="80"
            ry="9"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="1"
            opacity="0.5"
          />

          {/* Borde neón cian del screen (encima del bezel) */}
          <rect
            x="70"
            y="100"
            width="460"
            height="300"
            rx="12"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3"
            filter="url(#neonGlow)"
          >
            <animate
              attributeName="stroke-opacity"
              values="0.7;1;0.7"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        {/* Video dentro de la pantalla (posicionado sobre el screen del SVG) */}
        <div
          className="absolute overflow-hidden rounded-[10px]"
          style={{
            left: '11.7%',
            top: '16.7%',
            width: '76.6%',
            height: '50%',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          >
            <source src="/intro.mp4" type="video/mp4" />
          </video>
          {/* Tinte cian sutil como si la pantalla emitiera luz LED */}
          <div className="pointer-events-none absolute inset-0 bg-brand-cyan/5 mix-blend-overlay" />
        </div>
      </div>
    </div>
  )
}
