/** Patrón line-art de fondo para la sección Cobertura — carteles, pines,
    rutas y señales en trazo navy sutil, repetidos como textura con
    rotaciones variadas (estilo watermark). */
export default function CoberturaDoodles() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
      fill="none"
      stroke="#0A1F3D"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.09"
    >
      <defs>
        <pattern
          id="doodle-tile"
          width="520"
          height="440"
          patternUnits="userSpaceOnUse"
        >
          {/* Cartel de ruta con líneas de texto — inclinado */}
          <g transform="translate(28, 30) rotate(-9) scale(1.5)">
            <rect x="0" y="0" width="34" height="18" rx="2" />
            <path d="M17 18v10M11 28h12" />
            <path d="M5 6h14M5 10h20" strokeWidth="1.1" />
          </g>

          {/* Pin — inclinado al otro lado */}
          <g transform="translate(210, 18) rotate(14) scale(1.25)">
            <path d="M10 26C10 26 2 15 2 9a8 8 0 1 1 16 0c0 6-8 17-8 17z" />
            <circle cx="10" cy="9" r="3" />
          </g>

          {/* Pantalla LED con play — recta */}
          <g transform="translate(330, 55) rotate(-4) scale(1.3)">
            <rect x="0" y="0" width="30" height="16" rx="2" />
            <path d="M10 6l6 4-6 4z" strokeWidth="1.2" />
            <path d="M15 16v9M9 25h12" />
          </g>

          {/* Flecha curva de señalización */}
          <g transform="translate(120, 150) rotate(18)">
            <path d="M0 18 C 12 4, 30 4, 44 14 M36 6l9 8-11 5" />
          </g>

          {/* Señal vial rombo — girada */}
          <g transform="translate(290, 170) rotate(45) scale(1.1)">
            <rect x="2" y="2" width="20" height="20" rx="3" />
            <path d="M12 8v5M12 16.5v.5" strokeWidth="1.3" />
          </g>

          {/* Ruta punteada ondulada cruzando el tile */}
          <path
            d="M-20 300 C 60 260, 130 340, 230 295 S 400 250, 540 310"
            strokeDasharray="2 11"
            strokeWidth="2"
          />

          {/* Bus — inclinado */}
          <g transform="translate(60, 360) rotate(-7) scale(1.15)">
            <rect x="0" y="2" width="26" height="16" rx="3" />
            <path d="M0 9h26" strokeWidth="1.1" />
            <path d="M6 4v5M13 4v5M20 4v5" strokeWidth="1" />
            <circle cx="7" cy="21" r="2.4" />
            <circle cx="19" cy="21" r="2.4" />
          </g>

          {/* Cartel doble faz chico — inclinado */}
          <g transform="translate(215, 345) rotate(11) scale(1.15)">
            <rect x="0" y="0" width="28" height="15" rx="1.5" />
            <path d="M14 15v8M8 23h12" />
          </g>

          {/* Mojón de kilometraje */}
          <g transform="translate(360, 330) rotate(-12) scale(1.2)">
            <path d="M4 26V10a8 8 0 0 1 16 0v16" />
            <path d="M2 26h20" />
            <path d="M8 14h8" strokeWidth="1.1" />
          </g>

          {/* Pin chiquito suelto */}
          <g transform="translate(455, 180) rotate(-18) scale(0.9)">
            <path d="M10 26C10 26 2 15 2 9a8 8 0 1 1 16 0c0 6-8 17-8 17z" />
            <circle cx="10" cy="9" r="3" />
          </g>

          {/* Cruce de caminos (X vial) */}
          <g transform="translate(452, 60) rotate(9)">
            <path d="M0 0 L26 26 M26 0 L0 26" strokeDasharray="1 7" strokeWidth="1.8" />
          </g>

          {/* Megáfono chiquito */}
          <g transform="translate(160, 250) rotate(-14) scale(1.1)">
            <path d="M2 10v6l14 6V4L2 10z" />
            <path d="M16 8a6 6 0 0 1 0 10" strokeWidth="1.2" />
          </g>

          {/* Puntitos de asfalto */}
          <g strokeWidth="1.4">
            <circle cx="475" cy="290" r="1.6" />
            <circle cx="45" cy="215" r="1.6" />
            <circle cx="255" cy="105" r="1.6" />
            <circle cx="390" cy="410" r="1.6" />
          </g>
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#doodle-tile)" stroke="none" />
    </svg>
  )
}
