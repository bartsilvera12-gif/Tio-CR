'use client'

import { useRef } from 'react'

/** Parallax invertido: el mouse va a la derecha → la imagen se corre a la izquierda.
    Incluye una leve rotación 3D para dar profundidad. */
export default function RefugioParallax() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLDivElement>(null)
  const raf = useRef<number | null>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return
    const rect = wrap.getBoundingClientRect()
    // posición del mouse relativa al centro, normalizada -1..1
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      // Invertido: mouse derecha → imagen izquierda
      img.style.transform = `translate3d(${nx * -26}px, ${ny * -16}px, 0) rotateY(${nx * -5}deg) rotateX(${ny * 4}deg)`
    })
  }

  const onLeave = () => {
    const img = imgRef.current
    if (!img) return
    if (raf.current) cancelAnimationFrame(raf.current)
    img.style.transform = 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)'
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[780px]"
      style={{ perspective: '1200px' }}
    >
      {/* Halo cian animado detrás */}
      <div
        className="pointer-events-none absolute inset-[5%] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 55% 60%, rgba(0,201,247,0.5), transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Reflejo cian debajo del refugio (piso brillante) */}
      <div
        className="pointer-events-none absolute bottom-2 left-1/2 h-8 w-[65%] -translate-x-1/2 rounded-[50%] blur-2xl"
        style={{
          background:
            'radial-gradient(ellipse, rgba(0,201,247,0.55), transparent 70%)',
        }}
      />

      <div
        ref={imgRef}
        className="relative will-change-transform"
        style={{
          transition: 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/colectivo.png"
          alt="Refugio de buses TIO CR"
          className="relative z-10 h-auto w-full drop-shadow-[0_25px_35px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  )
}