'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  className?: string
  /** ms entre unidad y unidad */
  step?: number
  /** delay inicial en ms */
  delay?: number
  /** dividir por letra o por palabra */
  by?: 'letter' | 'word'
  /** classname aplicado a cada unidad (letra/palabra) — útil para gradientes */
  unitClassName?: string
}

/** Divide un texto en unidades y las revela una por una cuando entra en viewport */
export default function SplitTextReveal({
  text,
  className = '',
  step = 45,
  delay = 0,
  by = 'letter',
  unitClassName = '',
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const units =
    by === 'word'
      ? text.split(/(\s+)/).filter((u) => u.length > 0)
      : text.split('')

  return (
    <span ref={ref} className={className} aria-label={text}>
      {units.map((u, i) => {
        const isSpace = /^\s+$/.test(u)
        if (isSpace) return <span key={i}>&nbsp;</span>
        return (
          <span
            key={i}
            aria-hidden
            className={`${visible ? 'letter-in' : 'letter-hidden'} ${unitClassName}`}
            style={{
              animationDelay: `${delay + i * step}ms`,
              display: 'inline-block',
            }}
          >
            {u}
          </span>
        )
      })}
    </span>
  )
}
