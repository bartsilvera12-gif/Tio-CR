'use client'

import React, { type CSSProperties, type ReactNode } from 'react'

type GlowColor = 'blue' | 'purple' | 'green' | 'red' | 'orange'

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
  glowColor?: GlowColor
  glowSize?: number
}

type CSSVariables = CSSProperties & {
  [key: `--${string}`]: string | number
}

const glowColorMap: Record<GlowColor, { base: number; spread: number }> = {
  blue: { base: 195, spread: 25 },
  purple: { base: 275, spread: 45 },
  green: { base: 120, spread: 40 },
  red: { base: 0, spread: 30 },
  orange: { base: 30, spread: 35 },
}

export function SpotlightCard({
  children,
  className = '',
  glowColor = 'blue',
  glowSize = 250,
  style,
  onPointerMove,
  onPointerEnter,
  onPointerLeave,
  ...props
}: SpotlightCardProps) {
  const { base, spread } = glowColorMap[glowColor]

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = event.currentTarget
    const rect = element.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const horizontalProgress = rect.width > 0 ? x / rect.width : 0

    const hue = base + horizontalProgress * spread

    element.style.setProperty('--spotlight-x', `${x}px`)
    element.style.setProperty('--spotlight-y', `${y}px`)
    element.style.setProperty('--spotlight-hue', `${hue}`)
    element.style.setProperty('--spotlight-active', '1')

    onPointerMove?.(event)
  }

  const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--spotlight-active', '1')
    onPointerEnter?.(event)
  }

  const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty('--spotlight-active', '0')
    onPointerLeave?.(event)
  }

  const spotlightStyles: CSSVariables = {
    '--spotlight-x': '50%',
    '--spotlight-y': '50%',
    '--spotlight-hue': base,
    '--spotlight-active': 0,
    '--spotlight-size': `${glowSize}px`,
    ...style,
  }

  return (
    <>
      <style>{`
        [data-spotlight-card] {
          position: relative;
          isolation: isolate;
        }

        [data-spotlight-card]::before {
          content: "";
          position: absolute;
          pointer-events: none;
          border-radius: inherit;
          transition: opacity 180ms ease;
        }

        [data-spotlight-card]::before {
          inset: -2px;
          z-index: 20;
          padding: 2px;

          background: radial-gradient(
            circle var(--spotlight-size)
              at var(--spotlight-x) var(--spotlight-y),
            hsla(
              var(--spotlight-hue),
              100%,
              65%,
              var(--spotlight-active)
            ),
            transparent 45%
          );

          -webkit-mask:
            linear-gradient(#ffffff 0 0) content-box,
            linear-gradient(#ffffff 0 0);

          -webkit-mask-composite: xor;

          mask:
            linear-gradient(#ffffff 0 0) content-box,
            linear-gradient(#ffffff 0 0);

          mask-composite: exclude;
        }

      `}</style>

      <div
        data-spotlight-card
        className={className}
        style={spotlightStyles}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        {...props}
      >
        {children}
      </div>
    </>
  )
}
