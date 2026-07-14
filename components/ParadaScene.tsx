'use client'

/** La parada TIOCR flotando sobre el fondo de la banda (sin marco).
    Al hover se eleva, escala levemente y proyecta sombra. */
export default function ParadaScene() {
  return (
    <div className="group relative mx-auto w-full max-w-none lg:scale-[1.08] lg:origin-left">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/parada3.webp"
        alt="Refugio de buses TIO CR"
        loading="lazy"
        decoding="async"
        className="parada-lift block h-auto w-full"
      />
    </div>
  )
}