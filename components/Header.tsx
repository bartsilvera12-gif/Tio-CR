'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { LiquidMetalButton } from './ui/liquid-metal-button'

const links = [
  { href: '/#inicio', label: 'Inicio' },
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#cobertura', label: 'Cobertura' },
  { href: '/galeria', label: 'Galería' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      if (pathname !== '/') return
      const sections = ['#inicio', '#servicios', '#cobertura', '#galeria', '#contacto']
      const y = window.scrollY + 120
      for (const id of sections) {
        const el = document.querySelector(id) as HTMLElement | null
        if (el && el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
          setActiveHash(id)
          break
        }
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname])

  const activeHref =
    pathname === '/' ? `/${activeHash}` : pathname === '/galeria' ? '/galeria' : ''

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'backdrop-blur-2xl backdrop-saturate-150' : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(5, 14, 31, 0.55)' : 'transparent',
      }}
    >
      <div className="container flex h-20 items-center justify-between">
        <a
          href="/"
          className="group flex items-center transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <img src="/logo.webp" alt="TIOCR" className="h-8 md:h-10" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const isActive = activeHref === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                className="group relative py-2 text-sm font-semibold uppercase tracking-widest text-sky-50 transition-transform duration-300 active:scale-95"
              >
                {l.label}
                <span
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand-cyan transition-transform duration-300 ease-out ${
                    isActive
                      ? 'scale-x-100'
                      : 'origin-left scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            )
          })}
        </nav>

        <div className="hidden md:flex md:items-center">
          <a href="/#contacto" aria-label="Solicitar presupuesto" className="inline-flex items-center">
            <LiquidMetalButton label="Solicitar presupuesto" variant="white" width={280} height={54} />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 active:scale-95 md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300" style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)' }}>
            <path
              d={open ? 'M6 6l12 12M18 6L6 18' : 'M4 7h16M4 12h16M4 17h16'}
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-white/10 backdrop-blur-2xl backdrop-saturate-150 transition-[max-height,opacity] duration-300 ease-out md:hidden ${
          open ? 'max-h-[520px] opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: 'rgba(5, 14, 31, 0.92)' }}
      >
        <div className="container flex flex-col divide-y divide-white/5 py-2">
          {links.map((l, i) => {
            const isActive = activeHref === l.href
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-4 text-base font-semibold uppercase tracking-widest transition-colors ${
                  isActive ? 'text-brand-cyan' : 'text-white hover:text-brand-cyan'
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <span>{l.label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-40">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            )
          })}
          <a
            href="/#contacto"
            onClick={() => setOpen(false)}
            className="btn-cta mt-4 justify-center uppercase tracking-widest"
          >
            <span>Solicitar presupuesto</span>
            <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}