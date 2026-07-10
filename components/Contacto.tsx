'use client'

import { useState } from 'react'
import { contacto } from '@/lib/data'
import Reveal from './Reveal'

export default function Contacto() {
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    contacto: '',
    mensaje: '',
  })

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const msg = `Hola Tíos R, soy ${form.nombre}${
      form.empresa ? ` de ${form.empresa}` : ''
    }. ${form.mensaje}. Mis datos: ${form.contacto}.`
    window.open(
      `https://wa.me/${contacto.whatsapp}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <span className="eyebrow">Contacto</span>
            <h2 className="h-display mt-4 text-4xl md:text-5xl">
              Llevemos tu marca a la ruta.
            </h2>
            <p className="mt-5 text-lg text-brand-ink/70">
              Contanos qué tenés en mente. Te respondemos con propuesta y
              disponibilidad en menos de 24 horas hábiles.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={`https://wa.me/${contacto.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-ink/50">
                    WhatsApp
                  </div>
                  <div className="font-semibold text-brand-ink">
                    {contacto.whatsappDisplay}
                  </div>
                </div>
              </a>

              <a
                href={`https://wa.me/${contacto.whatsapp2}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.5 3.5A11.9 11.9 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.5 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8s9.8 4.4 9.8 9.8-4.4 9.8-9.8 9.8z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-ink/50">
                    WhatsApp
                  </div>
                  <div className="font-semibold text-brand-ink">
                    {contacto.whatsapp2Display}
                  </div>
                </div>
              </a>

              <a
                href={`tel:${contacto.phone}`}
                className="group flex items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyanDark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.9.35 1.79.66 2.65a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.43-1.23a2 2 0 0 1 2.11-.45c.86.3 1.75.53 2.65.65A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-ink/50">
                    Línea fija
                  </div>
                  <div className="font-semibold text-brand-ink">
                    {contacto.phoneDisplay}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${contacto.email}`}
                className="group flex items-center gap-4 rounded-2xl border border-brand-ink/10 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-cyan hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan/10 text-brand-cyanDark">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-widest text-brand-ink/50">
                    Email
                  </div>
                  <div className="font-semibold text-brand-ink">
                    {contacto.email}
                  </div>
                </div>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} as="div">
          <form
            onSubmit={submit}
            className="rounded-3xl border border-brand-ink/10 bg-brand-soft p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                label="Nombre"
                value={form.nombre}
                onChange={(v) => setForm({ ...form, nombre: v })}
                required
              />
              <Field
                label="Empresa"
                value={form.empresa}
                onChange={(v) => setForm({ ...form, empresa: v })}
              />
            </div>
            <div className="mt-4">
              <Field
                label="Email o teléfono"
                value={form.contacto}
                onChange={(v) => setForm({ ...form, contacto: v })}
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-widest text-brand-ink/60">
                Mensaje
              </label>
              <textarea
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-brand-ink/10 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-cyan"
                placeholder="Contanos qué campaña querés hacer..."
              />
            </div>
            <button type="submit" className="btn-cyan mt-6 w-full justify-center">
              Enviar por WhatsApp →
            </button>
            <p className="mt-3 text-center text-xs text-brand-ink/50">
              Al enviar, abrimos WhatsApp con tu mensaje pre-armado.
            </p>
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
      <label className="block text-xs font-semibold uppercase tracking-widest text-brand-ink/60">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="mt-2 w-full rounded-xl border border-brand-ink/10 bg-white px-4 py-3 text-brand-ink outline-none transition focus:border-brand-cyan"
      />
    </div>
  )
}
