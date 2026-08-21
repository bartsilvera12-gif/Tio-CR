<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>TIOCR — Admin Galería</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
    background: #0b0f18; color: #eef2f7; min-height: 100vh;
  }
  a { color: #35f4fe; }
  header {
    position: sticky; top: 0; z-index: 20; background: rgba(6,10,20,0.9); backdrop-filter: blur(12px);
    border-bottom: 1px solid #1c2434; padding: 14px 22px; display: flex; align-items: center; gap: 16px;
  }
  header h1 { margin: 0; font-size: 16px; letter-spacing: .18em; text-transform: uppercase; color: #35f4fe; }
  header .spacer { flex: 1; }
  header button, .btn {
    background: #35f4fe; color: #062036; border: 0; padding: 9px 16px; border-radius: 8px;
    font-weight: 700; cursor: pointer; font-size: 13px; text-transform: uppercase; letter-spacing: .06em;
  }
  header button.ghost, .btn.ghost { background: transparent; color: #eef2f7; border: 1px solid #2a3547; }
  header button:disabled, .btn:disabled { opacity: .5; cursor: not-allowed; }
  main { max-width: 1200px; margin: 0 auto; padding: 24px; }
  .toast {
    position: fixed; right: 20px; bottom: 20px; padding: 12px 18px; border-radius: 10px;
    background: #062036; border: 1px solid #35f4fe; color: #eef2f7; z-index: 100; opacity: 0;
    transition: opacity .25s ease; pointer-events: none;
  }
  .toast.show { opacity: 1; }
  .toast.err { border-color: #ef4444; color: #ffb4b4; }

  /* login */
  .login-wrap {
    min-height: 100vh; display: grid; place-items: center; padding: 20px;
    background: radial-gradient(ellipse at top, rgba(53,244,254,.08), transparent 60%), #0b0f18;
  }
  .login {
    width: 100%; max-width: 380px; padding: 32px; border-radius: 16px;
    background: #101827; border: 1px solid #1c2434;
  }
  .login h1 { margin: 0 0 6px; font-size: 22px; }
  .login p { margin: 0 0 22px; color: #94a3b8; font-size: 14px; }
  .login label { display: block; font-size: 12px; color: #94a3b8; margin: 12px 0 6px; text-transform: uppercase; letter-spacing: .1em; }
  .login input {
    width: 100%; padding: 11px 12px; border-radius: 8px; background: #0b1220; color: #eef2f7;
    border: 1px solid #1c2434; font-size: 14px;
  }
  .login input:focus { outline: none; border-color: #35f4fe; }
  .login button { margin-top: 20px; width: 100%; padding: 12px; }
  .login .err { color: #ffb4b4; font-size: 13px; margin-top: 12px; min-height: 18px; }

  /* cartel card */
  .toolbar {
    display: flex; gap: 10px; margin-bottom: 20px; flex-wrap: wrap; align-items: center;
    position: sticky; top: 60px; z-index: 15; padding: 12px 0; background: #0b0f18;
  }
  .cartel {
    background: #101827; border: 1px solid #1c2434; border-radius: 14px; padding: 18px;
    margin-bottom: 16px;
  }
  .cartel-head { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; margin-bottom: 12px; }
  .cartel-head .city-input {
    flex: 1; min-width: 200px; font-size: 20px; font-weight: 700; padding: 8px 10px; border-radius: 8px;
    background: #0b1220; color: #eef2f7; border: 1px solid #1c2434;
  }
  .cartel-head .del { background: #331014; color: #ffb4b4; border: 1px solid #4a1720; padding: 7px 12px; border-radius: 8px; cursor: pointer; font-size: 12px; }
  .grid-fields { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 10px; margin-bottom: 14px; }
  .field label { display: block; font-size: 11px; color: #94a3b8; margin-bottom: 4px; text-transform: uppercase; letter-spacing: .08em; }
  .field input {
    width: 100%; padding: 9px 10px; border-radius: 7px; background: #0b1220; color: #eef2f7;
    border: 1px solid #1c2434; font-size: 13px;
  }
  .field input:focus { outline: none; border-color: #35f4fe; }

  .images {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; margin-top: 6px;
  }
  .img {
    position: relative; aspect-ratio: 4/3; border-radius: 8px; overflow: hidden; background: #0b1220;
    border: 1px solid #1c2434;
  }
  .img img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .img .x {
    position: absolute; top: 6px; right: 6px; width: 26px; height: 26px; border-radius: 50%;
    background: rgba(0,0,0,.65); color: #ffb4b4; border: 0; cursor: pointer; font-size: 15px; line-height: 1;
    display: grid; place-items: center;
  }
  .img .x:hover { background: rgba(239,68,68,.9); color: white; }
  .drop {
    display: block; border: 2px dashed #35f4fe66; border-radius: 8px; padding: 22px;
    text-align: center; color: #94a3b8; cursor: pointer; font-size: 13px; margin-top: 18px;
  }
  .drop.dragover { border-color: #35f4fe; background: rgba(53,244,254,.06); color: #eef2f7; }
  .drop input { display: none; }
  .empty { color: #64748b; font-size: 13px; padding: 8px 0; }

  .count { color: #94a3b8; font-size: 13px; }
  .count strong { color: #35f4fe; }
</style>
</head>
<body>
<div id="root">Cargando…</div>

<script>
const API = './api.php';

async function api(action, opts = {}) {
  const url = `${API}?action=${action}`;
  const res = await fetch(url, { credentials: 'same-origin', ...opts });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);
  return data;
}

function toast(msg, err = false) {
  const t = document.createElement('div');
  t.className = 'toast' + (err ? ' err' : '');
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2600);
}

// --- STATE ---
let carteles = [];
let dirty = false;

function setDirty(v) {
  dirty = v;
  const btn = document.querySelector('#save-btn');
  if (btn) btn.disabled = !v;
  window.onbeforeunload = v ? () => 'Hay cambios sin guardar' : null;
}

function slugify(s) {
  return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'nuevo';
}

// --- RENDER ---
function render() {
  const root = document.getElementById('root');
  root.innerHTML = `
    <header>
      <h1>TIOCR · Admin Galería</h1>
      <div class="spacer"></div>
      <span class="count"><strong>${carteles.length}</strong> carteles · <strong>${carteles.reduce((n,c)=>n+(c.images||[]).length,0)}</strong> fotos</span>
      <button id="save-btn" disabled>Guardar cambios</button>
      <button class="ghost" id="logout-btn">Salir</button>
    </header>
    <main>
      <div class="toolbar">
        <button class="btn ghost" id="add-btn">+ Agregar cartel</button>
        <div class="spacer" style="flex:1"></div>
      </div>
      <div id="list"></div>
    </main>
  `;
  document.getElementById('save-btn').onclick = save;
  document.getElementById('logout-btn').onclick = logout;
  document.getElementById('add-btn').onclick = addCartel;
  renderList();
}

function renderList() {
  const list = document.getElementById('list');
  list.innerHTML = '';
  if (!carteles.length) {
    list.innerHTML = '<p class="empty" style="text-align:center;padding:60px 0">Sin carteles. Cliqueá "+ Agregar cartel" para arrancar.</p>';
    return;
  }
  carteles.forEach((c, i) => list.appendChild(renderCard(c, i)));
}

function renderCard(c, i) {
  const card = document.createElement('div');
  card.className = 'cartel';
  card.innerHTML = `
    <div class="cartel-head">
      <input class="city-input" data-k="city" placeholder="Ciudad" value="${(c.city||'').replace(/"/g,'&quot;')}">
      <button class="del">Eliminar cartel</button>
    </div>
    <div class="grid-fields">
      <div class="field"><label>Departamento</label><input data-k="dept" value="${(c.dept||'').replace(/"/g,'&quot;')}"></div>
      <div class="field"><label>Ruta</label><input data-k="route" placeholder="RUTA PY 02" value="${(c.route||'').replace(/"/g,'&quot;')}"></div>
      <div class="field"><label>Referencia</label><input data-k="ref" value="${(c.ref||'').replace(/"/g,'&quot;')}"></div>
      <div class="field"><label>Tipo</label><input data-k="type" value="${(c.type||'').replace(/"/g,'&quot;')}"></div>
      <div class="field"><label>Tamaño</label><input data-k="size" placeholder="12 × 6 m" value="${(c.size||'').replace(/"/g,'&quot;')}"></div>
      <div class="field"><label>Coordenadas</label><input data-k="coords" value="${(c.coords||'').replace(/"/g,'&quot;')}"></div>
      <div class="field" style="grid-column: span 2"><label>Google Maps URL</label><input data-k="map" value="${(c.map||'').replace(/"/g,'&quot;')}"></div>
    </div>

    <label style="display:block;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:.08em;margin-bottom:6px">Fotos</label>
    <div class="images"></div>
    <label class="drop">
      <input type="file" accept="image/jpeg,image/png,image/webp" multiple>
      📸 Arrastrá imágenes acá o hacé click para elegir (jpg/png/webp, máx 20MB c/u)
    </label>
  `;

  // input handlers
  card.querySelectorAll('input[data-k]').forEach(inp => {
    inp.addEventListener('input', () => {
      c[inp.dataset.k] = inp.value;
      if (inp.dataset.k === 'city' && !c.key) c.key = slugify(inp.value);
      setDirty(true);
    });
  });

  card.querySelector('.del').onclick = () => {
    if (!confirm(`¿Eliminar el cartel "${c.city || '(sin nombre)'}"?`)) return;
    carteles.splice(i, 1);
    setDirty(true);
    renderList();
  };

  // Render images
  const imgsEl = card.querySelector('.images');
  (c.images || []).forEach((src, idx) => {
    const box = document.createElement('div');
    box.className = 'img';
    box.innerHTML = `<img src="${src}" alt="" loading="lazy"><button class="x" title="Quitar">×</button>`;
    box.querySelector('.x').onclick = async () => {
      if (!confirm('¿Quitar esta imagen?')) return;
      c.images.splice(idx, 1);
      // Si la imagen estaba en /admin/uploads, la borramos del server
      if (src.startsWith('/admin/uploads/')) {
        try { await api('delete-image', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ url: src }) }); } catch(e){}
      }
      setDirty(true);
      renderList();
    };
    imgsEl.appendChild(box);
  });

  // Upload
  const drop = card.querySelector('.drop');
  const fileInput = drop.querySelector('input');
  const handleFiles = async (files) => {
    if (!files || !files.length) return;
    for (const f of files) {
      const fd = new FormData();
      fd.append('file', f);
      fd.append('slug', slugify(c.city || c.key || 'foto'));
      try {
        const r = await api('upload', { method: 'POST', body: fd });
        c.images = c.images || [];
        c.images.push(r.url);
        setDirty(true);
        renderList();
      } catch(e) { toast('Error subiendo: ' + e.message, true); }
    }
  };
  fileInput.addEventListener('change', () => handleFiles(fileInput.files));
  ['dragenter','dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('dragover'); }));
  ['dragleave','drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('dragover'); }));
  drop.addEventListener('drop', e => handleFiles(e.dataTransfer.files));

  return card;
}

function addCartel() {
  carteles.unshift({
    key: 'nuevo-' + Date.now().toString(36),
    city: '', dept: '', route: '', ref: '', type: '', size: '', coords: '', map: '',
    images: [],
  });
  setDirty(true);
  renderList();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function save() {
  try {
    const r = await api('save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ carteles })
    });
    setDirty(false);
    toast(`Guardado (${r.count} carteles) ✓`);
  } catch(e) { toast('Error al guardar: ' + e.message, true); }
}

async function logout() {
  if (dirty && !confirm('Hay cambios sin guardar. ¿Salir igual?')) return;
  try { await api('logout', { method: 'POST' }); } catch(e){}
  location.reload();
}

// --- LOGIN ---
function renderLogin(err = '') {
  document.getElementById('root').innerHTML = `
    <div class="login-wrap">
      <form class="login" id="login-form">
        <h1>TIOCR Admin</h1>
        <p>Ingresá tus credenciales para editar la galería.</p>
        <label>Usuario</label>
        <input name="user" autofocus autocomplete="username" required>
        <label>Contraseña</label>
        <input name="pass" type="password" autocomplete="current-password" required>
        <button type="submit">Entrar</button>
        <div class="err">${err}</div>
      </form>
    </div>
  `;
  document.getElementById('login-form').onsubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    try {
      await api('login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user: fd.get('user'), pass: fd.get('pass') }),
      });
      init();
    } catch(err) {
      renderLogin(err.message);
    }
  };
}

// --- INIT ---
async function init() {
  try {
    const s = await api('session');
    if (!s.authed) { renderLogin(); return; }
    const m = await api('manifest');
    carteles = m.carteles || [];
    render();
  } catch(e) {
    document.body.innerHTML = '<p style="padding:40px;color:#ffb4b4">Error al cargar: ' + e.message + '</p>';
  }
}

init();
</script>
</body>
</html>
