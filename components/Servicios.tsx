import { servicios } from '@/lib/data'
import Reveal from './Reveal'

const iconos: Record<string, React.ReactNode> = {
  ruta: <path d="M6 20L10 4h4l4 16M9 12h6" />,
  led: (
    <>
      <rect x="3" y="5" width="18" height="12" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  lona: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="1" />
      <path d="M4 9h16M9 4v16" />
    </>
  ),
  bus: (
    <>
      <rect x="4" y="6" width="16" height="11" rx="2" />
      <path d="M4 12h16M8 17v2M16 17v2" />
      <circle cx="8" cy="14" r="1" />
      <circle cx="16" cy="14" r="1" />
    </>
  ),
  campana: (
    <>
      <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
}

export default function Servicios() {
  return (
    <section id="servicios" className="section relative bg-brand-navy text-white">
      {/* Transición suave desde el negro del hero hacia el navy */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Qué hacemos</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
            Todo lo que necesitás para estar en la calle.
          </h2>
          <p className="mt-5 text-lg text-white/70">
            De la producción al montaje: cubrimos cada etapa de tu campaña de
            publicidad exterior.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 90} as="article">
              <div className="group relative h-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/[0.08] hover:shadow-[0_20px_50px_-15px_rgba(0,201,247,0.4)]">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cyan/15 text-brand-cyan transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-cyan group-hover:text-brand-navy">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {iconos[s.icono]}
                  </svg>
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {s.titulo}
                </h3>
                <p className="mt-3 text-white/70">{s.descripcion}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
