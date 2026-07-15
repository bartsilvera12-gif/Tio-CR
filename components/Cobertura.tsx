import { rutas } from '@/lib/data'
import Reveal from './Reveal'
import CoberturaMap from './CoberturaMap'
import SplitTextReveal from './SplitTextReveal'

export default function Cobertura() {
  return (
    <section
      id="cobertura"
      className="section relative overflow-hidden text-white"
      style={{ backgroundColor: '#888E9E' }}
    >
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1F3D]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#0A1F3D]" />
              Cobertura
            </span>

            <h2 className="mt-4 pb-2 font-display text-[2rem] font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
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
              <p className="mt-6 text-lg text-white/85">
                Operamos en las principales arterias del país — desde el sur
                hasta la frontera norte — con ubicaciones estratégicas en
                accesos y centros urbanos.
              </p>
            </Reveal>
            <div className="mt-8 flex flex-wrap gap-2">
              {rutas.map((r, i) => {
                const slug = r.toLowerCase().replace(/\s+/g, '-')
                return (
                  <a
                    key={r}
                    href={`/galeria?ruta=${slug}`}
                    className="rounded-full border border-brand-cyan bg-brand-cyan/10 px-4 py-2 text-sm font-semibold text-brand-cyan"
                  >
                    {r}
                  </a>
                )
              })}
            </div>

            <div className="relative mt-8">
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { n: '22', label: 'Carteles' },
                  { n: '9', label: 'Deptos.' },
                  { n: '8', label: 'Rutas PY' },
                  { n: '12×6', label: 'Metros' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="stat-card glass group rounded-xl px-3 py-4 text-center transition-all duration-300 hover:!border-brand-cyan hover:!bg-white/10 hover:shadow-[0_12px_36px_-12px_rgba(10,31,61,0.5)]"
                  >
                    <div className="stat-number font-display text-3xl font-bold text-[#0A1F3D] transition-transform duration-500 group-hover:scale-110">
                      {s.n}
                    </div>
                    <div className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-white/75 transition-colors group-hover:text-white/95">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
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
