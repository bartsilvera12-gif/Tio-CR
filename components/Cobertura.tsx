import { rutas, ciudadesCobertura } from '@/lib/data'
import Reveal from './Reveal'

export default function Cobertura() {
  return (
    <section id="cobertura" className="section bg-brand-navyDeep text-white">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
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
                  className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {r}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ciudadesCobertura.map((c, i) => (
              <Reveal key={c.nombre} delay={i * 60}>
                <div className="group h-full cursor-default rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/50 hover:bg-white/[0.08] hover:shadow-[0_16px_36px_-16px_rgba(0,201,247,0.5)]">
                  <div className="font-display text-lg font-bold text-white transition-colors group-hover:text-brand-cyan">
                    {c.nombre}
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    {c.departamento} · {c.ruta}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
