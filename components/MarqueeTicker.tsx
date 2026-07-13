const items = [
  'Carteles de ruta en Caacupé, Quiindy, Villa Florida y Corpus Christi',
  'Cartelería en Pedro Juan Caballero, Santa Rita, Katueté y Yguazú',
  'Publicidad exterior en Campo 9, Santa Rosa del Aguaray, San Pedro, Obligado, María Auxiliadora y Tavapy',
  'Cobertura en Central, Paraguarí, Misiones, Amambay, Canindeyú, Caaguazú, Alto Paraná, Itapúa y San Pedro',
]

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={ariaHidden || undefined}>
      {items.map((text, i) => (
        <div key={i} className="flex items-center text-sm font-medium uppercase tracking-[0.18em] text-white/75">
          <span className="whitespace-nowrap">{text}</span>
          <span className="mx-14 text-brand-cyan" style={{ fontSize: '1.3em', lineHeight: 0 }}>
            ●
          </span>
        </div>
      ))}
    </div>
  )
}

/** Ticker horizontal full-width, scroll seamless derecha→izquierda */
export default function MarqueeTicker() {
  return (
    <div
      className="ticker-marquee relative w-full overflow-hidden border-y border-brand-cyan/20 bg-brand-navyDeep py-4 text-white"
      style={{
        maskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)',
        contain: 'layout paint style',
      }}
    >
      <div className="ticker-track flex w-max whitespace-nowrap">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}