export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-brand-cyan/20 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-brand-cyan/10 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span className="eyebrow">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-brand-cyan align-middle" />
              Publicidad exterior · Paraguay
            </span>
            <h1 className="h-display mt-6 text-5xl leading-[1.05] md:text-6xl lg:text-7xl">
              Tu marca en las{' '}
              <span className="relative inline-block">
                <span className="relative z-10">rutas del interior</span>
                <span className="absolute inset-x-0 bottom-1 -z-0 h-3 bg-brand-cyan/40" />
              </span>
              , donde el país circula.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-brand-ink/70">
              Cartelería rutera, pantallas LED y campañas de gran formato en las
              principales ciudades y accesos del Paraguay. Presencia real, medible
              y con logística incluida.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contacto" className="btn-cyan">
                Solicitar campaña →
              </a>
              <a href="#cobertura" className="btn-ghost">
                Ver cobertura
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand-ink/10 pt-8">
              <Stat n="8" label="Departamentos" />
              <Stat n="22+" label="Ubicaciones" />
              <Stat n="12×6m" label="Máxima escala" />
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl border border-brand-ink/10 bg-brand-soft p-6 shadow-sm md:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="eyebrow">Cobertura nacional</span>
                <span className="text-xs font-medium text-brand-ink/60">
                  Paraguay · rutas PY 01–07
                </span>
              </div>
              <ParaguayMap />
              <p className="mt-6 text-sm text-brand-ink/60">
                Cobertura activa en las principales rutas y ciudades del interior.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="h-display text-3xl md:text-4xl">{n}</div>
      <div className="mt-1 text-xs uppercase tracking-widest text-brand-ink/50">
        {label}
      </div>
    </div>
  )
}

function ParaguayMap() {
  return (
    <svg viewBox="0 0 400 460" className="w-full">
      <defs>
        <linearGradient id="pyFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#00C9F7" stopOpacity="0.15" />
          <stop offset="1" stopColor="#00C9F7" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path
        d="M120 40 L280 30 L340 90 L360 180 L330 260 L340 330 L300 380 L240 420 L180 430 L140 400 L100 350 L60 260 L70 170 L90 100 Z"
        fill="url(#pyFill)"
        stroke="#00C9F7"
        strokeWidth="1.5"
        strokeOpacity="0.6"
        strokeLinejoin="round"
      />
      {[
        [180, 130], [220, 160], [260, 180], [200, 220],
        [270, 240], [230, 280], [180, 320], [260, 320],
        [220, 360], [150, 260]
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="10" fill="#00C9F7" opacity="0.15">
            <animate
              attributeName="r"
              values="8;16;8"
              dur="3s"
              begin={`${i * 0.2}s`}
              repeatCount="indefinite"
            />
          </circle>
          <circle cx={x} cy={y} r="4" fill="#00C9F7" />
        </g>
      ))}
    </svg>
  )
}
