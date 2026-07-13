const items = [
  'Carteles de ruta en Caacupé, Quiindy, Villa Florida y Corpus Christi',
  'Cartelería en Pedro Juan Caballero, Santa Rita, Katueté y Yguazú',
  'Publicidad exterior en Campo 9, Santa Rosa del Aguaray, San Pedro, Obligado, María Auxiliadora y Tavapy',
  'Cobertura en Central, Paraguarí, Misiones, Amambay, Canindeyú, Caaguazú, Alto Paraná, Itapúa y San Pedro',
]

/** Ticker horizontal full-width, scroll infinito derecha→izquierda, pausa al hover */
export default function MarqueeTicker() {
  // Duplicamos la lista para que el loop sea seamless
  const track = [...items, ...items]

  return (
    <div
      aria-hidden
      className="ticker-marquee relative w-full overflow-hidden border-y border-brand-cyan/20 bg-brand-navyDeep py-4 text-white"
    >
      {/* Fade masks en los extremos para que las palabras entren/salgan con suavidad */}
      <div
        className="ticker-track flex items-center gap-14 whitespace-nowrap"
        style={{
          maskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        }}
      >
        {track.map((text, i) => (
          <div
            key={i}
            className="flex items-center gap-14 text-sm font-medium uppercase tracking-[0.18em] text-white/75"
          >
            <span>{text}</span>
            <span
              aria-hidden
              className="text-brand-cyan"
              style={{ fontSize: '1.4em', lineHeight: 0 }}
            >
              ●
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
