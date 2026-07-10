/** Mancha de luz cian difuminada y deformada para fondos de sección */
export default function GlowBlob({
  className = '',
  opacity = 0.14,
  rotate = -14,
  radius = '58% 42% 65% 35% / 45% 60% 40% 55%',
}: {
  className?: string
  opacity?: number
  rotate?: number
  radius?: string
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute blur-[110px] ${className}`}
      style={{
        background: `rgba(0, 201, 247, ${opacity})`,
        borderRadius: radius,
        transform: `rotate(${rotate}deg)`,
      }}
    />
  )
}
