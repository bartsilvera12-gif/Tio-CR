import Reveal from './Reveal'

export default function Propuesta() {
  return (
    <section
      id="propuesta"
      className="relative overflow-hidden py-16 text-white md:py-32"
      style={{
        backgroundImage: 'url(/fondo-propuesta.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Fade desde el navy anterior (Galería) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-brand-navy to-transparent" />
      {/* Fade hacia el navyDeep siguiente (Contacto) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-24 bg-gradient-to-t from-brand-navyDeep to-transparent" />
      <div className="container relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white md:text-5xl" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.55)" }}>
            Una inversión clara y transparente
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 flex flex-col items-center gap-6 text-center">
            <p className="max-w-sm text-lg font-semibold text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.5)]">
              ¿Listo para poner tu marca en la ruta?
            </p>
            <a
              href="#contacto"
              className="btn-cta btn-blink px-12 py-6 text-lg uppercase tracking-widest"
            >
              <span>Solicitar propuesta</span>
              <svg
                className="cta-arrow"
                width="20"
                height="20"
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
        </Reveal>
      </div>
    </section>
  )
}