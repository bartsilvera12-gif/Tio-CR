/** Mancha de luz cian difuminada para fondos de sección.
    PERF: usa radial-gradient pre-suavizado en vez de filter:blur(90px) —
    mismo aspecto, sin costo de compositing en scroll (clave en GPUs de gama baja). */
export default function GlowBlob({
  className = '',
  opacity = 0.14,
  rotate = -14,
  radius = '58% 42% 65% 35% / 45% 60% 40% 55%',
  animated = false,
  speed = 'normal',
}: {
  className?: string
  opacity?: number
  rotate?: number
  radius?: string
  animated?: boolean
  /** 'normal' = 16s (llamativo) — 'slow' = 55s (muy sutil, para fondo detrás de vidrio) */
  speed?: 'normal' | 'slow'
}) {
  const animClass = animated
    ? speed === 'slow'
      ? 'blob-anim-slow'
      : 'blob-anim'
    : ''
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute ${animClass} ${className}`}
      style={{
        background: `radial-gradient(closest-side, rgba(0,201,247,${opacity}) 0%, rgba(0,201,247,${(opacity * 0.55).toFixed(3)}) 45%, rgba(0,201,247,0) 78%)`,
        borderRadius: radius,
        ...(animated ? {} : { transform: `rotate(${rotate}deg) translateZ(0)` }),
      }}
    />
  )
}