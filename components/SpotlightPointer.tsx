'use client'

import { useEffect } from 'react'

/** Rastrea la posición del puntero globalmente y la expone como --pointer-x/--pointer-y en :root.
    Cualquier elemento con clase .spotlight-card usa esas vars para el efecto de borde brillante. */
export default function SpotlightPointer() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const root = document.documentElement
      root.style.setProperty('--pointer-x', `${e.clientX.toFixed(1)}px`)
      root.style.setProperty('--pointer-y', `${e.clientY.toFixed(1)}px`)
    }
    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
  return null
}