#!/usr/bin/env bash
# Gera os downloads da apresentação do TG a partir do site estático (rode depois de `nuxt generate`):
#   .output/public/downloads/apresentacao-tg.pdf          PDF 16:9, um slide por página
#   .output/public/downloads/apresentacao-tg-offline.zip  site completo + atalho para apresentar sem internet
# Precisa do Google Chrome, python3 e zip.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/.output/public"
DL="$OUT/downloads"
PORT="${DECK_PORT:-4321}"
CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

[ -f "$OUT/apresentacao-tg/index.html" ] || { echo "Rode 'npx nuxt generate' antes." >&2; exit 1; }
rm -rf "$DL" && mkdir -p "$DL"

# Servidor local só para o Chrome renderizar a página como no ar.
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$OUT" >/dev/null 2>&1 &
SERVER=$!
STAGE="$(mktemp -d)"
trap 'kill $SERVER 2>/dev/null; rm -rf "$STAGE"' EXIT
sleep 1

"$CHROME" --headless=new --disable-gpu --hide-scrollbars --no-pdf-header-footer \
  --virtual-time-budget=20000 --run-all-compositor-stages-before-draw \
  --print-to-pdf="$DL/apresentacao-tg.pdf" \
  "http://127.0.0.1:$PORT/apresentacao-tg/?tema=claro" 2>/dev/null

# Pacote offline: o site inteiro (sem a pasta de downloads) e os atalhos de apresentação.
PKG="$STAGE/apresentacao-tg"
mkdir -p "$PKG"
rsync -a --exclude downloads "$OUT/" "$PKG/site/"
cp "$ROOT/scripts/offline/"* "$PKG/"
chmod +x "$PKG/Apresentar (Mac).command"
(cd "$STAGE" && zip -qrX "$DL/apresentacao-tg-offline.zip" apresentacao-tg)

ls -lh "$DL"
