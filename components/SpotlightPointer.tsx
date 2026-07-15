'use client'

import { useEffect } from 'react'

/** Rastrea el puntero y escribe coordenadas LOCALES (--x/--y) en cada
    .spotlight-card. Coordenadas locales + rAF = el glow sigue al cursor
    1:1 sin el lag de background-attachment:fixed. */
export default function SpotlightPointer() {
  useEffect(() => {
    let raf = 0
    let lastX = 0
    let lastY = 0

    const apply = () => {
      raf = 0
      const cards = document.querySelectorAll<HTMLElement>('.spotlight-card')
      cards.forEach((card) => {
        const r = card.getBoundingClientRect()
        // Solo actualizar cards cerca del viewport (evita trabajo inútil)
        if (r.bottom < -100 || r.top > window.innerHeight + 100) return
        card.style.setProperty('--x', `${(lastX - r.left).toFixed(1)}px`)
        card.style.setProperty('--y', `${(lastY - r.top).toFixed(1)}px`)
      })
    }

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      if (!raf) raf = requestAnimationFrame(apply)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return null
}
