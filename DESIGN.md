# Design

Portfólio de desenvolvedor para recrutadores e líderes técnicos. Linguagem inspirada no catálogo de produtos da Cloudflare (cloudflare.com/products): grade de células com filetes finos e marcadores quadrados nos cruzamentos, controles em pílula, um painel de cor sólida com textura de pontos. O laranja da referência vira azul-cobalto.

## Stack

- Nuxt 4 + Nuxt UI 4 (Tailwind CSS 4, Reka UI), gerado como site estático (`nuxt generate`).
- Ícones Phosphor (`i-ph-*`) e Simple Icons (`i-simple-icons-*`) empacotados no build.
- Fontes via `@nuxt/fonts` (self-host): Host Grotesk (texto e títulos) e DM Mono (datas, números, tags).
- Idiomas via `@nuxtjs/i18n`: português em `/`, inglês em `/en`, espanhol em `/es`. Textos em `app/data/locales/`, dados comuns (ícones, tags, números) em `app/data/shared.ts`.

## Páginas

- `/`: portfólio profissional.
- `/portfolio-banco-de-dados`: portfólio do Trabalho de Graduação (Fatec SJC), a partir do README de `alimkhodr/portfolio-banco-de-dados`. Topo no painel de pontos com a ficha do curso em filetes; sobre e conhecimentos na grade de células; os seis Projetos Integradores no mesmo trilho tracejado da experiência, com os detalhes em `<details>` nativo (abre sem JS). Textos em `app/data/tg/`, nos três idiomas. Na home, o curso da Fatec leva para essa página.
- `/apresentacao-tg`: slides da apresentação do TG (cerca de 7 minutos), só em português e com `noindex`. Layout próprio (`layouts/deck.vue`, sem cabeçalho e rodapé). Canvas fixo de 1920x1080 escalado para a janela, então fica igual em qualquer projetor. Capa, abertura do VisionData e agradecimento no painel de pontos; o resto na grade de células. Teclado: setas, PageUp/PageDown (passadores de slide), Espaço, Home e End; F tela cheia; D tema. O número do slide fica no endereço (`#5`). Vídeos do VisionData mudos, em loop, tocando só no slide deles. Textos em `app/data/tg/slides.ts`.

## Imagens

- Foto da Fatec SJC (Wikimedia Commons, CC BY-SA 3.0, basiliovideo, recortada): no topo do portfólio do TG e na coluna de formação da home, sempre com crédito, licença e aviso de recorte (`PhotoCredit`).
- Logos das instituições e das empresas (`BrandLogo`) como máscara: pegam a cor do texto, ficam neutros e acendem no hover. Dados em `app/data/media.ts`. Qeevo (qeevo.com.br), Etec (etecsjcampos.com.br, só a palavra) e VisionData viram PNG só com o alfa; APTIV vem do Wikimedia Commons (domínio público).
- Projetos do TG: capa ao lado do resumo e galeria nos detalhes; tudo abre ampliado num modal (`ImageZoom`). Diagramas e banners usam `contain` sobre a própria cor de fundo.
- Diploma da UNIFEOB: só com data de nascimento, RG, link e código de validação cobertos.

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
