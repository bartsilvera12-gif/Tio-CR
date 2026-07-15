'use client'

/** Flechitas prev/next (solo mobile) que scrollean un track por id.
    Sin wrappers: no toca el layout existente. */
export default function CarouselArrows({ targetId }: { targetId: string }) {
  const move = (dir: 1 | -1) => {
    const el = document.getElementById(targetId)
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.82, behavior: 'smooth' })
  }

  return (
    <div className="mb-3 flex items-center justify-end gap-2 sm:hidden">
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Anterior"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition active:scale-90"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 6l-6 6 6 6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Siguiente"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-cyan/50 bg-brand-cyan/15 text-brand-cyan transition active:scale-90"
      >
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>
  )
}
