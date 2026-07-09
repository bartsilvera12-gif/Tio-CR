'use client'

import { useEffect, useState } from 'react'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#galeria', label: 'Galería' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 backdrop-blur'
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(5, 14, 31, 0.85)' : 'transparent',
      }}
    >
      <div className="container flex h-20 items-center justify-between">
        {/* Logo real con blend-mode para eliminar fondo del JPEG */}
        <a href="#inicio" className="flex items-center">
          <img
            src="/logo-mark.jpg"
            alt="TIOCR"
            className="h-10 md:h-12"
            style={{ mixBlendMode: 'screen' }}
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = active === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className={`relative py-2 text-sm font-semibold uppercase tracking-widest transition ${
                  isActive ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
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
            Solicitar presupuesto
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="text-white md:hidden"
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
        <div className="border-t border-white/10 md:hidden" style={{ backgroundColor: 'rgba(5, 14, 31, 0.95)' }}>
          <div className="container flex flex-col py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-semibold uppercase tracking-widest text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-cyan mt-2 justify-center uppercase tracking-widest"
            >
              Solicitar presupuesto
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
