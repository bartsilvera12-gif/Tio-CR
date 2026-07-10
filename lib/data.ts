export const servicios = [
  {
    titulo: 'Cartelería de ruta',
    descripcion:
      'Carteles gigantes en los principales accesos y cruces de las rutas nacionales del Paraguay.',
    icono: 'ruta',
  },
  {
    titulo: 'Pantallas LED',
    descripcion:
      'Pantallas de alta resolución para campañas dinámicas en ciudades del interior.',
    icono: 'led',
  },
  {
    titulo: 'Gigantografías',
    descripcion:
      'Impresión y montaje de lonas de gran formato con estructura y logística incluidas.',
    icono: 'lona',
  },
  {
    titulo: 'Ploteado de buses',
    descripcion:
      'Wrap publicitario en flotas de transporte urbano e interdepartamental.',
    icono: 'bus',
  },
  {
    titulo: 'Campañas en el interior',
    descripcion:
      'Planificación integral de campañas en las ciudades más transitadas del país.',
    icono: 'campana',
  },
] as const

export const rutas = ['PY 01', 'PY 02', 'PY 03', 'PY 05', 'PY 06', 'PY 07']

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
