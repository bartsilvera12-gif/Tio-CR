'use client'

import { useSearchParams } from 'next/navigation'
import { useMemo, useState } from 'react'
import { carteles, type Cartel } from '@/lib/carteles'
import GlowBlob from '@/components/GlowBlob'

const routeSlug = (r: string) => r.toLowerCase().replace(/^ruta\s+/, '').replace(/\s+/g, '-')

/** Rutas únicas presentes en los carteles, en orden numérico */
const uniqueRoutes = Array.from(new Set(carteles.map((c) => c.route))).sort()

type Photo = { src: string; cartel: Cartel; idx: number }

export default function GaleriaCliente() {
  const params = useSearchParams()
  const rutaParam = params.get('ruta')
  const [lightbox, setLightbox] = useState<Photo | null>(null)

  const filtered = useMemo(() => {
    if (!rutaParam) return carteles
    return carteles.filter((c) => routeSlug(c.route) === rutaParam)
  }, [rutaParam])

  const photos: Photo[] = useMemo(
    () =>
      filtered.flatMap((c) =>
        c.images.map((src, idx) => ({ src, cartel: c, idx }))
      ),
    [filtered]
  )

  const activeSlug = rutaParam ?? 'todas'

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <GlowBlob
        className="right-[6%] top-[10%] h-[380px] w-[520px]"
        opacity={0.1}
        rotate={26}
        radius="48% 52% 40% 60% / 58% 44% 56% 42%"
      />
      <GlowBlob
        className="left-[-6%] bottom-[8%] h-[320px] w-[420px]"
        opacity={0.12}
        radius="52% 48% 62% 38% / 45% 58% 42% 55%"
        animated
        speed="slow"
      />

      <div className="container relative text-white">
        <div className="max-w-3xl">
          <span className="eyebrow inline-flex items-center gap-2.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            Galería completa
          </span>
          <h1 className="mt-4 pb-1 font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Nuestros carteles en la ruta.
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Cada uno de los <strong className="text-white">22 puntos</strong> que
            operamos en el Paraguay — filtrá por ruta para ver los carteles
            específicos.
          </p>
        </div>

        {/* Chips de filtro */}
        <div className="mt-10 flex flex-wrap gap-2">
          <FilterChip
            href="/galeria"
            active={activeSlug === 'todas'}
            label="Todas"
            count={carteles.length}
          />
          {uniqueRoutes.map((r) => {
            const slug = routeSlug(r)
            const count = carteles.filter((c) => c.route === r).length
            return (
              <FilterChip
                key={r}
                href={`/galeria?ruta=${slug}`}
                active={activeSlug === slug}
                label={r.replace('RUTA ', '')}
                count={count}
              />
            )
          })}
        </div>

        {/* Contador */}
        <div className="mt-6 text-sm text-white/50">
          Mostrando{' '}
          <strong className="text-brand-cyan">{filtered.length}</strong>{' '}
          {filtered.length === 1 ? 'cartel' : 'carteles'} ·{' '}
          <strong className="text-brand-cyan">{photos.length}</strong> fotos
        </div>

        {/* Grid de fotos */}
        {photos.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center text-white/60">
            No hay carteles para esa ruta.
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {photos.map((p, i) => (
              <button
                key={`${p.cartel.key}-${p.idx}`}
                onClick={() => setLightbox(p)}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-navyDeep text-left transition-shadow duration-500 hover:shadow-[0_28px_60px_-18px_rgba(0,201,247,0.5)]"
                style={{ animationDelay: `${(i % 12) * 40}ms` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={`${p.cartel.city} — ${p.cartel.route}`}
                  loading="lazy"
                  className="h-full w-full scale-[1.06] object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.16]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(0,201,247,0.32),transparent_60%)] mix-blend-overlay" />

                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-2">
                  <div>
                    <div className="font-display text-base font-bold uppercase tracking-wider text-white">
                      {p.cartel.city}
                    </div>
                    <div className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-white/60">
                      {p.cartel.dept}
                    </div>
                  </div>
                  <div className="rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan backdrop-blur-sm">
                    {p.cartel.route.replace('RUTA ', '')}
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Cerrar"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <div
            className="relative max-h-[90vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.src}
              alt={lightbox.cartel.city}
              className="max-h-[85vh] rounded-2xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <div>
                <div className="font-display text-2xl font-bold">
                  {lightbox.cartel.city}
                </div>
                <div className="text-sm text-white/60">
                  {lightbox.cartel.dept} · {lightbox.cartel.route} ·{' '}
                  {lightbox.cartel.size}
                </div>
              </div>
              <a
                href={lightbox.cartel.map}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-cyan transition hover:bg-brand-cyan/20"
                onClick={(e) => e.stopPropagation()}
              >
                Ver en mapa ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function FilterChip({
  href,
  active,
  label,
  count,
}: {
  href: string
  active: boolean
  label: string
  count: number
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
        active
          ? 'border-brand-cyan bg-brand-cyan/20 text-brand-cyan shadow-[0_4px_18px_-6px_rgba(0,201,247,0.5)]'
          : 'border-white/15 bg-white/[0.03] text-white/80 hover:-translate-y-0.5 hover:border-brand-cyan/60 hover:bg-brand-cyan/10 hover:text-brand-cyan'
      }`}
    >
      <span>{label}</span>
      <span
        className={`rounded-full px-1.5 text-[10px] font-bold ${
          active ? 'bg-brand-cyan/30 text-white' : 'bg-white/10 text-white/60'
        }`}
      >
        {count}
      </span>
    </a>
  )
}