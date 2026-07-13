import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { contacto } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Política de Privacidad — Tíos R',
  description:
    'Cómo Tíos R recopila, utiliza, almacena y protege los datos personales de quienes visitan y contactan a través de este sitio.',
}

const secciones: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Datos personales que recopilamos',
    body: (
      <>
        <p>
          Podemos recopilar los siguientes datos, siempre que vos los
          proporciones de forma voluntaria o se generen por el uso del sitio:
        </p>
        <ul>
          <li>
            <strong>Datos de contacto:</strong> nombre, correo electrónico,
            número de teléfono y el contenido del mensaje que nos envíes a
            través de los formularios o canales de contacto (incluido
            WhatsApp).
          </li>
          <li>
            <strong>Datos de navegación:</strong> dirección IP, tipo de
            dispositivo y navegador, páginas visitadas y datos estadísticos de
            uso, recopilados mediante cookies o tecnologías similares.
          </li>
        </ul>
        <p>
          No recopilamos categorías especiales de datos sensibles ni solicitamos
          información que no sea necesaria para responder tu consulta o prestar
          nuestros servicios.
        </p>
      </>
    ),
  },
  {
    title: 'Finalidad del tratamiento',
    body: (
      <>
        <p>Los datos se utilizan únicamente para:</p>
        <ul>
          <li>
            Responder consultas, presupuestos y solicitudes de información
            sobre nuestros servicios de publicidad exterior.
          </li>
          <li>
            Gestionar la relación comercial y dar seguimiento a campañas o
            contrataciones.
          </li>
          <li>
            Mejorar el funcionamiento, la seguridad y la experiencia del sitio
            web.
          </li>
          <li>
            Enviar comunicaciones relacionadas con el servicio, cuando
            corresponda y exista una base válida para ello.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Base legal y consentimiento',
    body: (
      <p>
        El tratamiento de tus datos se realiza sobre la base de tu{' '}
        <strong>consentimiento</strong>, otorgado al completar un formulario o
        iniciar una conversación con nosotros, y/o en el marco de la relación
        contractual o precontractual entre las partes. Podés retirar tu
        consentimiento en cualquier momento, sin que ello afecte la licitud del
        tratamiento previo.
      </p>
    ),
  },
  {
    title: 'Conservación de los datos',
    body: (
      <p>
        Conservamos tus datos personales solo durante el tiempo necesario para
        cumplir las finalidades descritas, atender obligaciones legales o
        contractuales, y resolver eventuales reclamaciones. Una vez cumplidos
        esos fines, los datos se eliminan o anonimizan de forma segura.
      </p>
    ),
  },
  {
    title: 'Compartición con terceros',
    body: (
      <>
        <p>
          No vendemos ni cedemos tus datos personales a terceros con fines
          comerciales. Podemos compartirlos únicamente con:
        </p>
        <ul>
          <li>
            <strong>Proveedores de servicios</strong> que actúan por nuestra
            cuenta (hosting, mantenimiento técnico, herramientas de mensajería o
            analítica), sujetos a obligaciones de confidencialidad.
          </li>
          <li>
            <strong>Autoridades competentes,</strong> cuando exista una
            obligación legal de hacerlo.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: 'Proveedor tecnológico',
    body: (
      <div className="rounded-2xl border border-brand-cyan/30 bg-brand-cyan/[0.05] p-5">
        <p>
          Este sitio web fue desarrollado y es mantenido técnicamente por{' '}
          <strong>Neura</strong>, en su carácter de proveedor de servicios
          tecnológicos. Neura actúa exclusivamente como{' '}
          <strong>encargado del tratamiento por cuenta del Responsable</strong>{' '}
          y/o como proveedor técnico (desarrollo, alojamiento y mantenimiento
          del sitio). <strong>Neura no es titular ni propietario</strong> de los
          datos personales recopilados a través de este sitio y no los utiliza
          para fines propios. La decisión sobre las finalidades y el uso de los
          datos corresponde únicamente al Responsable indicado al inicio de esta
          política.
        </p>
      </div>
    ),
  },
  {
    title: 'Cookies y tecnologías de seguimiento',
    body: (
      <p>
        El sitio puede utilizar cookies y tecnologías similares para su correcto
        funcionamiento, recordar preferencias y obtener estadísticas anónimas de
        uso. Podés configurar tu navegador para bloquear o eliminar las cookies;
        ten en cuenta que algunas funciones del sitio podrían verse afectadas.
      </p>
    ),
  },
  {
    title: 'Derechos del titular de los datos',
    body: (
      <p>
        De acuerdo con la legislación vigente, como titular de los datos podés
        ejercer tus derechos de{' '}
        <strong>
          acceso, rectificación, actualización, cancelación (supresión) y
          oposición
        </strong>{' '}
        respecto de tus datos personales. Para ejercerlos, escribinos a{' '}
        <a
          href={`mailto:${contacto.email}`}
          className="text-brand-cyan underline underline-offset-4 hover:text-brand-cyanDark"
        >
          {contacto.email}
        </a>
        , indicando tu solicitud y acreditando tu identidad. Responderemos en un
        plazo razonable.
      </p>
    ),
  },
  {
    title: 'Seguridad de la información',
    body: (
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger tus
        datos frente a accesos no autorizados, pérdida, alteración o
        divulgación. No obstante, ninguna transmisión por Internet es
        completamente segura, por lo que no podemos garantizar una seguridad
        absoluta.
      </p>
    ),
  },
  {
    title: 'Enlaces a sitios de terceros',
    body: (
      <p>
        Este sitio puede contener enlaces a plataformas externas (por ejemplo,
        WhatsApp, Instagram, TikTok o Google Maps). No somos responsables de
        las prácticas de privacidad de esos terceros; te recomendamos revisar
        sus respectivas políticas.
      </p>
    ),
  },
  {
    title: 'Cambios en esta política',
    body: (
      <p>
        Podemos actualizar esta Política de Privacidad en cualquier momento. La
        versión vigente será siempre la publicada en esta página, con su fecha
        de última actualización. Te recomendamos revisarla periódicamente.
      </p>
    ),
  },
  {
    title: 'Contacto',
    body: (
      <p>
        Si tenés preguntas sobre esta política o sobre el tratamiento de tus
        datos, podés contactarnos en{' '}
        <a
          href={`mailto:${contacto.email}`}
          className="text-brand-cyan underline underline-offset-4 hover:text-brand-cyanDark"
        >
          {contacto.email}
        </a>{' '}
        o a los teléfonos indicados al inicio de esta página.
      </p>
    ),
  },
  {
    title: 'Marco legal aplicable',
    body: (
      <p>
        Esta política se rige por la legislación de la República del Paraguay
        en materia de protección de datos personales y privacidad, incluida la
        garantía constitucional de <em>habeas data</em> (Art. 135 de la
        Constitución Nacional) y las leyes vigentes que regulan el tratamiento
        de la información de carácter personal.
      </p>
    ),
  },
]

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-brand-navyDeep pt-32 pb-24 text-white md:pt-40 md:pb-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,201,247,0.12),transparent_60%)]" />

        <div className="container relative max-w-3xl">
          {/* Header */}
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
            Legal
          </div>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
            Política de Privacidad
          </h1>
          <p className="mt-3 text-sm text-white/50">
            Última actualización: 24 de junio de 2026
          </p>

          <div className="mt-8 h-[3px] w-24 origin-left rounded-full bg-gradient-to-r from-brand-cyan to-transparent" />

          {/* Intro */}
          <p className="mt-8 text-lg leading-relaxed text-white/70">
            Esta Política de Privacidad describe cómo se recopilan, utilizan,
            almacenan y protegen los datos personales de las personas que
            visitan o se contactan a través de este sitio web. El responsable
            del tratamiento de los datos es la empresa identificada a
            continuación.
          </p>

          {/* Responsable */}
          <section
            className="mt-10 rounded-3xl border border-white/10 p-6 md:p-8"
            style={{
              background:
                'linear-gradient(160deg, rgba(14,34,71,0.55) 0%, rgba(4,12,26,0.65) 100%)',
            }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-brand-cyan">
              Responsable del tratamiento de los datos
            </h2>
            <dl className="mt-5 grid gap-4 sm:grid-cols-[max-content_1fr]">
              <dt className="text-sm font-semibold text-white/60">Empresa</dt>
              <dd className="text-sm text-white">
                Tíos R — Marketing y Servicios Publicitarios (TIOCR)
              </dd>

              <dt className="text-sm font-semibold text-white/60">Correo</dt>
              <dd className="text-sm">
                <a
                  href={`mailto:${contacto.email}`}
                  className="text-brand-cyan underline underline-offset-4 hover:text-brand-cyanDark"
                >
                  {contacto.email}
                </a>
              </dd>

              <dt className="text-sm font-semibold text-white/60">Teléfonos</dt>
              <dd className="text-sm text-white">
                {contacto.phoneDisplay} · {contacto.whatsappDisplay} ·{' '}
                {contacto.whatsapp2Display}
              </dd>

              <dt className="text-sm font-semibold text-white/60">Sitio web</dt>
              <dd className="text-sm text-white">tio-cr.vercel.app</dd>
            </dl>
          </section>

          {/* Secciones */}
          <div className="mt-14 space-y-10">
            {secciones.map((s, i) => (
              <section key={s.title} className="prose-policy">
                <h2 className="font-display text-2xl font-bold text-white md:text-3xl">
                  <span className="mr-3 text-brand-cyan">
                    {String(i + 1).padStart(2, '0')}.
                  </span>
                  {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-white/75 leading-relaxed [&>ul]:mt-4 [&>ul]:space-y-3 [&>ul]:pl-6 [&>ul]:list-disc [&>ul>li]:marker:text-brand-cyan">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {/* Volver al inicio */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-brand-cyan transition hover:text-white"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Volver al inicio
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
