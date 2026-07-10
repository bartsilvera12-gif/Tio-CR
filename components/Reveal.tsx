'use client'

import { useEffect, useRef, useState } from 'react'

type Props = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'span'
  direction?: 'up' | 'right' | 'below'
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
      className={`reveal ${direction === 'right' ? 'from-right' : direction === 'below' ? 'from-below' : ''} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Tag>
  )
}
