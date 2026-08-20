'use client'

import { useEffect, useRef, useState } from 'react'
import { contacto } from '@/lib/data'

function WaIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
    { number: contacto.whatsapp, title: 'WhatsApp 1', label: contacto.whatsappDisplay },
    { number: contacto.whatsapp2, title: 'WhatsApp 2', label: contacto.whatsapp2Display },
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
            Nuestros contactos
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
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">
                  {o.title}
                </div>
                <div className="text-sm font-semibold text-white">
                  {o.label}
                </div>
              </div>
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
