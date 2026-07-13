'use client'

export type Condicion = {
  title: string
  body: string | null
}

/** Marquee vertical: las condiciones se desplazan de abajo hacia arriba en loop infinito.
    Se pausa al hover. Fade masks arriba/abajo. */
export default function CondicionesCarousel({
  items,
  theme = 'dark',
}: {
  items: Condicion[]
  theme?: 'dark' | 'light'
}) {
  const track = [...items, ...items]
  const isLight = theme === 'light'

  return (
    <div
      className="condiciones-marquee relative overflow-hidden"
      style={{
        height: 340,
        maskImage:
          'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)',
      }}
    >
      <ul className="condiciones-track flex flex-col gap-4">
        {track.map((c, i) => (
          <li
            key={i}
            className="flex items-start gap-4 rounded-2xl px-5 py-4 transition-all duration-300"
            style={{
              background: isLight
                ? 'rgba(0, 201, 247, 0.06)'
                : 'rgba(255,255,255,0.03)',
              border: isLight
                ? '1px solid rgba(0, 201, 247, 0.18)'
                : '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <span
              className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  'linear-gradient(160deg, rgba(0,229,255,0.28), rgba(0,201,247,0.1))',
                border: '1px solid rgba(0,229,255,0.5)',
                boxShadow: '0 0 18px rgba(0,201,247,0.3)',
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00A8D1"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12l5 5L20 7" />
              </svg>
            </span>
            <p
              className={`text-[15px] leading-relaxed ${
                isLight ? 'text-brand-ink/85' : 'text-white/85'
              }`}
            >
              <strong
                className={`font-bold ${
                  isLight ? 'text-brand-ink' : 'text-white'
                }`}
              >
                {c.title}
              </strong>
              {c.body ? (
                <span
                  className={isLight ? 'text-brand-ink/65' : 'text-white/70'}
                >
                  {' '}
                  {c.body}
                </span>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
