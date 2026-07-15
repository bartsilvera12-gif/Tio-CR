export const servicios = [
  {
    titulo: 'Cartelería de ruta',
    descripcion:
      'Carteles gigantes en accesos y cruces de las rutas del país.',
    icono: 'ruta',
    detalles: ['Formatos hasta 12×6 m', 'Doble faz disponible', 'Impresión de lona incluida'],
  },
  {
    titulo: 'Pantallas LED',
    descripcion:
      'Alta resolución para campañas dinámicas en el interior.',
    icono: 'led',
    detalles: ['Alta luminosidad día y noche', 'Contenido dinámico', 'Ubicaciones céntricas'],
  },
  {
    titulo: 'Ploteado de buses',
    descripcion:
      'Tu marca sobre buses del interior — publicidad rodante.',
    icono: 'bus',
    detalles: ['Ploteado full o parcial', 'Alta rotación diaria', 'Cobertura urbana móvil'],
  },
  {
    titulo: 'Refugios de buses',
    descripcion:
      'Paneles retro-iluminados en paradas de alta afluencia.',
    icono: 'refugio',
    detalles: ['Retro-iluminados día y noche', 'Avenidas y accesos urbanos', 'Formato exclusivo en su espacio'],
  },
] as const

export const rutas = ['PY 01', 'PY 02', 'PY 03', 'PY 05', 'PY 06', 'PY 07', 'PY 08', 'PY 11']

export const ciudadesCobertura = [
  { nombre: 'Coronel Oviedo', departamento: 'Caaguazú', ruta: 'PY 02' },
  { nombre: 'Ciudad del Este', departamento: 'Alto Paraná', ruta: 'PY 07' },
  { nombre: 'Encarnación', departamento: 'Itapúa', ruta: 'PY 06' },
  { nombre: 'Pedro Juan Caballero', departamento: 'Amambay', ruta: 'PY 05' },
  { nombre: 'Salto del Guairá', departamento: 'Canindeyú', ruta: 'PY 03' },
  { nombre: 'Caacupé', departamento: 'Cordillera', ruta: 'PY 02' },
  { nombre: 'Quiindy', departamento: 'Paraguarí', ruta: 'PY 01' },
  { nombre: 'Villa Florida', departamento: 'Misiones', ruta: 'PY 01' },
  { nombre: 'Corpus Christi', departamento: 'Canindeyú', ruta: 'PY 03' },
]

export const galeria = [
  { titulo: 'Cartel de ruta', categoria: 'Cartelería' },
  { titulo: 'Bus ploteado', categoria: 'Buses' },
  { titulo: 'Pantalla LED', categoria: 'LED' },
  { titulo: 'Gigantografía', categoria: 'Lonas' },
  { titulo: 'Acceso ciudad', categoria: 'Cartelería' },
  { titulo: 'Campaña interior', categoria: 'Campañas' },
]

export const contacto = {
  whatsapp: '595991888888',
  whatsappDisplay: '+595 991 888 888',
  whatsapp2: '595971201799',
  whatsapp2Display: '+595 971 201 799',
  phone: '021205568',
  phoneDisplay: '021 205 568',
  email: 'carlosraulpy@gmail.com',
}