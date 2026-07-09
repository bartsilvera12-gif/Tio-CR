export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden bg-brand-ink text-white"
    >
      {/*
        BACKGROUND — placeholder cinematográfico.
        Reemplazar por <video autoPlay muted loop /> o <Image /> con foto de ruta
        cuando el cliente pase el asset. Mantener overlay oscuro encima.
      */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1120] via-[#0f172a] to-[#020617]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.15),transparent_60%)]" />
        <RoadPerspective />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
      </div>

      {/* Logo hero centrado */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-5 py-2 backdrop-blur-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Publicidad exterior · Paraguay
          </span>
        </div>

        <h1 className="font-display text-7xl font-bold leading-none tracking-tight md:text-9xl lg:text-[10rem]">
          TIO<span className="text-brand-cyan">CR</span>
        </h1>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-white/60 md:text-sm">
          Marketing y Servicios Publicitarios
        </p>

        <p className="mt-8 max-w-xl text-base text-white/70 md:text-lg">
          Cartelería rutera, pantallas LED y campañas de gran formato en las
          principales rutas y ciudades del interior del Paraguay.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#contacto" className="btn-cyan uppercase tracking-widest">
            Solicitar campaña
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/10"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#servicios"
        aria-label="Scroll"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-white/80" />
        </div>
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
