'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? 'bg-white/85 backdrop-blur border-b border-brand-ink/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold tracking-tight text-brand-ink">
            TIO<span className="text-brand-cyan">CR</span>
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-brand-ink/70 transition hover:text-brand-ink"
            >
              {l.label}
            </a>
          ))}
          <a href="#contacto" className="btn-cyan">
            Solicitar campaña
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden"
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="#202020"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-ink/10 bg-white md:hidden">
          <div className="container flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-brand-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-cyan mt-2 justify-center"
            >
              Solicitar campaña
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
