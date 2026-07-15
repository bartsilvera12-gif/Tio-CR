import Reveal from './Reveal'
import GlowBlob from './GlowBlob'

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-black py-16 text-white md:py-32">
      {/* Fade desde el negro del hero */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black to-transparent" />
      {/* Blobs cian difuminados en el fondo */}
      <GlowBlob className="left-[5%] top-[28%] h-[420px] w-[560px]" opacity={0.16} />
      <GlowBlob
        className="right-[2%] top-[30%] h-[320px] w-[420px]"
        opacity={0.09}
        rotate={22}
        radius="42% 58% 38% 62% / 60% 42% 58% 40%"
      />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="cinematic">
            <div className="flex justify-center lg:justify-start">
              <Billboard />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="eyebrow">
              <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-brand-cyan align-middle" />
              Nuestra propuesta
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.5rem]">
              <span className="intro-title-cyan bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-cyan bg-clip-text text-transparent">
                Cartelería gigante
              </span>
              <br />
              <span className="intro-title-white">
                y publicidad exterior en rutas e interior del Paraguay.
              </span>
            </h2>
            <div className="intro-accent-bar mt-6" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 intro-body">
              Llevamos tu marca más lejos. Impacto masivo, presencia estratégica
              y visibilidad real donde tu público está.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contacto"
                className="btn-idle-glow group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand-cyan px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-brand-navyDeep transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_-8px_rgba(0,201,247,0.65)] active:scale-95"
              >
                <span className="relative z-10">Solicitar presupuesto</span>
                <svg
                  className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[150%] skew-x-[-18deg] bg-white/40 transition-transform duration-700 group-hover:translate-x-[350%]" />
              </a>

              <a
                href="#cobertura"
                className="btn-idle-border group inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan active:scale-95"
              >
                <svg
                  className="transition-transform duration-300 group-hover:scale-110"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Ver cobertura
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/** Cartel publicitario 3D estático — el logo como pantalla, sin animaciones */
function Billboard() {
  // 4 posiciones (0-100%) para los reflectores
  const spots = [17, 39, 61, 83]

  return (
    <div
      className="relative w-full max-w-[600px]"
      style={{ perspective: '1400px' }}
    >
      {/* Halo cian muy sutil */}
      <div className="pointer-events-none absolute -inset-16 -z-10 bg-[radial-gradient(circle,rgba(0,201,247,0.1),transparent_70%)] blur-3xl" />

      {/* Estructura vertical con perspectiva 3D (estática) */}
      <div
        className="relative"
        style={{
          transform: 'rotateY(8deg) rotateX(3deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* ---- Reflectores ---- */}
        <div className="relative z-20 -mb-[6px] h-[38px]">
          {spots.map((left, i) => (
            <div
              key={i}
              className="absolute bottom-0 -translate-x-1/2"
              style={{ left: `${left}%` }}
            >
              {/* Cabeza del reflector */}
              <div className="relative z-10 h-[11px] w-[44px] rounded-[2px] bg-gradient-to-b from-slate-400 via-slate-700 to-slate-900 shadow-[0_3px_8px_rgba(0,0,0,0.7)]">
                <div className="absolute inset-x-1 bottom-[1px] h-[3px] rounded-sm bg-sky-100/70" />
              </div>
              {/* Brazo */}
              <div className="mx-auto h-[22px] w-[4px] bg-gradient-to-b from-slate-400 to-slate-700" />
            </div>
          ))}
        </div>

        {/* ---- Pantalla con marco ---- */}
        <div className="relative aspect-[16/9]">
          {/* Sombra atrás del bezel */}
          <div className="absolute -inset-2 rounded-[10px] bg-black/40 blur-lg" />

          {/* Bezel */}
          <div
            className="relative h-full w-full overflow-hidden rounded-[8px] p-[10px]"
            style={{
              background:
                'linear-gradient(150deg, #66788E 0%, #9FACBD 16%, #46556B 42%, #93A1B2 68%, #3C4A5E 100%)',
              border: '1px solid rgba(255,255,255,0.3)',
              boxShadow:
                '0 20px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.45)',
            }}
          >
            {/* Esquineros tipo HUD en el bezel */}
            {[
              'left-1 top-1 border-l-2 border-t-2',
              'right-1 top-1 border-r-2 border-t-2',
              'left-1 bottom-1 border-l-2 border-b-2',
              'right-1 bottom-1 border-r-2 border-b-2',
            ].map((pos) => (
              <div
                key={pos}
                className={`pointer-events-none absolute z-10 h-3.5 w-3.5 border-brand-cyan/70 ${pos}`}
              />
            ))}

            {/* LED de estado */}
            <div className="pointer-events-none absolute right-3 top-[3px] z-10 h-[4px] w-[4px] animate-pulse rounded-full bg-brand-cyan shadow-[0_0_6px_rgba(0,201,247,0.9)]" />

            {/* Pantalla: frame del video institucional (captura estática —
                mismo look que el video en pausa, cero costo de decode) */}
            <div
              className="relative h-full w-full overflow-hidden rounded-[5px] bg-[#050e1f]"
              style={{
                boxShadow:
                  'inset 0 0 0 1px rgba(0,201,247,0.35), inset 0 0 18px rgba(0,201,247,0.12)',
              }}
            >
              {/* Fondo de pantalla oscuro con viñeta */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 42%, #10233C 0%, #081222 62%, #04080F 100%)',
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo-hero.webp"
                alt="TIO CR — Marketing y Servicios Publicitarios"
                className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2"
                loading="lazy"
                decoding="async"
              />
              {/* Scanlines LED sutiles */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.1]"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, rgba(0,0,0,0.55) 0px, rgba(0,0,0,0.55) 1px, transparent 1px, transparent 4px)',
                }}
              />
              {/* Tinte cian LED sutil */}
              <div className="pointer-events-none absolute inset-0 bg-brand-cyan/[0.03]" />
            </div>

            {/* Tira LED inferior del bezel */}
            <div className="pointer-events-none absolute inset-x-6 bottom-[3px] z-10 h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-cyan/80 to-transparent shadow-[0_0_8px_rgba(0,201,247,0.6)]" />
          </div>
        </div>

        {/* ---- Mástil tecnológico: columna segmentada + tira LED ---- */}
        <div className="relative mx-auto h-[56px] w-[18px] md:h-[100px] md:w-[22px]">
          {/* Columna metálica con seams horizontales */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #2A3648 0%, #5D6E84 38%, #A7B4C4 50%, #5D6E84 62%, #2A3648 100%), repeating-linear-gradient(180deg, transparent 0px, transparent 14px, rgba(0,0,0,0.45) 14px, rgba(0,0,0,0.45) 16px)',
              backgroundBlendMode: 'overlay',
              clipPath: 'polygon(15% 0, 85% 0, 100% 100%, 0 100%)',
              boxShadow: '0 2px 10px rgba(0,0,0,0.5)',
            }}
          />
          {/* Tira LED central del mástil */}
          <div className="absolute left-1/2 top-[12%] h-[76%] w-[2px] -translate-x-1/2 rounded-full bg-gradient-to-b from-brand-cyan/80 via-brand-cyan/30 to-transparent shadow-[0_0_6px_rgba(0,201,247,0.55)]" />
          {/* Caja de conexión */}
          <div className="absolute left-1/2 top-[38%] hidden h-[14px] w-[10px] -translate-x-1/2 rounded-[2px] border border-white/15 bg-slate-800 md:block" />
        </div>

        {/* ---- Base tecnológica: placa angular con bulones y filete LED ---- */}
        <div className="relative mx-auto hidden h-[40px] w-[240px] md:block">
          {/* Sombra en el piso */}
          <div className="absolute inset-x-[10%] top-[18px] h-[16px] rounded-[50%] bg-black/50 blur-md" />
          {/* Placa superior (trapecio) */}
          <div
            className="absolute inset-x-[22%] top-0 h-[10px]"
            style={{
              background: 'linear-gradient(180deg, #8B99AB 0%, #35404F 100%)',
              clipPath: 'polygon(8% 0, 92% 0, 100% 100%, 0 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
            }}
          />
          {/* Placa inferior (trapecio más ancho) */}
          <div
            className="absolute inset-x-[10%] top-[9px] h-[12px]"
            style={{
              background: 'linear-gradient(180deg, #6B7A8D 0%, #1C2530 100%)',
              clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0 100%)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.18)',
            }}
          />
          {/* Filete LED en el borde de la placa inferior */}
          <div className="absolute inset-x-[16%] top-[20px] h-[2px] rounded-full bg-gradient-to-r from-transparent via-brand-cyan/70 to-transparent shadow-[0_0_8px_rgba(0,201,247,0.5)]" />
          {/* Bulones */}
          <div className="absolute left-[16%] top-[13px] h-[4px] w-[4px] rounded-[1px] bg-slate-400/70" />
          <div className="absolute right-[16%] top-[13px] h-[4px] w-[4px] rounded-[1px] bg-slate-400/70" />
        </div>
      </div>
    </div>
  )
}
