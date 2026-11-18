@echo off
rem Abre a apresentacao do TG no navegador, sem internet. Feche esta janela para encerrar.
cd /d "%~dp0site"
set PORT=4321
start "" "http://127.0.0.1:%PORT%/apresentacao-tg/"
where python >nul 2>nul && (python -m http.server %PORT% --bind 127.0.0.1 & goto :eof)
where py >nul 2>nul && (py -m http.server %PORT% --bind 127.0.0.1 & goto :eof)
npx --yes serve -l %PORT% .
