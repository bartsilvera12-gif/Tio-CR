export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-brand-ink text-white"
    >
      {/*
        BACKGROUND — placeholder cinematográfico.
        Cuando el cliente pase video/foto de ruta paraguaya, reemplazar por:
        <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover" src="/hero.mp4" />
        Mantener overlay oscuro encima.
      */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.18),transparent_60%)]" />
        <RoadPerspective />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      {/* Logo hero */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <img
          src="/logo-tiocr.jpeg"
          alt="TIOCR - Marketing y Servicios Publicitarios"
          className="w-[min(88vw,720px)] rounded-2xl shadow-[0_30px_120px_rgba(0,201,247,0.25)] animate-fade-in"
        />

        <p className="mt-10 max-w-xl text-base text-white/70 md:text-lg">
          Cartelería rutera, pantallas LED y campañas de gran formato en las
          principales rutas y ciudades del interior del Paraguay.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a href="#contacto" className="btn-cyan uppercase tracking-widest">
            Solicitar presupuesto
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator estilo OPL: dibuja el mouse y luego la ruedita baja */}
      <a
        href="#servicios"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <svg
          width="30"
          height="46"
          viewBox="0 0 30 46"
          fill="none"
          className="text-white/80"
        >
          <rect
            x="1.5"
            y="1.5"
            width="27"
            height="43"
            rx="13.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="animate-draw-mouse"
            style={{
              strokeDasharray: 150,
              strokeDashoffset: 150,
            }}
          />
          <circle
            cx="15"
            cy="14"
            r="2.5"
            fill="currentColor"
            className="animate-wheel-down"
          />
        </svg>
      </a>
    </section>
  )
}

function RoadPerspective() {
  return (
    <div
      className="absolute inset-x-0 bottom-0 h-2/3 opacity-40"
      style={{
        background:
          'repeating-linear-gradient(90deg, transparent 0, transparent 78px, rgba(0,201,247,0.35) 78px, rgba(0,201,247,0.35) 80px), repeating-linear-gradient(180deg, transparent 0, transparent 60px, rgba(0,201,247,0.25) 60px, rgba(0,201,247,0.25) 62px)',
        transform: 'perspective(700px) rotateX(65deg)',
        transformOrigin: 'bottom',
        maskImage:
          'radial-gradient(ellipse at 50% 100%, black 40%, transparent 75%)',
        WebkitMaskImage:
          'radial-gradient(ellipse at 50% 100%, black 40%, transparent 75%)',
      }}
    />
  )
}
