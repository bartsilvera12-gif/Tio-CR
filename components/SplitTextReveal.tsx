'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  text: string
  className?: string
  /** ms entre letra y letra */
  step?: number
  /** delay inicial en ms */
  delay?: number
}

/** Divide un texto en letras y las revela una por una cuando la sección entra en viewport */
export default function SplitTextReveal({
  text,
  className = '',
  step = 45,
  delay = 0,
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
      { threshold: 0.35, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split('').map((ch, i) => (
        <span
          key={i}
          aria-hidden
          className={visible ? 'letter-in' : 'letter-hidden'}
          style={{ animationDelay: `${delay + i * step}ms`, display: 'inline-block' }}
        >
          {ch === ' ' ? ' ' : ch}
        </span>
      ))}
    </span>
  )
}
