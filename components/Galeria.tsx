import { galeria } from '@/lib/data'
import Reveal from './Reveal'

export default function Galeria() {
  return (
    <section id="galeria" className="section bg-brand-soft">
      <div className="container">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="eyebrow">Nuestro trabajo</span>
              <h2 className="h-display mt-4 text-4xl md:text-5xl">
                Campañas reales, en la ruta.
              </h2>
            </div>
            <p className="max-w-md text-brand-ink/70">
              Una muestra de los formatos que producimos: cartelería, pantallas
              y vehículos.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((g, i) => (
            <Reveal key={i} delay={i * 80}>
              <div
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-ink/90 to-brand-ink transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_rgba(0,201,247,0.5)] ${
                  i === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-square' : 'aspect-[4/3]'
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,201,247,0.25),transparent_60%)] transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand-cyan transition-transform duration-500 group-hover:-translate-y-1">
                    {g.categoria}
                  </span>
                  <div className="mt-1 text-xl font-semibold text-white transition-transform duration-500 group-hover:-translate-y-1">
                    {g.titulo}
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-30 transition-all duration-700 group-hover:scale-110 group-hover:opacity-50">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <circle cx="9" cy="11" r="1.5" />
                    <path d="M21 15l-5-5-8 9" />
                  </svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
