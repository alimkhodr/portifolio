#!/bin/bash
# Abre a apresentação do TG no navegador, sem internet. Feche esta janela para encerrar.
cd "$(dirname "$0")/site" || exit 1
PORT=4321
URL="http://127.0.0.1:$PORT/apresentacao-tg/"
( sleep 1; open "$URL" ) &
echo "Apresentação em $URL (feche esta janela para encerrar)"
if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "$PORT" --bind 127.0.0.1
else
  npx --yes serve -l "$PORT" .
fi
