'use client'

import { useEffect, useRef } from 'react'

/** Card con spotlight de borde autocontenido: el pointermove se maneja
    EN la card (coordenadas locales directas de e.currentTarget) y el
    scroll recalcula con la última posición del cursor. */
export default function SpotlightBox({
  className,
  style,
  children,
}: {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const last = useRef({ x: -9999, y: -9999 })

  const setVars = (clientX: number, clientY: number) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    // X invertido, Y invertido (calibrado con feedback del usuario:
    // vertical quedó perfecto con Y invertido; ahora X también invertido)
    el.style.setProperty('--x', `${(r.width - (clientX - r.left)).toFixed(1)}px`)
    el.style.setProperty('--y', `${(r.height - (clientY - r.top)).toFixed(1)}px`)
  }

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    last.current = { x: e.clientX, y: e.clientY }
    setVars(e.clientX, e.clientY)
  }

  useEffect(() => {
    const onScroll = () => setVars(last.current.x, last.current.y)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div ref={ref} onPointerMove={onMove} className={className} style={style}>
      {children}
    </div>
  )
}
