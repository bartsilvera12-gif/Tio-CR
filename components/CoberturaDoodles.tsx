/** Dibujos line-art de fondo para la sección Cobertura — carteles,
    pines, rutas y señales en trazo navy muy sutil (estilo watermark). */
export default function CoberturaDoodles() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="#0A1F3D"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.1"
    >
      {/* Cartel de ruta grande — esquina superior izquierda */}
      <g transform="translate(60, 48) scale(2.2)">
        <rect x="0" y="0" width="34" height="18" rx="2" />
        <path d="M17 18v10M11 28h12" />
        <path d="M5 6h14M5 10h20" strokeWidth="1.2" />
      </g>

      {/* Flecha de señalización — centro arriba */}
      <g transform="translate(430, 150) scale(1.5)">
        <path d="M2 12h26M22 5l7 7-7 7" />
      </g>

      {/* Pin de ubicación — arriba centro */}
      <g transform="translate(660, 60) scale(1.8)">
        <path d="M10 26C10 26 2 15 2 9a8 8 0 1 1 16 0c0 6-8 17-8 17z" />
        <circle cx="10" cy="9" r="3" />
      </g>

      {/* Cartel LED con poste — derecha arriba */}
      <g transform="translate(1300, 90) scale(1.6)">
        <rect x="0" y="0" width="30" height="16" rx="2" />
        <path d="M10 6l6 4-6 4z" strokeWidth="1.3" />
        <path d="M15 16v9M9 25h12" />
      </g>

      {/* Señal vial (rombo) — centro izquierda */}
      <g transform="translate(110, 360) rotate(45 16 16) scale(1.6)">
        <rect x="2" y="2" width="20" height="20" rx="3" />
      </g>

      {/* Ruta punteada con curva — cruza abajo a la izquierda */}
      <path
        d="M40 600 C 140 540, 240 640, 360 580 S 560 520, 680 590"
        strokeDasharray="2 12"
        strokeWidth="2.2"
      />

      {/* Cartel doble faz chico — abajo izquierda */}
      <g transform="translate(80, 660) scale(1.4)">
        <rect x="0" y="0" width="28" height="15" rx="1.5" />
        <path d="M14 15v8M8 23h12" />
      </g>

      {/* Pin chico — centro abajo */}
      <g transform="translate(560, 690) scale(1.2)">
        <path d="M10 26C10 26 2 15 2 9a8 8 0 1 1 16 0c0 6-8 17-8 17z" />
        <circle cx="10" cy="9" r="3" />
      </g>

      {/* Mojón de kilometraje — abajo derecha */}
      <g transform="translate(1330, 640) scale(1.5)">
        <path d="M4 26V10a8 8 0 0 1 16 0v16" />
        <path d="M2 26h20" />
        <path d="M8 14h8" strokeWidth="1.2" />
      </g>

      {/* Bus chiquito — derecha centro */}
      <g transform="translate(1350, 400) scale(1.4)">
        <rect x="0" y="2" width="26" height="16" rx="3" />
        <path d="M0 9h26" strokeWidth="1.2" />
        <circle cx="7" cy="21" r="2.5" />
        <circle cx="19" cy="21" r="2.5" />
      </g>
    </svg>
  )
}
