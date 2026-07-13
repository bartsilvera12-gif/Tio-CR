import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32">
      {/* Fade desde el negro del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      {/* Blobs cian difuminados en el fondo */}
      <GlowBlob className="left-[5%] top-[28%] h-[420px] w-[560px]" opacity={0.16} />
      <GlowBlob
        className="right-[2%] top-[30%] h-[320px] w-[420px]"
        opacity={0.09}
        rotate={22}
        radius="42% 58% 38% 62% / 60% 42% 58% 40%"
      />

      <div className="container relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal direction="cinematic">
            <div className="flex justify-center lg:justify-start">
              <Billboard />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-cyan align-middle" />
              Nuestra propuesta
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
              <span className="intro-title-cyan bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-cyan bg-clip-text text-transparent">
                Cartelería gigante
              </span>
              <br />
              <span className="intro-title-white">
                y publicidad exterior en rutas e interior del Paraguay.
              </span>
            </h2>
            <div className="intro-accent-bar mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 intro-body">
              Llevamos tu marca más lejos. Impacto masivo, presencia estratégica
              y visibilidad real donde tu público está.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="btn-idle-glow group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-brand-navyDeep transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_-8px_rgba(0,201,247,0.65)] active:scale-95"
              >
                <span className="relative z-10">Solicitar presupuesto</span>
                <svg
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
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
                {/* brillo que cruza en hover */}
                <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] skew-x-[-18deg] bg-white/40 transition-transform duration-700 group-hover:translate-x-[350%]" />
              </a>

              <a
                href="#cobertura"
                className="btn-idle-border group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan active:scale-95"
              >
                <svg
                  className="transition-transform duration-300 group-hover:scale-110"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Ver cobertura
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Cartel publicitario 3D — video como pantalla, con luces reales entrando dentro */
function Billboard() {
  // 4 posiciones (0-100%) para los reflectores y sus rayos
  const spots = [17, 39, 61, 83]

  return (
    <div
      className="group/billboard relative w-full max-w-[600px] cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.03]"
      style={{ perspective: '1400px' }}
    >
      {/* Halo cian muy sutil (se intensifica al hacer hover sobre el cartel) */}
      <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(0,201,247,0.1),transparent_70%)] blur-3xl transition-opacity duration-500 group-hover/billboard:opacity-[2]" />

      {/* Estructura vertical con perspectiva 3D + flotación suave (wrapper separado para no pisar transforms) */}
      <div className="billboard-float">
      <div
        className="relative"
        style={{
          transform: 'rotateY(14deg) rotateX(6deg) rotateZ(-2deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ---- Reflectores alineados con los rayos de luz ---- */}
        <div className="relative z-20 -mb-[6px] h-[38px]">
          {spots.map((left, i) => (
            <div
              key={i}
              className="absolute bottom-0 -translate-x-1/2"
              style={{ left: `${left}%` }}
            >
              {/* Cabeza del reflector */}
              <div className="relative z-10 h-[16px] w-[52px] rounded-[4px] bg-gradient-to-b from-slate-500 via-slate-700 to-slate-900 shadow-[0_3px_8px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-x-1 bottom-[2px] h-[4px] rounded-sm bg-sky-200/80" />
              </div>
              {/* Brazo */}
              <div className="mx-auto h-[22px] w-[4px] bg-gradient-to-b from-slate-600 to-slate-800" />
            </div>
          ))}
        </div>

        {/* ---- Pantalla (screen) con marco y luces entrando ---- */}
        <div className="relative aspect-[16/9]">
          {/* Sombra atrás del bezel */}
          <div className="absolute -inset-2 rounded-[26px] bg-black/40 blur-lg" />

          {/* Bezel de vidrio translúcido (mismo lenguaje que las cards) */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[22px] p-[10px]"
            style={{
              background:
                'linear-gradient(150deg, rgba(51,65,85,0.45) 0%, rgba(15,23,42,0.55) 100%)',
              border: '1px solid rgba(255,255,255,0.18)',
              boxShadow:
                '0 20px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(0,0,0,0.3)',
              backdropFilter: 'blur(22px) saturate(150%)',
              WebkitBackdropFilter: 'blur(22px) saturate(150%)',
            }}
          >
            {/* Pantalla */}
            <div className="relative h-full w-full overflow-hidden rounded-[14px]">
              {/* Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-cover"
              >
                <source src="/intro.mp4" type="video/mp4" />
              </video>

              {/* Tinte cian LED sutil global */}
              <div className="pointer-events-none absolute inset-0 bg-brand-cyan/[0.03]" />

              {/* Reflejo que barre la pantalla */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 screen-sheen bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>
          </div>

          {/* Rayos de luz — mismo sistema de coordenadas que los reflectores,
              por encima del video (z-30), nacen justo bajo cada lámpara */}
          <div className="pointer-events-none absolute inset-0 z-30 overflow-hidden rounded-[22px]">
            {spots.map((left, i) => (
              <div
                key={i}
                className="absolute top-0 h-full w-[110px] -translate-x-1/2"
                style={{
                  left: `${left}%`,
                  background:
                    'linear-gradient(to bottom, rgba(220,245,255,0.6) 0%, rgba(160,225,250,0.28) 45%, rgba(160,225,250,0.04) 85%, transparent 100%)',
                  clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0% 100%)',
                  mixBlendMode: 'screen',
                  filter: 'blur(9px)',
                  animation: `beamPulse ${3 + i * 0.3}s ease-in-out infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* ---- Poste vertical ---- */}
        <div className="relative mx-auto h-[100px] w-[14px] rounded-b-md bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />

        {/* ---- Base: 3 anillos blancos concéntricos + halo cian difuso ---- */}
        <div className="relative mx-auto h-[46px] w-[240px]">
          {/* Sombra en el piso */}
          <div className="absolute inset-x-[8%] top-5 h-[18px] rounded-[50%] bg-black/50 blur-md" />
          {/* Anillo exterior */}
          <div className="absolute inset-x-0 top-1 h-[30px] rounded-[50%] border-[3px] border-white/45" />
          {/* Anillo medio */}
          <div className="absolute inset-x-[18%] top-[7px] h-[19px] rounded-[50%] border-2 border-white/35" />
          {/* Anillo interior */}
          <div className="absolute inset-x-[34%] top-[12px] h-[10px] rounded-[50%] border-2 border-white/25" />
        </div>
      </div>
      </div>
    </div>
  )
}
