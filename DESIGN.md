# Design

Portfólio de desenvolvedor para recrutadores e líderes técnicos. Linguagem inspirada no catálogo de produtos da Cloudflare (cloudflare.com/products): grade de células com filetes finos e marcadores quadrados nos cruzamentos, controles em pílula, um painel de cor sólida com textura de pontos. O laranja da referência vira azul-cobalto.

## Stack

- Nuxt 4 + Nuxt UI 4 (Tailwind CSS 4, Reka UI), gerado como site estático (`nuxt generate`).
- Ícones Phosphor (`i-ph-*`) e Simple Icons (`i-simple-icons-*`) empacotados no build.
- Fontes via `@nuxt/fonts` (self-host): Host Grotesk (texto e títulos) e DM Mono (datas, números, tags).
- Idiomas via `@nuxtjs/i18n`: português em `/`, inglês em `/en`, espanhol em `/es`. Textos em `app/data/locales/`, dados comuns (ícones, tags, números) em `app/data/shared.ts`.

## Cor

Um único destaque. Tema claro e escuro seguindo o sistema, com alternância manual.

| Token | Claro | Escuro |
|---|---|---|
| Fundo | `#FBFBFC` | `#0E1013` |
| Superfície | `#F3F4F7` | `#15181D` |
| Texto | `#3B414C` | `#C4C9D2` |
| Título | `#14161A` | `#F7F8FA` |
| Secundário | `#5A6271` (5.8:1) | `#9AA3B2` (7.5:1) |
| Filete | `#14161A` a 12% | `#EEF0F3` a 12% |
| Destaque | `#2B52F0` (5.5:1) | `#86A2FF` (7.8:1) |
| Painel | `#2B52F0`, texto branco (5.9:1) | igual |

## Forma

- Grade: células sem raio, filetes de 1px, marcadores 7px nos cruzamentos.
- Painéis de cor: raio 16px.
- Controles interativos: pílula (raio total).
- Foto: raio 12px dentro do painel.

## Movimento

- Um momento autoral: o campo de pontos do painel do topo acende sob o cursor.
- Entrada do topo em cascata; números contam ao entrar na tela.
- Marcadores da grade ficam azuis no hover da célula.
- Tudo desliga com `prefers-reduced-motion`.
