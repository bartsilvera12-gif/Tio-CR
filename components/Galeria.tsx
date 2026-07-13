import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import { carteles } from '@/lib/carteles'

/** Selección para el mosaico — mezcla ciudades con distintas rutas y escenarios */
const featuredKeys = [
  'caacupe',
  'yaguaron',
  'quiindy',
  'pjc',
  'corpus',
  'villaflorida',
  'obligado',
  'yguazu',
] as const

const featured = featuredKeys
  .map((k) => carteles.find((c) => c.key === k))
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
              <span className="eyebrow">Nuestro trabajo</span>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
                Campañas reales, en la ruta.
              </h2>
            </div>
            <p className="max-w-md text-white/70">
              Registros de nuestros carteles en las principales rutas del país.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((c, i) => {
            // Mosaico responsivo
            const layout: Record<number, string> = {
              0: 'lg:col-span-2 lg:row-span-2', // grande a la izquierda
              1: 'lg:col-span-1',
              2: 'lg:col-span-1',
              3: 'lg:col-span-2', // ancho abajo del 1 y 2
              4: 'lg:col-span-1',
              5: 'lg:col-span-1',
              6: 'lg:col-span-1',
              7: 'lg:col-span-1',
            }
            return (
              <Reveal
                key={c.key}
                delay={i * 110}
                direction={i % 2 === 0 ? 'left-clean' : 'right-clean'}
                className={layout[i] ?? ''}
              >
                <GalleryCard
                  src={c.images[0]}
                  city={c.city}
                  route={c.route}
                />
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  src,
  city,
  route,
}: {
  src: string
  city: string
  route: string
}) {
  return (
    <div
      className="group relative h-full w-full overflow-hidden rounded-2xl transition-shadow duration-500 hover:shadow-[0_28px_60px_-18px_rgba(0,201,247,0.45)]"
      style={{
        // Fondo navy explícito (evita cualquier subpixel claro alrededor del edge)
        background: '#061428',
        boxShadow:
          '0 18px 44px -18px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(6,20,40,1)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={city}
        loading="lazy"
        className="block h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
      />

      {/* Vignette dark en los bordes: integra la foto con el navy sin verse "cortada" */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          boxShadow:
            'inset 0 0 40px 8px rgba(6,20,40,0.75), inset 0 0 0 1px rgba(0,201,247,0.08)',
        }}
      />

      {/* Overlay oscuro que se intensifica en hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-95 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glow cian al hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(ellipse_at_top,rgba(0,201,247,0.35),transparent_60%)] mix-blend-overlay" />

      {/* Etiqueta de ciudad */}
      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
        <div className="pill glass-dark rounded-lg px-3 py-2 transition-all duration-500 group-hover:-translate-y-1">
          <div className="font-display text-sm font-bold uppercase tracking-wider text-white">
            {city}
          </div>
        </div>
        {/* Ruta chip visible solo en hover */}
        <div className="translate-y-2 rounded-full border border-brand-cyan/50 bg-brand-cyan/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-cyan opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          {route}
        </div>
      </div>
    </div>
  )
}
