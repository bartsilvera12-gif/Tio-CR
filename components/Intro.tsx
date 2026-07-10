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
              <BillboardVideo />
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

function BillboardVideo() {
  return (
    <div className="relative w-full max-w-lg">
      {/* Glow atrás */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle,rgba(0,201,247,0.35),transparent_70%)] blur-2xl" />
      {/* Marco con borde cian sutil + shadow neón */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-cyan/25 shadow-[0_25px_80px_-20px_rgba(0,201,247,0.5)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="block h-full w-full object-cover"
        >
          <source src="/intro.mp4" type="video/mp4" />
        </video>
        {/* Vignette sutil para integrar con el fondo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(6,20,40,0.4))]" />
      </div>
    </div>
  )
}
