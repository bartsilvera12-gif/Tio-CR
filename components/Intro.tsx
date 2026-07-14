import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-black py-24 text-white md:py-32">
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
              <div className="w-full max-w-[500px]">
                <img
                  src="/logo-hero.webp"
                  alt="TIO CR"
                  className="h-auto w-full drop-shadow-[0_12px_40px_rgba(0,201,247,0.2)]"
                />
              </div>
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
