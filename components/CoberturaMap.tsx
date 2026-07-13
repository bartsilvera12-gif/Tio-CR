'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { W, H, departments, markers } from '@/lib/map-data'
import { carteles, type Cartel } from '@/lib/carteles'
import { contacto } from '@/lib/data'

type Marker = {
  key: string
  x: number
  y: number
  city: string
  dept: string
  route: string
  size: string
}
const pins = markers as Marker[]
const byKey = new Map(carteles.map((c) => [c.key, c]))

export default function CoberturaMap() {
  const [selected, setSelected] = useState<Cartel | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  useEffect(() => {
    if (!selected) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelected(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <div className="relative w-full max-w-[560px]">
      {/* Halo suave detrás del mapa */}
      <div className="pointer-events-none absolute inset-[10%] -z-10 rounded-full bg-[radial-gradient(circle,rgba(0,201,247,0.18),transparent_70%)] blur-2xl" />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full overflow-visible"
        role="img"
        aria-label="Mapa de cobertura de Paraguay"
      >
        <defs>
          <linearGradient id="mapFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E2247" />
            <stop offset="1" stopColor="#061428" />
          </linearGradient>
          <filter id="pinGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {departments.map((d: { name: string; d: string }) => (
          <path
            key={d.name}
            d={d.d}
            fill="url(#mapFill)"
            stroke="#00C9F7"
            strokeOpacity="0.3"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        ))}

        <polyline
          points={pins.map((p) => `${p.x},${p.y}`).join(' ')}
          fill="none"
          stroke="#00C9F7"
          strokeWidth="2.5"
          strokeOpacity="0.45"
          strokeDasharray="3 14"
          strokeLinecap="round"
          style={{ animation: 'mapDash 5s linear infinite' }}
        />

        {pins.map((p) => (
          <g key={p.key} transform={`translate(${p.x} ${p.y})`}>
            <g
              className="map-pin"
              filter="url(#pinGlow)"
              onClick={() => setSelected(byKey.get(p.key) ?? null)}
            >
              <title>{`${p.city} — ${p.dept} · ${p.route}`}</title>
              <path
                d="M0 0 C -7 -11 -15 -18 -15 -29 A 15 15 0 1 1 15 -29 C 15 -18 7 -11 0 0 Z"
                fill="#061428"
                stroke="#00E5FF"
                strokeWidth="2.5"
              />
              <circle cx="0" cy="-29" r="6" fill="#00E5FF" />
            </g>
          </g>
        ))}
      </svg>

      {/* Caption */}
      <p className="mt-4 flex items-center justify-center gap-2.5 text-sm text-white/60">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
        Tocá un punto para ver el cartel disponible
      </p>

      {/* Modal del cartel (portal para escapar de transforms) */}
      {mounted &&
        selected &&
        createPortal(
          <CartelModal cartel={selected} onClose={() => setSelected(null)} />,
          document.body
        )}
    </div>
  )
}

function CartelModal({ cartel, onClose }: { cartel: Cartel; onClose: () => void }) {
  const waMsg = `Hola Tíos R, me interesa el cartel de ${cartel.city} (${cartel.route}, ${cartel.size}). ¿Me pasan disponibilidad y tarifa?`
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{
        background: 'rgba(3, 8, 18, 0.75)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'fadeIn 0.25s ease both',
      }}
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-[560px] overflow-y-auto overflow-x-hidden rounded-3xl"
        style={{
          background:
            'linear-gradient(160deg, rgba(14,34,71,0.98) 0%, rgba(4,12,26,0.99) 100%)',
          border: '1px solid rgba(0,201,247,0.4)',
          boxShadow:
            '0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,201,247,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner */}
        <div className="relative overflow-hidden px-8 pb-6 pt-7">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,247,0.25),transparent_60%)]" />
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="flex items-center gap-3">
            <span className="rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-cyan">
              {cartel.route}
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Cartel disponible
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-bold text-white md:text-4xl">
            {cartel.city}
          </h3>
          <p className="mt-1 text-white/60">Departamento de {cartel.dept}</p>
        </div>

        {/* Info */}
        <div className="border-t border-white/10 px-8 py-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-5">
            <InfoItem label="Tipo de cartel" value={cartel.type} />
            <InfoItem label="Medidas" value={cartel.size} />
            <InfoItem label="Ruta" value={cartel.route} />
            <InfoItem label="Departamento" value={cartel.dept} />
          </div>
          <div className="mt-5 space-y-5 border-t border-white/10 pt-5">
            <InfoItem label="Referencia / Ubicación" value={cartel.ref} />
            <InfoItem label="Coordenadas" value={cartel.coords} />
          </div>
        </div>

        {/* Acciones */}
        <div className="flex flex-wrap gap-3 border-t border-white/10 px-8 py-6">
          <a
            href={`https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(waMsg)}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-[#06241A] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] active:scale-95"
          >
            Consultar por WhatsApp
          </a>
          <a
            href={cartel.map}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyan active:scale-95"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
            Ver en Maps
          </a>
        </div>
      </div>
    </div>
  )
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-cyan">
        {label}
      </div>
      <div className="mt-1 text-[15px] font-medium text-white">{value}</div>
    </div>
  )
}
