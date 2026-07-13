'use client'

import { useEffect, useRef, useState } from 'react'

export type Condicion = {
  title: string
  body: string | null
}

const INTERVAL = 3800

export default function CondicionesCarousel({ items }: { items: Condicion[] }) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting)
      },
      { threshold: 0.35 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const t = setInterval(() => {
      setActive((i) => (i + 1) % items.length)
    }, INTERVAL)
    return () => clearInterval(t)
  }, [visible, items.length])

  return (
    <div ref={ref}>
      {/* Barra de progreso segmentada arriba */}
      <div className="flex gap-1.5" role="tablist" aria-label="Condiciones">
        {items.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            aria-label={`Condición ${i + 1}`}
            onClick={() => setActive(i)}
            className="group relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/10"
          >
            <span
              className={`absolute inset-y-0 left-0 bg-brand-cyan transition-[width,opacity]`}
              style={{
                width: i < active ? '100%' : i === active ? '100%' : '0%',
                opacity: i <= active ? 1 : 0,
                transitionDuration: i === active && visible ? `${INTERVAL}ms` : '0.4s',
                transitionTimingFunction: i === active ? 'linear' : 'ease',
                // reset instantáneo cuando vuelve a 0
                transitionProperty: i === active ? 'width' : 'width, opacity',
              }}
            />
          </button>
        ))}
      </div>

      {/* Lista con "spotlight" que camina */}
      <ul className="mt-8 space-y-3">
        {items.map((c, i) => {
          const isActive = i === active
          return (
            <li
              key={i}
              className="relative overflow-hidden rounded-2xl transition-all duration-500"
              style={{
                background: isActive
                  ? 'linear-gradient(90deg, rgba(0,201,247,0.14) 0%, rgba(0,201,247,0.04) 100%)'
                  : 'rgba(255,255,255,0.03)',
                border: isActive
                  ? '1px solid rgba(0,201,247,0.45)'
                  : '1px solid rgba(255,255,255,0.06)',
                boxShadow: isActive
                  ? '0 12px 32px -12px rgba(0,201,247,0.35), inset 0 1px 0 rgba(255,255,255,0.06)'
                  : 'none',
              }}
              onMouseEnter={() => setActive(i)}
            >
              {/* Indicador lateral cian */}
              <span
                className="absolute inset-y-3 left-0 w-[3px] rounded-r-full bg-brand-cyan transition-transform duration-500"
                style={{
                  transform: isActive ? 'scaleY(1)' : 'scaleY(0)',
                  transformOrigin: 'center',
                }}
              />

              <div className="flex items-start gap-4 px-5 py-4">
                <span
                  className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    background: isActive
                      ? 'linear-gradient(160deg, rgba(0,229,255,0.35), rgba(0,201,247,0.15))'
                      : 'rgba(0,201,247,0.1)',
                    border: isActive
                      ? '1px solid rgba(0,229,255,0.7)'
                      : '1px solid rgba(0,201,247,0.25)',
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00E5FF"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>

                <p
                  className="text-[15px] leading-relaxed transition-colors duration-500"
                  style={{ color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.55)' }}
                >
                  <strong className="font-bold">{c.title}</strong>
                  {c.body ? (
                    <span
                      className="transition-colors duration-500"
                      style={{ color: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.4)' }}
                    >
                      {' '}
                      {c.body}
                    </span>
                  ) : null}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
