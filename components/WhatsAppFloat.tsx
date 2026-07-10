'use client'

import { useEffect, useRef, useState } from 'react'
import { contacto } from '@/lib/data'

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z" />
    </svg>
  )
}

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const options = [
    { number: contacto.whatsapp, label: contacto.whatsappDisplay },
    { number: contacto.whatsapp2, label: contacto.whatsapp2Display },
  ]

  return (
    <div
      ref={containerRef}
      className={`fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* Popover con las 2 opciones */}
      <div
        className={`origin-bottom-right space-y-2 transition-all duration-300 ${
          open
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-95 opacity-0'
        }`}
      >
        {/* Fondo sólido con look de vidrio (sin backdrop-filter: evita el "pop" del blur al aparecer) */}
        <div
          className="rounded-2xl p-2 shadow-[0_16px_40px_-12px_rgba(0,0,0,0.55)]"
          style={{
            background:
              'linear-gradient(160deg, rgba(16,32,58,0.98) 0%, rgba(7,18,38,0.98) 100%)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow:
              'inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 40px -12px rgba(0,0,0,0.55)',
          }}
        >
          <div className="px-3 py-2 text-xs font-semibold uppercase tracking-widest text-white/50">
            Elegí un número
          </div>
          {options.map((o) => (
            <a
              key={o.number}
              href={`https://wa.me/${o.number}`}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-brand-cyan/15"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]">
                <WaIcon size={16} />
              </span>
              <span className="text-sm font-semibold text-white">
                {o.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Botón flotante */}
      <button
        type="button"
        aria-label="Contactar por WhatsApp"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <div
          className={`transition-transform duration-300 ${
            open ? 'rotate-45' : 'rotate-0'
          }`}
        >
          {open ? (
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <WaIcon size={26} />
          )}
        </div>
      </button>
    </div>
  )
}
