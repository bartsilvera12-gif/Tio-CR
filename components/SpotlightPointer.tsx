'use client'

import { useEffect } from 'react'

/** Rastrea el puntero y escribe coordenadas LOCALES (--x/--y) en cada
    .spotlight-card. Recalcula también en scroll/resize — si la card se
    mueve bajo un cursor quieto, el glow no queda desfasado. */
export default function SpotlightPointer() {
  useEffect(() => {
    let raf = 0
    let lastX = -9999
    let lastY = -9999

    const apply = () => {
      raf = 0
      const cards = document.querySelectorAll<HTMLElement>('.spotlight-card')
      cards.forEach((card) => {
        const r = card.getBoundingClientRect()
        if (r.bottom < -100 || r.top > window.innerHeight + 100) return
        card.style.setProperty('--x', `${(lastX - r.left).toFixed(1)}px`)
        card.style.setProperty('--y', `${(lastY - r.top).toFixed(1)}px`)
      })
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX
      lastY = e.clientY
      schedule()
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    // El scroll mueve la card bajo el cursor — recalcular con la última posición
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule, { passive: true })
    return () => {
      document.removeEventListener('pointermove', onMove)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return null
}
