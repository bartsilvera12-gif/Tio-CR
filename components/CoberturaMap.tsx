'use client'

import { useEffect, useRef, useState } from 'react'
import { liquidMetalFragmentShader, ShaderMount } from '@paper-design/shaders'
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

function waLink(c: Cartel) {
  const msg = `Hola TIO CR, me interesa el cartel de ${c.city} (${c.route}, ${c.size}). ¿Me pasan disponibilidad y tarifa?`
  return `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(msg)}`
}

export default function CoberturaMap() {
  const [selected, setSelected] = useState<Cartel | null>(null)
  const [hovered, setHovered] = useState<Marker | null>(null)
  const [mounted, setMounted] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const shaderRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const shaderMount = useRef<any>(null)

  // Montar el liquid-metal shader sobre el mapa (clipeado a la silueta de Paraguay)
  useEffect(() => {
    if (!shaderRef.current) return
    try {
      shaderMount.current = new ShaderMount(
        shaderRef.current,
        liquidMetalFragmentShader,
        {
          u_repetition: 3,
          u_softness: 0.55,
          u_shiftRed: 0.25,
          u_shiftBlue: 0.25,
          u_distortion: 0.15,
          u_contour: 0,
          u_angle: 60,
          u_scale: 5,
          u_shape: 1,
          u_offsetX: 0,
          u_offsetY: 0,
        },
        undefined,
        0.35, // speed lenta — sensación de agua/mercurio flotando
      )
    } catch (err) {
      console.error('[CoberturaMap] shader failed:', err)
    }
    return () => {
      if (shaderMount.current?.destroy) shaderMount.current.destroy()
      shaderMount.current = null
    }
  }, [])

  const showTooltip = (p: Marker) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setHovered(p)
  }
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setHovered(null), 130)
  }
  const keepOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
  }

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

  const hoveredCartel = hovered ? byKey.get(hovered.key) : null

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
            <stop offset="0" stopColor="#4A5A70" />
            <stop offset="1" stopColor="#1E2836" />
          </linearGradient>
          {/* Máscara: SOLO los strokes/bordes de los pines */}
          <mask id="pmMask">
            {pins.map((p) => (
              <g key={`mp-${p.key}`} transform={`translate(${p.x} ${p.y})`}>
                <path
                  d="M0 0 C -7 -11 -15 -18 -15 -29 A 15 15 0 1 1 15 -29 C 15 -18 7 -11 0 0 Z"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />
                <circle
                  cx="0"
                  cy="-29"
                  r="6"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                />
              </g>
            ))}
          </mask>
        </defs>

        {/* Relleno interior — gris azulado (sin bordes internos) */}
        {departments.map((d: { name: string; d: string }) => (
          <path key={`fill-${d.name}`} d={d.d} fill="url(#mapFill)" />
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

        {/* Pines con fill navy sólido — el shader se aplica solo al outline vía la mask (renderea encima) */}
        {pins.map((p) => (
          <g key={p.key} transform={`translate(${p.x} ${p.y})`}>
            <g
              className="map-pin"
              onClick={() => setSelected(byKey.get(p.key) ?? null)}
              onMouseEnter={() => showTooltip(p)}
              onMouseLeave={scheduleClose}
              style={{ cursor: 'pointer' }}
            >
              <path
                d="M0 0 C -7 -11 -15 -18 -15 -29 A 15 15 0 1 1 15 -29 C 15 -18 7 -11 0 0 Z"
                fill="#061428"
              />
              <circle cx="0" cy="-29" r="6" fill="#061428" />
            </g>
          </g>
        ))}
        {/* Liquid metal: solo se ve en los outlines de los pines (arriba de todo) */}
        <g mask="url(#pmMask)">
          <foreignObject x="0" y="0" width={W} height={H}>
            <div
              ref={shaderRef}
              // @ts-expect-error xmlns necesario para render dentro de foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </foreignObject>
        </g>
      </svg>

      {/* Tooltip flotante al hacer hover sobre un pin */}
      {hovered && hoveredCartel && (
        <div
          className="absolute z-20 w-[240px] -translate-x-1/2 rounded-2xl p-4"
          onMouseEnter={keepOpen}
          onMouseLeave={scheduleClose}
          style={{
            left: `${(hovered.x / W) * 100}%`,
            top: `${(hovered.y / H) * 100}%`,
            transform: 'translate(-50%, calc(-100% - 44px))',
            background:
              'linear-gradient(160deg, rgba(14,34,71,0.98) 0%, rgba(4,12,26,0.99) 100%)',
            border: '1px solid rgba(0,201,247,0.35)',
            boxShadow:
              '0 16px 44px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)',
            animation: 'fadeIn 0.2s ease both',
          }}
        >
          <div className="font-display text-lg font-bold text-white">
            {hovered.city}
          </div>
          <div className="mt-0.5 text-xs text-white/60">
            Departamento de {hovered.dept}
          </div>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <span className="rounded-full border border-brand-cyan/50 bg-brand-cyan/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-cyan">
              {hovered.route}
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-white/80">
              {hovered.size}
            </span>
          </div>
          <a
            href={waLink(hoveredCartel)}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center justify-center rounded-lg bg-[#25D366] px-3 py-2 text-xs font-bold text-[#06241A] transition hover:brightness-110 active:scale-95"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}

      {/* Caption */}
      <p className="mt-4 flex items-center justify-center gap-2.5 text-sm text-white/60">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-cyan" />
        Tocá un punto para ver el cartel disponible
      </p>

      {/* Modal (portal para escapar de transforms) */}
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
  const [idx, setIdx] = useState(0)
  const imgs = cartel.images
  const prev = () => setIdx((i) => (i - 1 + imgs.length) % imgs.length)
  const next = () => setIdx((i) => (i + 1) % imgs.length)

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
        className="relative max-h-[92vh] w-full max-w-[620px] overflow-y-auto overflow-x-hidden rounded-3xl"
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
        <div className="relative overflow-hidden px-7 pb-5 pt-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,201,247,0.25),transparent_60%)]" />
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-brand-cyan hover:text-brand-cyan"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
              {/* Liquid metal: solo se ve en los outlines de los pines (arriba de todo) */}
        <g mask="url(#pmMask)">
          <foreignObject x="0" y="0" width={W} height={H}>
            <div
              ref={shaderRef}
              // @ts-expect-error xmlns necesario para render dentro de foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </foreignObject>
        </g>
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
          <h3 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">
            {cartel.city}
          </h3>
          <p className="mt-1 text-white/60">Departamento de {cartel.dept}</p>
        </div>

        {/* Carrusel de fotos */}
        {imgs.length > 0 && (
          <div className="px-7">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imgs[idx]}
                alt={`${cartel.city} — foto ${idx + 1}`}
                className="aspect-[16/9] w-full object-cover"
              />
              {imgs.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 6l-6 6 6 6" />
                      {/* Liquid metal: solo se ve en los outlines de los pines (arriba de todo) */}
        <g mask="url(#pmMask)">
          <foreignObject x="0" y="0" width={W} height={H}>
            <div
              ref={shaderRef}
              // @ts-expect-error xmlns necesario para render dentro de foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </foreignObject>
        </g>
      </svg>
                  </button>
                  <button
                    onClick={next}
                    aria-label="Siguiente"
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition hover:bg-black/70"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 6l6 6-6 6" />
                      {/* Liquid metal: solo se ve en los outlines de los pines (arriba de todo) */}
        <g mask="url(#pmMask)">
          <foreignObject x="0" y="0" width={W} height={H}>
            <div
              ref={shaderRef}
              // @ts-expect-error xmlns necesario para render dentro de foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </foreignObject>
        </g>
      </svg>
                  </button>
                  <span className="absolute bottom-3 right-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-semibold text-white">
                    {idx + 1} / {imgs.length}
                  </span>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {imgs.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {imgs.map((src, i) => (
                  <button
                    key={src}
                    onClick={() => setIdx(i)}
                    className={`shrink-0 overflow-hidden rounded-lg border-2 transition ${
                      i === idx ? 'border-brand-cyan' : 'border-white/15 opacity-60 hover:opacity-100'
                    }`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt="" className="h-14 w-20 object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Info */}
        <div className="px-7 py-6">
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
        <div className="flex flex-wrap gap-3 border-t border-white/10 px-7 py-6">
          <a
            href={waLink(cartel)}
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
              {/* Liquid metal: solo se ve en los outlines de los pines (arriba de todo) */}
        <g mask="url(#pmMask)">
          <foreignObject x="0" y="0" width={W} height={H}>
            <div
              ref={shaderRef}
              // @ts-expect-error xmlns necesario para render dentro de foreignObject
              xmlns="http://www.w3.org/1999/xhtml"
              style={{ width: '100%', height: '100%', pointerEvents: 'none' }}
            />
          </foreignObject>
        </g>
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
