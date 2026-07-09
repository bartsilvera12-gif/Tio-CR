import { contacto } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-2xl font-bold">
              TIO<span className="text-brand-cyan">CR</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Marketing y servicios publicitarios. Presencia en rutas y ciudades
              del interior del Paraguay.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Servicios
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Cartelería de ruta</li>
              <li>Pantallas LED</li>
              <li>Gigantografías</li>
              <li>Ploteado de buses</li>
              <li>Campañas en el interior</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
              Contacto
            </div>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>WhatsApp: +595 981 234 567</li>
              <li>{contacto.email}</li>
              <li>Paraguay · Cobertura nacional</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/40">
          Cobertura: Coronel Oviedo · Ciudad del Este · Encarnación · Pedro Juan
          Caballero · Salto del Guairá · Caacupé · Quiindy · Villa Florida ·
          Corpus Christi.
          <div className="mt-2">
            © {new Date().getFullYear()} TIOCR — Marketing y Servicios
            Publicitarios.
          </div>
        </div>
      </div>
    </footer>
  )
}
