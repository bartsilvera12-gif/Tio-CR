'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#galeria', label: 'Galería' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      // scroll spy
      const sections = ['#inicio', '#servicios', '#cobertura', '#galeria', '#contacto']
      const y = window.scrollY + 120
      for (const id of sections) {
        const el = document.querySelector(id) as HTMLElement | null
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActive(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const textColor = scrolled ? 'text-brand-ink' : 'text-white'
  const mutedColor = scrolled ? 'text-brand-ink/60' : 'text-white/70'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur border-b border-brand-ink/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="#inicio" className={`flex items-center gap-2 font-display text-2xl font-bold tracking-tight transition ${textColor}`}>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-cyan">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-cyan" />
          </span>
          <span>
            TIO<span className="text-brand-cyan">CR</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-2 text-sm font-semibold uppercase tracking-widest transition ${
                  isActive
                    ? scrolled
                      ? 'text-brand-ink'
                      : 'text-white'
                    : mutedColor
                } hover:${scrolled ? 'text-brand-ink' : 'text-white'}`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-cyan" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="hidden md:block">
          <a href="#contacto" className="btn-cyan uppercase tracking-widest">
            Contacto
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden ${textColor}`}
          aria-label="Abrir menú"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
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
                className="py-3 text-sm font-semibold uppercase tracking-widest text-brand-ink"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-cyan mt-2 justify-center uppercase tracking-widest"
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
