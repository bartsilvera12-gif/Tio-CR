/** Datos completos de los 22 carteles (extraídos del relevamiento del handoff) */
export type Cartel = {
  key: string
  city: string
  dept: string
  route: string
  ref: string
  type: string
  size: string
  coords: string
  map: string
}

export const carteles: Cartel[] = [
  {
    "key": "caacupe",
    "city": "Caacupé",
    "dept": "Central",
    "route": "RUTA PY 02",
    "ref": "Acceso a carril de subida · Cerro de Caacupé",
    "type": "Estático · doble faz",
    "size": "12 × 6 m",
    "coords": "-25.374350, -57.207278",
    "map": "https://www.google.com/maps?q=-25.374350,-57.207278"
  },
  {
    "key": "yaguaron",
    "city": "Yaguarón",
    "dept": "Paraguarí",
    "route": "RUTA PY 01",
    "ref": "Acceso al centro de Yaguarón",
    "type": "Cartel estático",
    "size": "12 × 6 m",
    "coords": "25°33'39.7\"S 57°17'23.1\"W",
    "map": "https://www.google.com/maps?q=-25.561028,-57.289750"
  },
  {
    "key": "quiindy",
    "city": "Quiindy",
    "dept": "Paraguarí",
    "route": "RUTA PY 01",
    "ref": "Circunvalación · acceso a Quiindy",
    "type": "Cartel estático",
    "size": "12 × 6 m",
    "coords": "-25.966303, -57.248442",
    "map": "https://www.google.com/maps?q=-25.966303,-57.248442"
  },
  {
    "key": "villaflorida",
    "city": "Villa Florida",
    "dept": "Misiones",
    "route": "RUTA PY 01",
    "ref": "Acceso al centro de Villa Florida",
    "type": "Cartel estático",
    "size": "12 × 6 m",
    "coords": "26°24'14.9\"S 57°07'47.8\"W",
    "map": "https://www.google.com/maps?q=-26.404139,-57.129944"
  },
  {
    "key": "pjc",
    "city": "Pedro Juan Caballero",
    "dept": "Amambay",
    "route": "RUTA PY 05",
    "ref": "Acceso portal · Expo Amambay",
    "type": "Cartel estático",
    "size": "12 × 6 m",
    "coords": "22°34'60.0\"S 55°45'26.6\"W",
    "map": "https://www.google.com/maps?q=-22.583333,-55.757389"
  },
  {
    "key": "corpus",
    "city": "Corpus Christi",
    "dept": "Canindeyú",
    "route": "RUTA PY 03",
    "ref": "Cruce PY 03 y rotonda acceso · Cruce Guaraní",
    "type": "Cartel estático",
    "size": "12 × 6 m",
    "coords": "24°15'46.0\"S 54°53'03.8\"W",
    "map": "https://www.google.com/maps?q=-24.262778,-54.884389"
  },
  {
    "key": "campo9",
    "city": "Campo 9",
    "dept": "Caaguazú",
    "route": "RUTA PY 02",
    "ref": "Acceso Colonia Sommerfeld · Dr. J. E. Estigarribia",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-25.405846, -55.616876",
    "map": "https://www.google.com/maps?q=-25.405846,-55.616876"
  },
  {
    "key": "yguazu",
    "city": "Yguazú",
    "dept": "Alto Paraná",
    "route": "RUTA PY 02",
    "ref": "Frente a Cetapar · Colonia Yguazú",
    "type": "Fijo · doble faz",
    "size": "10 × 4 m",
    "coords": "-25.453200, -55.041742",
    "map": "https://www.google.com/maps?q=-25.453200,-55.041742"
  },
  {
    "key": "tavapy",
    "city": "Tavapy",
    "dept": "Alto Paraná",
    "route": "RUTA PY 06",
    "ref": "Cerca a zona Santa Rita",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-25.696754, -55.017732",
    "map": "https://www.google.com/maps?q=-25.696754,-55.017732"
  },
  {
    "key": "sanalberto",
    "city": "San Alberto",
    "dept": "Alto Paraná",
    "route": "RUTA PY 07",
    "ref": "Zona cruce Itakyry · acceso San Alberto",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-24.998843, -54.949106",
    "map": "https://www.google.com/maps?q=-24.998843,-54.949106"
  },
  {
    "key": "katuete",
    "city": "Katueté",
    "dept": "Canindeyú",
    "route": "RUTA PY 03",
    "ref": "Zona Katueté · Cruce Guaraní",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-24.257824, -54.791412",
    "map": "https://www.google.com/maps?q=-24.257824,-54.791412"
  },
  {
    "key": "santarosa",
    "city": "Santa Rosa del Aguaray",
    "dept": "San Pedro",
    "route": "RUTA PY 08",
    "ref": "Acceso al centro de Santa Rosa",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-23.849980, -56.513380",
    "map": "https://www.google.com/maps?q=-23.849980,-56.513380"
  },
  {
    "key": "bellavista",
    "city": "Bella Vista Sur",
    "dept": "Itapúa",
    "route": "RUTA PY 06",
    "ref": "Zona urbana · Bella Vista Sur",
    "type": "Fijo · doble faz",
    "size": "8 × 3 m",
    "coords": "-27.011006, -55.581127",
    "map": "https://www.google.com/maps?q=-27.011006,-55.581127"
  },
  {
    "key": "naranjal",
    "city": "Cruce Naranjal",
    "dept": "Alto Paraná",
    "route": "RUTA PY 06",
    "ref": "Acceso a Cruce Naranjal · San Cristóbal",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-25.949537, -55.123449",
    "map": "https://www.google.com/maps?q=-25.949537,-55.123449"
  },
  {
    "key": "obligado",
    "city": "Obligado",
    "dept": "Itapúa",
    "route": "RUTA PY 06",
    "ref": "Acceso al centro",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-27.056432, -55.594671",
    "map": "https://www.google.com/maps?q=-27.056432,-55.594671"
  },
  {
    "key": "pirapo",
    "city": "Pirapó",
    "dept": "Itapúa",
    "route": "RUTA PY 06",
    "ref": "Acceso al cruce Pirapó",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-26.902303, -55.476393",
    "map": "https://www.google.com/maps?q=-26.902303,-55.476393"
  },
  {
    "key": "nuevaesperanza",
    "city": "Nueva Esperanza",
    "dept": "Canindeyú",
    "route": "RUTA PY 07",
    "ref": "Acceso al centro",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-24.533317, -54.847051",
    "map": "https://www.google.com/maps?q=-24.533317,-54.847051"
  },
  {
    "key": "itakyry",
    "city": "Cruce Itakyry",
    "dept": "Alto Paraná",
    "route": "RUTA PY 07",
    "ref": "Cruce Marangatú · La Fortuna · Cruce Itakyry",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-25.088435, -54.956315",
    "map": "https://www.google.com/maps?q=-25.088435,-54.956315"
  },
  {
    "key": "santafe",
    "city": "Santa Fe del Paraná",
    "dept": "Alto Paraná",
    "route": "RUTA PY 07",
    "ref": "Zona cruce Santa Fe",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-25.289819, -54.703505",
    "map": "https://www.google.com/maps?q=-25.289819,-54.703505"
  },
  {
    "key": "santarita",
    "city": "Santa Rita",
    "dept": "Alto Paraná",
    "route": "RUTA PY 06",
    "ref": "Acceso portal Santa Rita",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-24.194603, -56.435036",
    "map": "https://www.google.com/maps?q=-24.194603,-56.435036"
  },
  {
    "key": "mariaaux",
    "city": "María Auxiliadora",
    "dept": "Itapúa",
    "route": "RUTA PY 06",
    "ref": "Acceso María Auxiliadora Sur",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-26.553277, -55.267600",
    "map": "https://www.google.com/maps?q=-26.553277,-55.267600"
  },
  {
    "key": "sanpedro",
    "city": "San Pedro",
    "dept": "San Pedro",
    "route": "RUTA PY 11",
    "ref": "Acceso a San Pedro",
    "type": "Fijo · doble faz",
    "size": "8 × 4 m",
    "coords": "-24.071649, -57.061643",
    "map": "https://www.google.com/maps?q=-24.071649,-57.061643"
  }
]
