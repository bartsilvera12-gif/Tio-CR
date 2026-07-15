import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import { carteles } from '@/lib/carteles'

const featured = (
  [
    { key: 'yaguaron', pos: '42% center' },
    { key: 'corpus', pos: '78% center' },
    { key: 'villaflorida', pos: '82% center' },
  ] as const
)
  .map((f) => {
    const c = carteles.find((x) => x.key === f.key)
    return c ? { ...c, pos: f.pos } : null
  })
  .filter((c): c is NonNullable<typeof c> => Boolean(c && c.images.length))

export default function Galeria() {
  return (
    <section
      id="galeria"
      className="section relative overflow-hidden bg-brand-navy text-white"
    >
      <GlowBlob
        className="right-[4%] top-[35%] h-[360px] w-[480px]"
        opacity={0.09}
        rotate={30}
        radius="48% 52% 40% 60% / 58% 44% 56% 42%"
      />
      <GlowBlob
        className="left-[-6%] bottom-[6%] h-[320px] w-[420px]"
        opacity={0.11}
        radius="52% 48% 62% 38% / 45% 58% 42% 55%"
        animated
        speed="slow"
      />

      {/* Header — dentro del container */}
      <div className="container relative">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Nuestros carteles</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Campañas reales, en la ruta.
              </h2>
            </div>
            <p className="max-w-md text-white/70">
              Registros de nuestros carteles en las principales rutas del país.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Paneles expandibles — full-bleed, de un extremo al otro.
          Sin <Reveal> wrapper: su will-change+transform deja un seam de 1px
          en el borde superior del layer promocionado. */}
      <div className="expand-panels relative mt-12 flex flex-col bg-brand-navy md:h-[520px] md:flex-row">
        {featured.map((c) => (
          <Panel key={c.key} cartel={c} />
        ))}
      </div>

      {/* CTA — vuelve al container */}
      <div className="container relative">
        <div className="mt-10 flex justify-center">
          <a href="/galeria" className="btn-cta uppercase tracking-widest">
            <span>Ver galería completa</span>
            <svg
              className="cta-arrow"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function Panel({
  cartel,
}: {
  cartel: {
    city: string
    route: string
    ref: string
    images: string[]
    pos: string
  }
}) {
  const src = cartel.images[0]
  const smSrc = src.replace(/\.webp$/, '-sm.webp')
  return (
    <div
      className="expand-panel group relative h-[300px] flex-1 cursor-pointer overflow-hidden border-0 outline-none md:h-full"
      style={
        {
          background: '#061428',
          '--pos': cartel.pos,
        } as React.CSSProperties
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={smSrc}
        srcSet={`${smSrc} 600w, ${src} 1400w`}
        sizes="(max-width: 768px) 100vw, 60vw"
        alt={cartel.city}
        loading="lazy"
        decoding="async"
        className="expand-panel-img absolute inset-0 block h-full w-full object-cover"
      />

      {/* Franjas navy sólidas — SIEMPRE encima de todo, matan la banda gris */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[6px]"
        style={{ background: '#061428' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[6px]"
        style={{ background: '#061428' }}
      />

      {/* Overlay oscuro con "vignette horizontal": mata los bordes gris
          que aparecen donde el sky de la foto se mezcla con el gradient */}
      <div
        className="expand-panel-overlay pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #061428 0%, rgba(6,20,40,0) 12%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      {/* Contenido — ciudad centrada (OPL-style) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="expand-panel-title whitespace-nowrap font-display text-2xl font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:text-3xl lg:text-4xl">
          {cartel.city}
        </div>
        <div className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75 md:text-xs">
          {cartel.route}
        </div>
        <p className="expand-panel-detail mt-6 max-w-md text-sm leading-relaxed text-white/90">
          {cartel.ref}
        </p>
      </div>
    </div>
  )
}
