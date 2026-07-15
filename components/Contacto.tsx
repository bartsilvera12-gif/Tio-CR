'use client'


import { useState } from 'react'
import { contacto } from '@/lib/data'
import Reveal from './Reveal'
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

            <div className="mt-10 space-y-3">
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
                    className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:!border-brand-cyan/50 hover:!bg-white/[0.09] hover:shadow-[0_16px_36px_-16px_rgba(10,31,61,0.4)]"
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
                          <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z" />
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
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-white/50">
                        {item.label}
                      </div>
                      <div className="font-semibold text-white">{item.value}</div>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ---- Columna derecha: formulario ---- */}
          <Reveal direction="right" delay={100} as="div">
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
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-brand-cyan focus:bg-white/10"
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