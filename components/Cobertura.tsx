import { rutas, ciudadesCobertura } from '@/lib/data'
import Reveal from './Reveal'

export default function Cobertura() {
  return (
    <section id="cobertura" className="section">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <span className="eyebrow">Cobertura</span>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">
              Presentes en las rutas que conectan al Paraguay.
            </h2>
            <p className="mt-5 text-lg text-brand-ink/70">
              Operamos en las principales arterias del país — desde el sur hasta
              la frontera norte — con ubicaciones estratégicas en accesos y
              centros urbanos.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {rutas.map((r, i) => (
                <span
                  key={r}
                  className="rounded-full border border-brand-ink/15 bg-white px-4 py-2 text-sm font-semibold text-brand-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:text-brand-cyanDark"
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
                <div className="group h-full cursor-default rounded-xl border border-brand-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-[0_16px_36px_-16px_rgba(0,201,247,0.4)]">
                  <div className="h-display text-lg transition-colors group-hover:text-brand-cyanDark">
                    {c.nombre}
                  </div>
                  <div className="mt-1 text-sm text-brand-ink/60">
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
