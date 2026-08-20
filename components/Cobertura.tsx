import { rutas } from '@/lib/data'
import Reveal from './Reveal'
import CoberturaMap from './CoberturaMap'
import SplitTextReveal from './SplitTextReveal'

export default function Cobertura() {
  return (
    <section
      id="cobertura"
      className="section relative overflow-hidden text-white"
      style={{
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Fade hacia el navy siguiente (Galería) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-brand-navy to-transparent" />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1F3D]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#0A1F3D]" />
              Cobertura
            </span>

            <h2 className="mt-4 pb-2 font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-[#35f4fe] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              <SplitTextReveal
                text="Presentes en las rutas que"
                by="word"
                step={80}
              />{' '}
              <SplitTextReveal
                text="conectan al Paraguay."
                by="word"
                step={80}
                delay={500}
                unitClassName="text-[#0A1F3D]"
              />
            </h2>

            {/* Barra de acento negra que crece */}
            <div className="mt-5 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-[#0A1F3D] to-transparent accent-bar" />

            <Reveal direction="left-clean" delay={200}>
              <p className="mt-6 text-lg text-[#0A1F3D]/80">
                Operamos en las principales arterias del país — desde el sur
                hasta la frontera norte — con ubicaciones estratégicas en
                accesos y centros urbanos.
              </p>
            </Reveal>
            <div className="mt-10 flex items-center gap-3">
              <span className="font-display text-base font-bold uppercase tracking-[0.22em] text-[#0A1F3D]">
                Mirá dónde estamos
              </span>
              <span aria-hidden className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-[#0A1F3D]/60 to-transparent" />
              <svg
                className="animate-nudge-right text-[#0A1F3D]"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </div>

            <div className="mt-4 grid max-w-md grid-cols-4 gap-2">
              {rutas.map((r) => {
                const slug = r.toLowerCase().replace(/\s+/g, '-')
                return (
                  <a
                    key={r}
                    href={`/galeria?ruta=${slug}`}
                    className="rounded-full border border-[#35f4fe] bg-[#35f4fe] px-4 py-2 text-center text-sm font-semibold text-white"
                  >
                    {r}
                  </a>
                )
              })}
            </div>
          </div>

          <Reveal delay={80} direction="fade">
            <div className="flex justify-center lg:justify-end">
              <CoberturaMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
