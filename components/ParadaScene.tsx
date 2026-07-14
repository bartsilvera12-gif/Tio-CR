'use client'

/** Escena del refugio: fondo + parada superpuestos (mismo canvas 1535×1024).
    Al hover, la parada se eleva, escala levemente y proyecta sombra. */
export default function ParadaScene() {
  return (
    <div className="group relative mx-auto w-full max-w-[880px] overflow-hidden rounded-3xl shadow-[0_30px_70px_-18px_rgba(0,0,0,0.6)]">
      {/* Capa 1: fondo de la escena (calle nocturna) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/fondo3.webp"
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />

      {/* Capa 2: la parada TIOCR — mismo canvas, alineación 1:1 */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/parada3.webp"
        alt="Refugio de buses TIO CR"
        loading="lazy"
        decoding="async"
        className="parada-lift absolute inset-0 z-10 h-full w-full"
      />

      {/* Glow cian sutil que aparece con el hover */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_60%,rgba(0,201,247,0.22),transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
    </div>
  )
}