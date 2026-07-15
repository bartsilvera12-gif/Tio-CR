import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import { carteles } from '@/lib/carteles'

/** 3 paneles expandibles al estilo OPL Digital.
    En reposo cada panel muestra el lado más cercano al cartel (object-position);
    al hover el panel se ensancha y la imagen se centra para revelar la escena. */
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

        {/* Paneles expandibles (OPL-style) */}
        <Reveal delay={120}>
          <div className="expand-panels mt-12 flex flex-col gap-3 md:h-[520px] md:flex-row md:gap-2">
            {featured.map((c) => (
              <Panel key={c.key} cartel={c} />
            ))}
          </div>
        </Reveal>

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
      className="expand-panel group relative h-[280px] flex-1 cursor-pointer overflow-hidden rounded-2xl md:h-full"
      style={
        {
          background: '#061428',
          boxShadow: '0 18px 44px -18px rgba(0,0,0,0.6)',
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
        className="expand-panel-img absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay oscuro que se aclara al expandir */}
      <div className="expand-panel-overlay pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/25" />

      {/* Contenido — ciudad centrada (OPL-style) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <div className="font-display text-3xl font-bold uppercase tracking-widest text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] md:text-4xl">
          {cartel.city}
        </div>
        <div className="mt-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/75">
          {cartel.route}
        </div>
        {/* Descripción — visible solo cuando el panel está expandido */}
        <p className="expand-panel-detail mt-6 max-w-md text-sm leading-relaxed text-white/90">
          {cartel.ref}
        </p>
      </div>
    </div>
  )
}
