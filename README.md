# Handoff: Sitio web Tíos R — carteles.com.py

## Overview
Landing page comercial de **Tíos R / carteles.com.py**, empresa paraguaya de
**cartelería gigante y publicidad exterior** (carteles de ruta, gigantografías,
pantallas LED, ploteado de buses y campañas en el interior). El objetivo del sitio
es **vender ubicaciones publicitarias** en rutas y ciudades del interior y captar
consultas de agencias / marcas vía WhatsApp, además de posicionar la empresa en
búsquedas tipo "carteles en Coronel Oviedo", "cartelería en Ciudad del Este",
"pantallas LED en Encarnación".

## About the Design Files
Los archivos de este paquete son **referencias de diseño hechas en HTML** — un
prototipo que muestra el look & feel y el comportamiento previstos, **no código de
producción para copiar tal cual**. La tarea es **recrear este diseño en el entorno
del proyecto destino** (React, Next.js, Vue, Astro, etc.) usando sus patrones,
componentes y convenciones. Si todavía no hay un entorno, lo recomendado para este
sitio es **Next.js o Astro** (landing estática + SEO fuerte).

El prototipo está construido como un "Design Component" (`.dc.html`) que corre con
un pequeño runtime propio (`support.js`). **No traslades ese runtime** a producción:
solo úsalo para visualizar el diseño abriendo `index.html` en el
navegador. La lógica relevante (datos, interacción del mapa, modal) está descrita
abajo para reimplementarla con tu stack.

## Fidelity
**Alta fidelidad (hi-fi).** Colores, tipografía, espaciados, estados e interacciones
son finales. Recrear pixel-perfect con las librerías del codebase.

---

## Design Tokens

### Colores
| Token | Hex | Uso |
|---|---|---|
| bg principal | `#0D213B` | Fondo del sitio |
| bg secundario | `#112745` | Tarjetas / paneles |
| azul profundo | `#0F2441` | Inputs, fondos de sección |
| azul footer | `#0A1A30` | Fondo del footer |
| azul panel hero | `#11304F` → `#0C2240` | Gradiente del panel del mapa |
| azul mapa fill | `#1A3C5E` → `#102A44` | Relleno de departamentos (gradiente vertical) |
| stroke depto | `#3A77A6` @ 0.5 alpha | Bordes de departamentos en el mapa |
| neón acento | `#00D4FF` | Acento principal / bordes / labels |
| neón claro | `#00E5FF` | Pins, glows |
| neón secundario | `#00BFFF` | Inicio de gradientes de botón |
| texto principal | `#FFFFFF` | Títulos y texto |
| texto secundario | `#B8C7D9` | Párrafos |
| texto terciario | `#7E93AB` | Metadatos / captions |
| texto tenue | `#5E7592` | Footer legal / SEO |
| WhatsApp | `#25D366` (texto `#06241A`) | Botones de WhatsApp |
| superficie tooltip/modal | `#0B1F38` / `#0B2238` | Modal y tarjetas flotantes |

Bordes neón translúcidos frecuentes: `rgba(0,212,255,0.14)` (sutil),
`rgba(0,212,255,0.25–0.45)` (énfasis).

### Tipografía
- **Display / títulos:** `'Space Grotesk'`, weights 400/500/600/700.
- **Cuerpo / UI:** `'Manrope'`, weights 400/500/600/700/800.
- Importadas de Google Fonts.
- Escala títulos: `clamp(30px, 4vw, 46px)` (h2 de sección), `clamp(38px, 5vw, 62px)` (h1 hero), line-height 1.04–1.1, letter-spacing -0.5 a -1px.
- Eyebrows / labels: 11–13px, `letter-spacing: 2–3px`, uppercase, color `#00D4FF`, weight 600–700.
- Cuerpo: 15–18px, line-height 1.6.

### Radios, sombras, espaciado
- Radios: 11–13px (badges/chips), 14–18px (tarjetas), 20–22px (modal/paneles), 999px (pills/botones).
- Sombra tarjeta destacada: `0 30px 60px rgba(0,0,0,0.5)`.
- Glow neón botón primario: `0 10px 34px rgba(0,212,255,0.35)`.
- Glow modal: `0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,212,255,0.25)`.
- Padding de sección: `96px` vertical, `28px` horizontal, contenedor `max-width: 1240px` centrado.

### Botones
- **Primario:** `linear-gradient(90deg,#00BFFF,#00D4FF)`, texto `#06182B`, weight 700, padding `16px 30px`, radio 999px, glow neón.
- **Secundario (ghost):** transparente, `border:1px solid rgba(0,212,255,0.5)`, texto `#FFF`.
- **WhatsApp:** fondo `#25D366`, texto `#06241A`, weight 700, radio 9–12px.

---

## Screens / Views
Es una sola página (one-page) con navegación por anclas. Header sticky con scroll suave.

### Header (sticky)
- Fondo `rgba(13,33,59,0.82)` + `backdrop-filter: blur(14px)`, borde inferior neón sutil.
- Izquierda: **logo `assets/logo-tiocr.png`** (alto 52px, radio 7px). Sin texto adicional al lado.
- Derecha: nav (Servicios, Cobertura, Ubicaciones, Galería, Contacto) + botón primario "Solicitar campaña" (ancla `#contacto`).

### 1. Hero (`#inicio`)
- Grid 2 columnas `1fr 1.05fr`, gap 48px, `align-items:center`, padding `84px 28px 96px`.
- Fondo: radiales neón + `linear-gradient(180deg,#0D213B,#0F2441)`, borde inferior neón.
- **Efectos de movimiento (importantes):**
  - Haz neón superior fijo + un destello blanco que recorre el borde (`@keyframes tr-beam`, translateX -60%→160%, 5s).
  - Grilla en perspectiva tipo "ruta" al fondo (`transform: perspective(620px) rotateX(64deg)`, `background-size:64px`), animada hacia el espectador (`@keyframes tr-road`, mueve `background-position`, 2.6s linear infinite), con máscara radial que la desvanece.
  - Título con palabra "publicidad exterior" en gradiente neón con shimmer animado (`background-size:200%`, `@keyframes tr-shift`, 4s).
- **Columna izquierda:** eyebrow pill ("PRESENCIA EN RUTAS DEL INTERIOR · PARAGUAY") con punto pulsante; h1 "Cartelería gigante y *publicidad exterior* en rutas e interior del Paraguay"; párrafo; 2 botones ("Consultar ubicaciones" → `#ubicaciones`, "Solicitar campaña" → `#contacto`); fila de 3 stats (8 departamentos / 12×6 m / PY 01·02·03·05) con divisores neón.
- **Columna derecha:** el **mapa interactivo de Paraguay** (ver sección Mapa). Encabezado "COBERTURA EN RUTA" + "22 carteles disponibles", el SVG del mapa, y un pie "Tocá un punto para ver el cartel disponible". `max-width:560px`. (Antes tenía un borde neón giratorio; fue removido a pedido — el mapa va limpio.)

### 2. Servicios (`#servicios`)
- Encabezado centrado (eyebrow + h2 + intro).
- Grid 3 columnas, gap 20px. 4 tarjetas normales (span 1) + 1 tarjeta ancha (span 2) destacada con gradiente.
- Tarjeta: `#112745`, borde `rgba(0,212,255,0.14)`, radio 16px, padding 30px; ícono en cuadro `rgba(0,212,255,0.1)` radio 13px (SVG line-icon, stroke `#00D4FF`); h3 (Space Grotesk 21px) + párrafo.
- Servicios: **Cartelería de ruta, Gigantografías, Pantallas LED, Ploteado de buses, Campañas en ciudades del interior** (esta última es la tarjeta ancha).

### 3. Cobertura (`#cobertura`)
- Fondo `linear-gradient(180deg,#0F2441,#0D213B)`, bordes neón arriba/abajo.
- Grid 2 columnas `0.85fr 1.15fr`, gap 54px.
- Izquierda: eyebrow + h2 "Presentes en las rutas que conectan al Paraguay" + intro + chips de rutas (PY 01, 02, 03, 05, 07).
- Derecha: grid 3 col de tarjetas-ciudad (nombre + "Departamento · ruta"). Ciudades: Coronel Oviedo, Ciudad del Este, Encarnación, Pedro Juan Caballero, Salto del Guairá, Caacupé, Quiindy, Villa Florida, Corpus Christi.

### 4. Ubicaciones disponibles (`#ubicaciones`)
- Header de sección con eyebrow "UBICACIONES DISPONIBLES 2026" + h2 + link "Ver disponibilidad completa →".
- Grid 3 columnas, gap 22px, **7 tarjetas** (datos reales abajo).
- Tarjeta: imagen (16:10, placeholder para foto del cartel) con badge de ruta arriba-izq; cuerpo con ciudad (h3), "Departamento de X", referencia, fila Tipo / Medidas con bordes neón, y dos botones: **WhatsApp** (prellenado) + **Mapa** (Google Maps).
- Banda inferior "Condiciones de inversión": Contrato anual · Incluye primera impresión de la lona · Pago mensual adelantado + botón "Solicitar tarifa".

### 5. Galería (`#galeria`)
- Fondo `linear-gradient(180deg,#0D213B,#0F2441)`.
- Grid 4 columnas, filas de 200px, gap 16px, con celdas que ocupan 2×2 / 2×1 (mosaico). Cada celda es un placeholder de imagen con label (CARTEL DE RUTA, BUS PLOTEADO, PANTALLA LED, GIGANTOGRAFÍA, etc.).

### 6. Contacto (`#contacto`)
- Grid 2 columnas `0.95fr 1.05fr`, gap 48px.
- Izquierda: eyebrow + h2 "Llevemos tu marca a la ruta" + intro + botón grande WhatsApp + botón Email (mailto).
- Derecha: formulario (Nombre, Empresa, Teléfono/Email, mensaje) con submit que **abre WhatsApp con el mensaje prearmado** (ver Interacciones).

### Footer
- Fondo `#0A1A30`. 3 columnas: logo (`assets/logo-tiocr.png`, ~230px) + descripción; lista Servicios; lista Contacto (WhatsApp, email, "Paraguay · Cobertura nacional").
- Línea SEO con ciudades + copyright.

### WhatsApp flotante
- Botón fijo abajo-derecha (60px, `#25D366`), `position:fixed; z-index:60`, abre WhatsApp con mensaje general.

---

## El Mapa interactivo de Paraguay (clave)

### Qué es
SVG de Paraguay con sus **18 departamentos** y **22 pins** ubicados en las
**coordenadas geográficas exactas** de los carteles disponibles. Pins unidos por una
**línea punteada animada** (efecto "red"). Hover resalta el pin + muestra un tooltip;
**click abre un MODAL grande** con toda la información del cartel.

### Geometría / proyección
- El archivo **`map-data.js`** exporta `W`, `H`, `departments` (paths SVG) y `markers`.
- Las geometrías provienen de **geoBoundaries (PRY ADM1, dominio público)**,
  proyectadas con una **equirectangular simple corregida por coseno de la latitud media**:
  - `K = 130` px por grado de latitud; `cosL = cos(latMedia)`.
  - `x = (lng - minLng) * K * cosL`, `y = (maxLat - lat) * K`.
  - viewBox resultante: `0 0 1000 1079` (`W=1000`, `H=1079`).
  - bbox usado: lng `[-62.64, -54.26]`, lat `[-27.59, -19.29]`.
- Para reimplementar en otro stack: podés (a) reusar `map-data.js` tal cual (paths + markers ya proyectados), o (b) regenerar con la misma fórmula desde un GeoJSON de departamentos.

### Render del SVG
- `<defs>` con `linearGradient id="trMapFill"` (`#1A3C5E` → `#102A44`, vertical).
- Departamentos: `<path d=... fill="url(#trMapFill)" stroke="#3A77A6" stroke-width="1.1" stroke-opacity="0.5" stroke-linejoin="round">`.
- Línea de red: `<polyline>` por los markers en orden, `stroke="#00D4FF"`, `stroke-width="2"`, `stroke-opacity="0.55"`, `stroke-dasharray="2 11"`, `stroke-linecap="round"`, animada con `@keyframes tr-dash { to { stroke-dashoffset: -130 } }` 4.5s linear infinite.
- Pin (grupo en `translate(x,y) scale(s)`, `s=1.3` si activo): teardrop
  `path d="M0 0 C -6 -10 -13 -16 -13 -26 A 13 13 0 1 1 13 -26 C 13 -16 6 -10 0 0 Z"` fill `#0B2238` stroke `#00E5FF` width 2; punto interno `circle cx=0 cy=-26 r=5.5 fill #00E5FF`; anillo activo `circle r=17 stroke #00E5FF` animado `@keyframes tr-ring` (opacidad 0.25↔0.95, 1.5s).
  - Filtro glow: `drop-shadow(0 0 5px rgba(0,229,255,0.7))` (normal) / `drop-shadow(0 0 11px #00E5FF)` (activo).
  - `onMouseEnter` → resalta (estado `active`); `onClick` → abre modal (estado `modal`).

### Modal (al hacer click en un pin)
- Overlay `position:fixed; inset:0; z-index:200; background:rgba(4,12,24,0.74); backdrop-filter:blur(7px)`, centra el contenido, `@keyframes tr-fade` 0.2s. Click en el overlay cierra; click en la tarjeta hace stopPropagation.
- Tarjeta: `width:min(580px,94vw)`, `max-height:90vh`, scroll-y, `#0B1F38`, borde `rgba(0,212,255,0.45)`, radio 22px, glow.
  - **Banner** con gradiente neón + patrón de grilla enmascarado, botón cerrar "×" arriba-derecha, badge de ruta + "CARTEL DISPONIBLE", título ciudad (Space Grotesk 32px), "Departamento de X".
  - **Grid de info** (2 col): TIPO DE CARTEL, MEDIDAS, RUTA, DEPARTAMENTO; luego REFERENCIA / UBICACIÓN y COORDENADAS (filas con label neón 11px + valor 15.5px, separadores neón).
  - **Acciones:** botón WhatsApp (prellenado con ciudad/ruta/medidas) + botón "Ver en Maps".

---

## Datos reales — Carteles disponibles (22)
Fuente: presentaciones del cliente. **6 ubicaciones** de la propuesta *Coca Cola Bienvenida
(Abril/Mayo 2026)* + **16 ubicaciones** de *JULIO PRESENTACIÓN 2026* (cargadas el 2026-06-23).
Las coordenadas de las 16 nuevas se **resolvieron desde los links de Google Maps** del PDF
(short links `maps.app.goo.gl`). Tarifa de referencia mencionada por el cliente:
**Gs. 4.000.000/mes + IVA por cada faz/cara**, contrato anual, incluye primera impresión de
la lona, primer pago de 2 meses adelantado y cuotas siguientes mensuales adelantadas. (En el
sitio público la tarifa exacta NO se muestra en las tarjetas; se canaliza por WhatsApp.)

> **A verificar (datos del PDF/links):** *Pirapó* — el PDF decía Canindeyú, corregido a **Itapúa**
> según coordenada/realidad. *Bella Vista Sur* — ruta sin número en el PDF, asumida **PY 06**.
> *Santa Rita* — el link de Maps resuelve a `-24.19, -56.43`, lejos de "Santa Rita, Alto Paraná";
> revisar ese pin con el cliente.

| Ciudad | Departamento | Ruta | Referencia | Tipo | Medidas | Coordenadas |
|---|---|---|---|---|---|---|
| Caacupé | Central | RUTA PY 02 | Acceso a carril de subida · Cerro de Caacupé | Estático · doble faz | 12 × 6 m | -25.374350, -57.207278 |
| Yaguarón | Paraguarí | RUTA PY 01 | Acceso al centro de Yaguarón | Cartel estático | 12 × 6 m | 25°33'39.7"S 57°17'23.1"W |
| Quiindy | Paraguarí | RUTA PY 01 | Circunvalación · acceso a Quiindy | Cartel estático | 12 × 6 m | -25.966303, -57.248442 |
| Villa Florida | Misiones | RUTA PY 01 | Acceso al centro de Villa Florida | Cartel estático | 12 × 6 m | 26°24'14.9"S 57°07'47.8"W |
| Pedro Juan Caballero | Amambay | RUTA PY 05 | Acceso portal · Expo Amambay | Cartel estático | 12 × 6 m | 22°34'60.0"S 55°45'26.6"W |
| Corpus Christi | Canindeyú | RUTA PY 03 | Cruce PY 03 y rotonda acceso · Cruce Guaraní | Cartel estático | 12 × 6 m | 24°15'46.0"S 54°53'03.8"W |
| Campo 9 | Caaguazú | RUTA PY 02 | Acceso Colonia Sommerfeld · Dr. J. E. Estigarribia | Fijo · doble faz | 8 × 4 m | -25.405846, -55.616876 |
| Yguazú | Alto Paraná | RUTA PY 02 | Frente a Cetapar · Colonia Yguazú | Fijo · doble faz | 10 × 4 m | -25.453200, -55.041742 |
| Tavapy | Alto Paraná | RUTA PY 06 | Cerca a zona Santa Rita | Fijo · doble faz | 8 × 4 m | -25.696754, -55.017732 |
| San Alberto | Alto Paraná | RUTA PY 07 | Zona cruce Itakyry · acceso San Alberto | Fijo · doble faz | 8 × 4 m | -24.998843, -54.949106 |
| Katueté | Canindeyú | RUTA PY 03 | Zona Katueté · Cruce Guaraní | Fijo · doble faz | 8 × 4 m | -24.257824, -54.791412 |
| Santa Rosa del Aguaray | San Pedro | RUTA PY 08 | Acceso al centro de Santa Rosa | Fijo · doble faz | 8 × 4 m | -23.849980, -56.513380 |
| Bella Vista Sur | Itapúa | RUTA PY 06 | Zona urbana · Bella Vista Sur | Fijo · doble faz | 8 × 3 m | -27.011006, -55.581127 |
| Cruce Naranjal | Alto Paraná | RUTA PY 06 | Acceso a Cruce Naranjal · San Cristóbal | Fijo · doble faz | 8 × 4 m | -25.949537, -55.123449 |
| Obligado | Itapúa | RUTA PY 06 | Acceso al centro | Fijo · doble faz | 8 × 4 m | -27.056432, -55.594671 |
| Pirapó | Itapúa | RUTA PY 06 | Acceso al cruce Pirapó | Fijo · doble faz | 8 × 4 m | -26.902303, -55.476393 |
| Nueva Esperanza | Canindeyú | RUTA PY 07 | Acceso al centro | Fijo · doble faz | 8 × 4 m | -24.533317, -54.847051 |
| Cruce Itakyry | Alto Paraná | RUTA PY 07 | Cruce Marangatú · La Fortuna · Cruce Itakyry | Fijo · doble faz | 8 × 4 m | -25.088435, -54.956315 |
| Santa Fe del Paraná | Alto Paraná | RUTA PY 07 | Zona cruce Santa Fe | Fijo · doble faz | 8 × 4 m | -25.289819, -54.703505 |
| Santa Rita | Alto Paraná | RUTA PY 06 | Acceso portal Santa Rita | Fijo · doble faz | 8 × 4 m | -24.194603, -56.435036 |
| María Auxiliadora | Itapúa | RUTA PY 06 | Acceso María Auxiliadora Sur | Fijo · doble faz | 8 × 4 m | -26.553277, -55.267600 |
| San Pedro | San Pedro | RUTA PY 11 | Acceso a San Pedro | Fijo · doble faz | 8 × 4 m | -24.071649, -57.061643 |

Ciudades de cobertura adicionales mencionadas (sin cartel asignado aún): Coronel
Oviedo (Caaguazú), Ciudad del Este (Alto Paraná), Encarnación (Itapúa), Salto del
Guairá (Canindeyú).

---

## Interacciones & Behavior
- **Nav por anclas** con `scroll-behavior:smooth`.
- **Mapa:** hover pin → resalta + tooltip; click pin → modal con toda la info; cerrar con "×" o click en el backdrop.
- **WhatsApp:** todos los CTA y botones de cartel abren `https://wa.me/<num>?text=<mensaje>` en pestaña nueva, con mensaje prellenado según contexto (ciudad/ruta/medidas, o campaña general).
- **Formulario de contacto:** `onSubmit` arma un mensaje ("Hola Tíos R, soy {nombre} de {empresa}. {mensaje}. Mis datos: {contacto}.") y abre WhatsApp; no hace POST a un backend (reemplazar por tu flujo real si corresponde).
- **Animaciones:** `tr-beam` (haz hero), `tr-road` (grilla en movimiento), `tr-shift` (shimmer del título), `tr-pulse` (punto eyebrow), `tr-dash` (línea del mapa), `tr-ring` (anillo de pin activo), `tr-fade` (entrada del modal). Easing linear/ease-in-out según el caso; duraciones indicadas arriba.

## State Management
- `active`: key del pin con hover (resalta + tooltip).
- `modal`: key del cartel cuyo modal está abierto (`null` = cerrado).
- (En el prototipo) `map`: datos del mapa cargados de `map-data.js`. En producción podés importar los datos estáticamente.
- Parámetros configurables: **número de WhatsApp** (default placeholder `595981234567`) y **email de contacto** (`carlosraulpy@gmail.com`). Reemplazar el número por el real del cliente.

## Assets
- `assets/logo-tiocr.png` — logo TIOCR (placa de vidrio "MARKETING Y SERVICIOS PUBLICITARIOS"), provisto por el cliente. Fondo opaco azul oscuro (no transparente).
- Fotos de carteles / buses / pantallas: **el cliente las cargará** — en el prototipo son placeholders (drag-and-drop). En producción, espacios 16:10 (ubicaciones) y mosaico (galería).
- Íconos: SVG inline (line icons), no requieren librería externa (o reemplazar por la del codebase, p. ej. lucide).
- Fuentes: Google Fonts (Space Grotesk, Manrope).

## Files (en este paquete)
- `index.html` — diseño completo (markup + lógica). Ábrelo en el navegador para verlo.
- `map-data.js` — `W/H/departments/markers` del mapa (proyección ya calculada).
- `image-slot.js` — componente placeholder de imagen usado en el prototipo (no necesario en producción).
- `support.js` — runtime del prototipo (solo para visualizar; **no** llevar a producción).
- `assets/logo-tiocr.png` — logo.

> Para implementar: tomá los tokens, la estructura de secciones, los datos reales de
> carteles y la especificación del mapa/modal de este README, y reconstruí todo con
> los componentes y el sistema de diseño del codebase destino.
