'use client'

import { useEffect, useRef } from 'react'

/** Video autoplay que se PAUSA al salir del viewport.
    PERF: evita que el decode de video corra de fondo mientras se scrollea
    el resto de la página (gran ahorro de CPU en máquinas de gama baja). */
export default function AutoPauseVideo({
  src,
  className = '',
  preload = 'metadata',
}: {
  src: string
  className?: string
  preload?: 'auto' | 'metadata' | 'none'
}) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = ref.current
    if (!v) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { threshold: 0.05 }
    )
    io.observe(v)
    return () => io.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}