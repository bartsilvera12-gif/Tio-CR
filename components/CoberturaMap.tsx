import { W, H, departments, markers } from '@/lib/map-data'

/** Los 22 carteles del relevamiento, con coordenadas exactas de map-data.js */
type Marker = {
  key: string
  x: number
  y: number
  city: string
  dept: string
  route: string
  size: string
}
const pins = markers as Marker[]

export default function CoberturaMap() {
  return (
    <div className="relative w-full max-w-[560px]">
      {/* Halo suave detrás del mapa */}
      <div className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,201,247,0.18),transparent_70%)] blur-2xl" />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full overflow-visible"
        role="img"
        aria-label="Mapa de cobertura de Paraguay"
      >
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E2247" />
            <stop offset="1" stopColor="#061428" />
          </linearGradient>
          <filter id="pinGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Departamentos */}
        {departments.map((d: { name: string; d: string }) => (
          <path
            key={d.name}
            d={d.d}
            fill="url(#mapFill)"
            stroke="#00C9F7"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        ))}

        {/* Línea punteada que conecta los pins */}
        <polyline
          points={pins.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#00C9F7"
          strokeWidth="2.5"
          strokeOpacity="0.45"
          strokeDasharray="3 14"
          strokeLinecap="round"
          style={{ animation: 'mapDash 5s linear infinite' }}
        />

        {/* Pins */}
        {pins.map((p) => (
          <g key={p.key} transform={`translate(${p.x} ${p.y})`}>
            {/* Grupo interno: el hover escala acá, sin pisar el translate */}
            <g className="map-pin" filter="url(#pinGlow)">
              <title>{`${p.city} — ${p.dept} · ${p.route}`}</title>
              <path
                d="M0 0 C -7 -11 -15 -18 -15 -29 A 15 15 0 1 1 15 -29 C 15 -18 7 -11 0 0 Z"
                fill="#061428"
                stroke="#00E5FF"
                strokeWidth="2.5"
              />
              <circle cx="0" cy="-29" r="6" fill="#00E5FF" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  )
}
