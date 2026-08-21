<?php
declare(strict_types=1);
session_start();

// Credenciales — cambiá acá si querés otro user/pass
const ADMIN_USER = 'tiocr';
const ADMIN_PASS_HASH = '$2y$10$JxG.QR73GevOaZW/5IFOtO8yKMvnngqPYgbyKc8ZlZTaeWrjMSeXC'; // tiocrcarteles26

const MANIFEST_PATH = __DIR__ . '/../gallery-manifest.json';
const UPLOADS_DIR   = __DIR__ . '/uploads';
const UPLOADS_URL   = '/admin/uploads';
const MAX_UPLOAD    = 20 * 1024 * 1024; // 20 MB por archivo

header('Content-Type: application/json; charset=utf-8');

function json_out($data, int $status = 200): void {
  http_response_code($status);
  echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
  exit;
}
function require_auth(): void {
  if (empty($_SESSION['authed'])) json_out(['error' => 'unauthorized'], 401);
}
function read_manifest(): array {
  if (!file_exists(MANIFEST_PATH)) {
    return ['version' => 1, 'updatedAt' => gmdate('c'), 'carteles' => []];
  }
  $raw = file_get_contents(MANIFEST_PATH);
  $data = json_decode($raw, true);
  if (!is_array($data)) return ['version' => 1, 'updatedAt' => gmdate('c'), 'carteles' => []];
  if (!isset($data['carteles']) || !is_array($data['carteles'])) $data['carteles'] = [];
  return $data;
}
function write_manifest(array $data): void {
  $data['updatedAt'] = gmdate('c');
  $tmp = MANIFEST_PATH . '.tmp';
  file_put_contents($tmp, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES));
  rename($tmp, MANIFEST_PATH);
}
function json_body(): array {
  $raw = file_get_contents('php://input');
  $data = json_decode($raw, true);
  return is_array($data) ? $data : [];
}

$action = $_GET['action'] ?? '';
$method = $_SERVER['REQUEST_METHOD'];

switch ($action) {
  case 'session':
    json_out(['authed' => !empty($_SESSION['authed']), 'user' => $_SESSION['user'] ?? null]);

  case 'login':
    if ($method !== 'POST') json_out(['error' => 'method'], 405);
    $body = json_body();
    $u = trim((string)($body['user'] ?? ''));
    $p = (string)($body['pass'] ?? '');
    if ($u === ADMIN_USER && password_verify($p, ADMIN_PASS_HASH)) {
      session_regenerate_id(true);
      $_SESSION['authed'] = true;
      $_SESSION['user'] = $u;
      json_out(['ok' => true]);
    }
    usleep(400000); // 400ms para desalentar brute force
    json_out(['error' => 'credenciales inválidas'], 401);

  case 'logout':
    $_SESSION = [];
    session_destroy();
    json_out(['ok' => true]);

  case 'manifest':
    require_auth();
    json_out(read_manifest());

  case 'save':
    require_auth();
    if ($method !== 'POST') json_out(['error' => 'method'], 405);
    $body = json_body();
    if (!isset($body['carteles']) || !is_array($body['carteles'])) json_out(['error' => 'body inválido'], 400);
    // Sanitizar
    $clean = [];
    foreach ($body['carteles'] as $c) {
      if (!is_array($c)) continue;
      $clean[] = [
        'key'   => (string)($c['key']   ?? ''),
        'city'  => (string)($c['city']  ?? ''),
        'dept'  => (string)($c['dept']  ?? ''),
        'route' => (string)($c['route'] ?? ''),
        'ref'   => (string)($c['ref']   ?? ''),
        'type'  => (string)($c['type']  ?? ''),
        'size'  => (string)($c['size']  ?? ''),
        'coords'=> (string)($c['coords']?? ''),
        'map'   => (string)($c['map']   ?? ''),
        'images'=> array_values(array_filter(array_map(
          fn($x) => is_string($x) ? $x : null,
          $c['images'] ?? []
        ))),
      ];
    }
    write_manifest(['version' => 1, 'carteles' => $clean]);
    json_out(['ok' => true, 'count' => count($clean)]);

  case 'upload':
    require_auth();
    if ($method !== 'POST') json_out(['error' => 'method'], 405);
    if (!isset($_FILES['file'])) json_out(['error' => 'sin archivo'], 400);
    $f = $_FILES['file'];
    if ($f['error'] !== UPLOAD_ERR_OK) json_out(['error' => 'upload error ' . $f['error']], 400);
    if ($f['size'] > MAX_UPLOAD) json_out(['error' => 'archivo muy grande (>20MB)'], 400);
    $info = @getimagesize($f['tmp_name']);
    if (!$info) json_out(['error' => 'no es imagen'], 400);
    $allowed = [IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp'];
    if (!isset($allowed[$info[2]])) json_out(['error' => 'formato no soportado (usa jpg/png/webp)'], 400);
    $ext = $allowed[$info[2]];
    if (!is_dir(UPLOADS_DIR)) @mkdir(UPLOADS_DIR, 0755, true);
    $slug = preg_replace('/[^a-z0-9-]+/i', '-', strtolower(trim((string)($_POST['slug'] ?? 'foto'))));
    $slug = trim($slug, '-') ?: 'foto';
    $name = $slug . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
    $dest = UPLOADS_DIR . '/' . $name;
    if (!move_uploaded_file($f['tmp_name'], $dest)) json_out(['error' => 'no se pudo guardar'], 500);
    json_out(['ok' => true, 'url' => UPLOADS_URL . '/' . $name]);

  case 'delete-image':
    require_auth();
    if ($method !== 'POST') json_out(['error' => 'method'], 405);
    $url = (string)(json_body()['url'] ?? '');
    // Solo borra archivos dentro de UPLOADS_DIR — nunca los del build
    if (str_starts_with($url, UPLOADS_URL . '/')) {
      $name = basename($url);
      $path = UPLOADS_DIR . '/' . $name;
      if (is_file($path)) @unlink($path);
    }
    json_out(['ok' => true]);

  default:
    json_out(['error' => 'action desconocida'], 404);
}
