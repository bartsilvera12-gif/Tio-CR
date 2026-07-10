import { W, H, departments } from '@/lib/map-data'

/** Pins de las ciudades de cobertura.
    Coordenadas de map-data.js (proyección equirectangular del handoff);
    las ciudades sin marker original se proyectaron con la misma fórmula. */
const pins = [
  { city: 'Pedro Juan Caballero', info: 'Amambay · PY 05', x: 821.4, y: 428.2 },
  { city: 'Salto del Guairá', info: 'Canindeyú · PY 03', x: 990.0, y: 614.9 },
  { city: 'Corpus Christi', info: 'Canindeyú · PY 03', x: 925.6, y: 646.5 },
  { city: 'Coronel Oviedo', info: 'Caaguazú · PY 02', x: 739.4, y: 800.2 },
  { city: 'Ciudad del Este', info: 'Alto Paraná · PY 07', x: 957.6, y: 808.6 },
  { city: 'Caacupé', info: 'Cordillera · PY 02', x: 648.5, y: 791 },
  { city: 'Quiindy', info: 'Paraguarí · PY 01', x: 643.6, y: 868 },
  { city: 'Villa Florida', info: 'Misiones · PY 01', x: 657.7, y: 924.9 },
  { city: 'Encarnación', info: 'Itapúa · PY 06', x: 807.9, y: 1045.4 },
]

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
          <g key={p.city} transform={`translate(${p.x} ${p.y})`}>
            {/* Grupo interno: el hover escala acá, sin pisar el translate */}
            <g className="map-pin" filter="url(#pinGlow)">
              <title>{`${p.city} — ${p.info}`}</title>
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
