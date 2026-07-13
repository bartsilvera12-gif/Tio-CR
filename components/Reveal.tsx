'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'span'
  direction?:
    | 'up'
    | 'right'
    | 'below'
    | 'left'
    | 'fade'
    | 'left-clean'
    | 'right-clean'
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
  direction = 'up',
}: Props) {
  const ref = useRef<HTMLElement>(null)
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
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${
        direction === 'right'
          ? 'from-right'
          : direction === 'below'
          ? 'from-below'
          : direction === 'left'
          ? 'from-left'
          : direction === 'fade'
          ? 'fade-only'
          : direction === 'left-clean'
          ? 'from-left-clean'
          : direction === 'right-clean'
          ? 'from-right-clean'
          : ''
      } ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
