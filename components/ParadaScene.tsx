'use client'

import { useRef } from 'react'

/** La parada TIOCR sobre la banda nocturna.
    - Sigue al cursor con parallax invertido (mouse derecha → parada izquierda)
    - Al hover se eleva, escala y proyecta sombra (clase .parada-lift) */
export default function ParadaScene() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const raf = useRef<number | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return
    const rect = wrap.getBoundingClientRect()
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      inner.style.transform = `translate3d(${nx * -26}px, ${ny * -14}px, 0) rotateY(${nx * -4}deg) rotateX(${ny * 3}deg)`
    })
  }

  const onLeave = () => {
    const inner = innerRef.current
    if (!inner) return
    if (raf.current) cancelAnimationFrame(raf.current)
    inner.style.transform = 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="group relative mx-auto w-full max-w-none scale-[1.15] lg:origin-center lg:scale-[1.4]"
      style={{ perspective: '1200px' }}
    >
      <div
        ref={innerRef}
        className="will-change-transform"
        style={{
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/parada3.webp"
          alt="Refugio de buses TIO CR"
          loading="lazy"
          decoding="async"
          className="parada-lift block h-auto w-full"
        />
      </div>
    </div>
  )
}