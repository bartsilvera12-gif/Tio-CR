import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import { carteles } from '@/lib/carteles'

const featured = (
  [
    { key: 'yaguaron', pos: '42% center', anchor: 'left' },
    { key: 'corpus', pos: '78% center', anchor: 'right' },
    { key: 'villaflorida', pos: '82% center', anchor: 'right' },
  ] as const
)
  .map((f) => {
    const c = carteles.find((x) => x.key === f.key)
    return c ? { ...c, pos: f.pos, anchor: f.anchor } : null
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
      </div>

      {/* Paneles expandibles — full-bleed */}
      <div className="expand-panels relative mt-12 flex flex-col bg-brand-navy md:h-[520px] md:flex-row">
        {featured.map((c, i) => (
          <Panel key={c.key} cartel={c} isFirst={i === 0} />
        ))}
      </div>

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
  isFirst,
}: {
  cartel: {
    city: string
    route: string
    ref: string
    images: string[]
    pos: string
    anchor: 'left' | 'right'
  }
  isFirst: boolean
}) {
  const src = cartel.images[0]
  return (
    <div
      className={`expand-panel group relative h-[300px] flex-1 cursor-pointer overflow-hidden border-0 outline-none md:h-full ${
        !isFirst ? 'md:-ml-5' : ''
      }`}
      style={{ background: '#061428' }}
    >
      {/* Imagen de TAMAÑO FIJO (75vw, más ancha que el panel máximo
          expandido) anclada a un lado. Al expandir el panel solo se
          revela más imagen — la imagen jamás cambia de escala. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={cartel.city}
        loading="lazy"
        decoding="async"
        className={`expand-panel-photo ${
          cartel.anchor === 'left' ? 'photo-anchor-left' : 'photo-anchor-right'
        }`}
        style={{ objectPosition: cartel.pos }}
      />

      {/* Franjas navy sólidas arriba y abajo — matan cualquier borde grey
          baked-in o seam de subpixel. Son sólidas, no gradiente. */}
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

      {/* Contenido — ciudad centrada. Sin overlay oscuro por encima:
          la foto se ve limpia y el texto lleva su propio text-shadow. */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
        <div
          className="expand-panel-title whitespace-nowrap font-display text-2xl font-bold uppercase tracking-widest text-white md:text-3xl lg:text-4xl"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 0 24px rgba(0,0,0,0.6)' }}
        >
          {cartel.city}
        </div>
        <div
          className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.3em] text-white/90 md:text-xs"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.8)' }}
        >
          {cartel.route}
        </div>
        <p
          className="expand-panel-detail mt-6 max-w-md text-sm leading-relaxed text-white"
          style={{ textShadow: '0 1px 6px rgba(0,0,0,0.85)' }}
        >
          {cartel.ref}
        </p>
      </div>
    </div>
  )
}
