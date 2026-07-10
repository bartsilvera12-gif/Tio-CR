export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex h-screen min-h-[720px] w-full items-center justify-center overflow-hidden text-white"
      style={{ backgroundColor: '#050e1f' }}
    >
      {/* Video de fondo self-hosted */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay oscuro para legibilidad + degradado corto abajo (estilo OPL) */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,201,247,0.12),transparent_65%)]" />
      </div>

      {/* Solo el logo, sin texto — wrapper anima fade-in, img anima hover */}
      <div className="relative z-10 animate-fade-in px-6">
        <img
          src="/logo-hero.png"
          alt="TIOCR - Marketing y Servicios Publicitarios"
          className="w-[min(90vw,860px)] cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
        />
      </div>

      {/* Scroll indicator estilo OPL */}
      <a
        href="#servicios"
        aria-label="Scroll"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
      >
        <svg
          width="26"
          height="40"
          viewBox="0 0 30 46"
          fill="none"
          className="text-white/50"
        >
          <rect
            x="1.5"
            y="1.5"
            width="27"
            height="43"
            rx="13.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="animate-draw-mouse"
            style={{ strokeDasharray: 150, strokeDashoffset: 150 }}
          />
          <circle
            cx="15"
            cy="14"
            r="2"
            fill="currentColor"
            className="animate-wheel-down"
          />
        </svg>
      </a>
    </section>
  )
}

