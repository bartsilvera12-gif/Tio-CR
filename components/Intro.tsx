import Reveal from './Reveal'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 text-white md:py-32">
      {/* Fade desde el negro del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      {/* Halo cian de fondo (sutil, sin grid) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_50%,rgba(0,201,247,0.15),transparent_55%)]" />

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

/** Cartel publicitario 3D — video como pantalla, con luces reales entrando dentro */
function Billboard() {
  // 4 posiciones (0-100%) para los reflectores y sus rayos
  const spots = [17, 39, 61, 83]

  return (
    <div className="relative w-full max-w-[600px]" style={{ perspective: '1400px' }}>
      {/* Halo cian muy sutil */}
      <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(0,201,247,0.1),transparent_70%)] blur-3xl" />

      {/* Estructura vertical con perspectiva 3D como la referencia (vista desde abajo-izquierda) */}
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
          <div className="absolute -inset-2 rounded-[26px] bg-black/50 blur-lg" />

          {/* Bezel externo metálico */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[22px] p-[10px]"
            style={{
              background:
                'linear-gradient(145deg, #334155 0%, #1e293b 40%, #0f172a 100%)',
              boxShadow:
                '0 20px 50px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08), inset 0 -1px 0 rgba(0,0,0,0.4)',
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

              {/* Rayos de luz cian entrando DESDE los reflectores hacia la pantalla */}
              {spots.map((left, i) => (
                <div
                  key={i}
                  className="pointer-events-none absolute top-0 h-full"
                  style={{
                    left: `calc(${left}% - 40px)`,
                    width: '80px',
                    background:
                      'linear-gradient(to bottom, rgba(0,229,255,0.75) 0%, rgba(0,201,247,0.35) 40%, rgba(0,201,247,0.05) 90%, transparent 100%)',
                    clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0% 100%)',
                    mixBlendMode: 'screen',
                    filter: 'blur(4px)',
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      animation: `beamPulse ${3 + i * 0.3}s ease-in-out infinite`,
                    }}
                  />
                </div>
              ))}

              {/* Tinte cian LED sutil global */}
              <div className="pointer-events-none absolute inset-0 bg-brand-cyan/[0.03]" />
            </div>
          </div>
        </div>

        {/* ---- Poste vertical ---- */}
        <div className="relative mx-auto h-[100px] w-[14px] rounded-b-md bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />

        {/* ---- Base ---- */}
        <div className="relative mx-auto h-[40px] w-[240px]">
          {/* Sombra en el piso */}
          <div className="absolute inset-x-[10%] top-3 h-[20px] rounded-[50%] bg-black/50 blur-md" />
          {/* Anillo exterior sutil */}
          <div className="absolute inset-x-0 top-2 h-[26px] rounded-[50%] border border-brand-cyan/40" />
          {/* Anillo interior */}
          <div className="absolute inset-x-[25%] top-4 h-[16px] rounded-[50%] border border-brand-cyan/25" />
        </div>
      </div>
    </div>
  )
}
