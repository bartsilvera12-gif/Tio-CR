'use client'


import { useState } from 'react'
import { contacto } from '@/lib/data'
import Reveal from './Reveal'
import { SpotlightCard } from './ui/spotlight-card'
import GlowBlob from './GlowBlob'
import SplitTextReveal from './SplitTextReveal'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    contacto: '',
    mensaje: '',
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hola TIO CR, soy ${form.nombre}${
      form.empresa ? ` de ${form.empresa}` : ''
    }. ${form.mensaje}. Mis datos: ${form.contacto}.`
    window.open(
      `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  const items = [
    {
      href: `https://wa.me/${contacto.whatsapp}`,
      external: true,
      label: 'WhatsApp 1',
      value: contacto.whatsappDisplay,
      color: 'wa' as const,
    },
    {
      href: `https://wa.me/${contacto.whatsapp2}`,
      external: true,
      label: 'WhatsApp 2',
      value: contacto.whatsapp2Display,
      color: 'wa' as const,
    },
    {
      href: `tel:${contacto.phone}`,
      external: false,
      label: 'Línea fija',
      value: contacto.phoneDisplay,
      color: 'cyan' as const,
      icon: 'phone' as const,
    },
    {
      href: `mailto:${contacto.email}`,
      external: false,
      label: 'Email',
      value: contacto.email,
      color: 'cyan' as const,
      icon: 'mail' as const,
    },
  ]

  return (
    <section id="contacto" className="section relative overflow-hidden bg-brand-navyDeep text-white">
      {/* Fade desde la sección Propuesta */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-24 bg-gradient-to-b from-brand-navyDeep to-transparent" />
      <GlowBlob
        className="left-[32%] top-[25%] h-[340px] w-[520px]"
        opacity={0.1}
        rotate={-8}
        radius="55% 45% 60% 40% / 48% 62% 38% 52%"
        animated
        speed="slow"
      />
      <GlowBlob
        className="right-[-5%] bottom-[10%] h-[300px] w-[400px]"
        opacity={0.09}
        rotate={22}
        radius="60% 40% 48% 52% / 45% 58% 42% 55%"
      />

      <div className="container relative">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          {/* ---- Columna izquierda ---- */}
          <div>
            <span className="eyebrow inline-block opacity-0 animate-[letterIn_0.6s_cubic-bezier(0.22,1,0.36,1)_forwards]">
              Contacto
            </span>

            <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-brand-cyan md:text-7xl">
              <SplitTextReveal text="Contacto" step={55} />
            </h2>

            <div className="mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-brand-cyan to-transparent accent-bar" />

            <Reveal direction="left" delay={200}>
              <p className="mt-6 max-w-md text-lg text-white/70">
                Contanos qué tenés en mente. Te respondemos con propuesta y
                disponibilidad en menos de{' '}
                <strong className="text-white">24 horas hábiles</strong>.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {items.map((item, i) => (
                <Reveal
                  key={i}
                  direction="left"
                  delay={280 + i * 130}
                >
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="glass group flex flex-col items-start gap-3 rounded-2xl p-4 transition-all duration-300 hover:-translate-y-0.5 hover:!border-brand-cyan/50 hover:!bg-white/[0.09] hover:shadow-[0_16px_36px_-16px_rgba(0,201,247,0.4)] lg:flex-row lg:items-center lg:gap-4 lg:p-5"
                  >
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
                        item.color === 'wa'
                          ? 'bg-[#25D366]'
                          : 'bg-brand-cyan/15 text-brand-cyan'
                      }`}
                    >
                      {item.color === 'wa' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      ) : item.icon === 'phone' ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.35 1.79.66 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.23a2 2 0 0 1 2.11-.45c.86.3 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M3 7l9 6 9-6" />
                        </svg>
                      )}
                    </div>
                    <div className="w-full min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        {item.label}
                      </div>
                      <div className="w-full min-w-0 break-words text-sm font-semibold text-white lg:text-base">{item.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ---- Columna derecha: formulario ---- */}
          <Reveal direction="right" delay={100} as="div">
            <SpotlightCard glowColor="blue" glowSize={300} className="h-full rounded-3xl">
              <form onSubmit={submit} className="glass flex h-full flex-col rounded-3xl p-8 md:p-10">
              <Reveal direction="below" delay={200}>
                <div className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
                  Escribinos
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-white md:text-3xl">
                  Llevemos tu marca a la ruta.
                </h3>
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Reveal direction="below" delay={320}>
                  <Field
                    label="Nombre"
                    value={form.nombre}
                    onChange={(v) => setForm({ ...form, nombre: v })}
                    required
                  />
                </Reveal>
                <Reveal direction="below" delay={400}>
                  <Field
                    label="Empresa"
                    value={form.empresa}
                    onChange={(v) => setForm({ ...form, empresa: v })}
                  />
                </Reveal>
              </div>

              <Reveal direction="below" delay={480} className="mt-4">
                <Field
                  label="Email o teléfono"
                  value={form.contacto}
                  onChange={(v) => setForm({ ...form, contacto: v })}
                  required
                />
              </Reveal>

              <Reveal direction="below" delay={560} className="mt-4">
                <label className="block text-xs font-semibold uppercase tracking-widest text-white/60">
                  Mensaje
                </label>
                <textarea
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-brand-cyan focus:bg-white/10"
                  placeholder="Contanos qué campaña querés hacer..."
                />
              </Reveal>

              <Reveal direction="below" delay={640}>
                <button
                type="submit"
                className="btn-cta w-full justify-center uppercase tracking-widest"
              >
                <span>Enviar por WhatsApp</span>
                <svg className="cta-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
                <p className="mt-3 text-center text-xs text-white/50">
                  Al enviar, abrimos WhatsApp con tu mensaje pre-armado.
                </p>
              </Reveal>
              </form>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  value,
  onChange,
  required,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-white/60">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-brand-cyan focus:bg-white/10"
      />
    </div>
  )
}