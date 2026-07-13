import { rutas } from '@/lib/data'
import Reveal from './Reveal'
import GlowBlob from './GlowBlob'
import CoberturaMap from './CoberturaMap'

export default function Cobertura() {
  return (
    <section id="cobertura" className="section relative overflow-hidden bg-brand-navyDeep text-white">
      <GlowBlob
        className="left-[2%] bottom-[30%] h-[400px] w-[520px]"
        opacity={0.09}
        rotate={-24}
        radius="62% 38% 50% 50% / 42% 58% 45% 55%"
      />
      <div className="container relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">Cobertura</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-white md:text-5xl">
              Presentes en las rutas que conectan al Paraguay.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Operamos en las principales arterias del país — desde el sur hasta
              la frontera norte — con ubicaciones estratégicas en accesos y
              centros urbanos.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {rutas.map((r, i) => (
                <span
                  key={r}
                  className="glass rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:!border-brand-cyan hover:!bg-brand-cyan/10 hover:text-brand-cyan"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {r}
                </span>
              ))}
            </div>

            <div className="relative mt-8">
              {/* Blob lento detrás de los stats: se ve el vidrio "cambiar de color" */}
              <GlowBlob
                className="left-[-8%] top-[-30%] h-[280px] w-[520px]"
                opacity={0.28}
                radius="52% 48% 62% 38% / 45% 58% 42% 55%"
                animated
                speed="slow"
              />
              <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { n: '22', label: 'Carteles' },
                  { n: '9', label: 'Deptos.' },
                  { n: '8', label: 'Rutas PY' },
                  { n: '12×6', label: 'Metros' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="stat-card glass group rounded-xl px-3 py-4 text-center transition-all duration-300 hover:!border-brand-cyan hover:!bg-white/10 hover:shadow-[0_12px_36px_-12px_rgba(0,201,247,0.5)]"
                  >
                    <div className="stat-number font-display text-3xl font-bold text-brand-cyan transition-transform duration-500 group-hover:scale-110">
                      {s.n}
                    </div>
                    <div className="mt-1 whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-white/60 transition-colors group-hover:text-white/90">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="flex justify-center lg:justify-end">
              <CoberturaMap />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
