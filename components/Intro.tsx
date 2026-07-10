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
              <Billboard />
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

/** Cartel publicitario ilustrado: reflectores arriba, pantalla (video) al centro, poste y base abajo */
function Billboard() {
  const spotlights = [15, 38, 62, 85] // posiciones en % horizontal
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Halo neón de fondo */}
      <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(circle,rgba(0,201,247,0.35),transparent_70%)] blur-3xl" />

      {/* Contenedor del cartel completo */}
      <div className="relative aspect-[4/3.6] w-full">
        {/* Reflectores arriba */}
        <div className="absolute inset-x-[6%] top-0 flex justify-between">
          {spotlights.map((_, i) => (
            <div key={i} className="relative">
              {/* Cuerpo del reflector */}
              <div className="relative z-20 h-3 w-8 rounded-t-md bg-gradient-to-b from-slate-500 to-slate-800 shadow-[0_2px_4px_rgba(0,0,0,0.5)]" />
              {/* Brazo */}
              <div className="mx-auto h-3 w-1 bg-slate-700" />
              {/* Cono de luz */}
              <div
                className="absolute left-1/2 top-6 -z-10 h-32 w-24 -translate-x-1/2"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,229,255,0.55) 0%, rgba(0,229,255,0.15) 60%, transparent 100%)',
                  clipPath: 'polygon(35% 0, 65% 0, 100% 100%, 0% 100%)',
                  filter: 'blur(6px)',
                }}
              />
            </div>
          ))}
        </div>

        {/* Marco del cartel (pantalla + borde neón) */}
        <div className="absolute inset-x-[3%] top-[12%] bottom-[22%]">
          <div className="relative h-full overflow-hidden rounded-2xl border-2 border-brand-cyan/70 bg-brand-navyDeep shadow-[0_0_30px_rgba(0,201,247,0.5),inset_0_0_20px_rgba(0,201,247,0.15)]">
            {/* Borde interno cian brillante */}
            <div className="absolute inset-1 rounded-xl border border-brand-cyan/40" />
            {/* Video como pantalla */}
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
          </div>
        </div>

        {/* Poste vertical */}
        <div className="absolute left-1/2 top-[75%] bottom-[8%] w-2 -translate-x-1/2 rounded-b-sm bg-gradient-to-b from-slate-600 via-slate-700 to-slate-800" />

        {/* Base / plataforma con anillo cian */}
        <div className="absolute inset-x-[25%] bottom-0 h-[8%]">
          <div className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse,rgba(0,201,247,0.4),transparent_70%)] blur-md" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-3 w-full rounded-full border-2 border-brand-cyan/60 bg-brand-navyDeep/50" />
          </div>
        </div>
      </div>
    </div>
  )
}
