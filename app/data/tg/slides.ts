// Slides da apresentação do TG (só em português), em /apresentacao-tg.
// Fontes: documento do TG (seções 2.1 a 2.6 e considerações finais) e README de
// github.com/alimkhodr/portfolio-banco-de-dados. Nome, período, empresa e equipe vêm de shared.ts e pt.ts.
import type { TgImage, TgProjectId } from './shared'
import { img } from './shared'

export const slidesPath = '/apresentacao-tg'

// Idade na data da apresentação. Fica de fora do slide enquanto não for confirmada.
export const presenterAge: number | undefined = undefined

export interface ApiSlide {
  id: Exclude<TgProjectId, 'visiondata'>
  summary: string
  did: string[]
  tags: string[]
  // Uma ou duas capturas: a primeira grande, a segunda menor por cima no canto.
  // frame troca a proporção do quadro (padrão 16:10).
  shots: { image: TgImage, alt: string, frame?: string }[]
}

export const apiSlides: ApiSlide[] = [
  {
    id: 'dispvag',
    summary: 'Portal que reúne vagas de TI por área, com requisitos, benefícios e dados da empresa.',
    did: [
      'Páginas de vagas por área e de detalhes da vaga e da empresa, com layout responsivo',
      'Requisitos com o cliente e documentação: wireframes, Design Thinking e BSC'
    ],
    tags: ['Python', 'HTML', 'CSS', 'Bootstrap'],
    shots: [
      { image: img('dispvag-4', 1280, 742, { position: '50% 0%' }), alt: 'Lista de vagas de Front-end do DispVag' },
      { image: img('dispvag-7', 1280, 744, { position: '50% 0%' }), alt: 'Página de detalhes de uma vaga' }
    ]
  },
  {
    id: 'trackcash',
    summary: 'Aplicação desktop para o lojista cadastrar canais de venda e as credenciais de acesso aos dados.',
    did: [
      'Telas no GUI Builder do NetBeans, com exibir e ocultar senha',
      'Modelo de dados e scripts de criação das tabelas no MySQL'
    ],
    tags: ['Java', 'MySQL', 'NetBeans'],
    shots: [
      { image: img('trackcash-channels', 1280, 660), alt: 'Tela de cadastro de canais do TrackCash' },
      { image: img('trackcash-md', 1600, 900, { fit: 'contain', bg: '#ffffff' }), alt: 'Modelo de dados do TrackCash' }
    ]
  },
  {
    id: 'drconvert',
    summary: 'Plataforma que mapeia e converte arquivos CSV nos estágios Landing Zone, Bronze e Silver.',
    did: [
      'Página do projeto em Next.js, com navegação entre os estágios e cards dos campos',
      'Opção "CSV tem cabeçalho" no upload, enviada ao backend'
    ],
    tags: ['Next.js', 'TypeScript', 'Spring Boot', 'MySQL'],
    shots: [
      { image: img('drconvert-project', 1280, 832, { position: '0% 0%' }), alt: 'Página do projeto com os estágios do DrConvert' },
      { image: img('drconvert-upload', 1280, 832), alt: 'Upload de arquivo CSV no DrConvert' }
    ]
  },
  {
    id: 'geotrack',
    summary: 'Rastreamento de dispositivos IoT no mapa, com filtros, áreas geográficas e rotas.',
    did: [
      'Estrutura do frontend em Vue 3, Vite e Vuetify e integração com o Google Maps',
      'Marcadores com avatar, filtros por usuário, dispositivo e período, rotas e Street View (26 commits)'
    ],
    tags: ['Vue 3', 'Vuetify', 'Google Maps', 'Spring Boot', 'Oracle'],
    shots: [
      { image: img('geotrack-markers', 1376, 613, { position: '0% 50%' }), alt: 'Marcadores de usuários no mapa do GeoTrack' },
      { image: img('geotrack-route', 1541, 869, { position: '0% 50%' }), alt: 'Rota percorrida traçada no mapa' }
    ]
  },
  {
    id: 'track',
    summary: 'Indicadores de projetos do Taiga e do Jira: ETL em Python, Data Warehouse em PostgreSQL, API em Go e painel em Nuxt.',
    did: [
      'Principal responsável pelo frontend (81 commits): dashboards em Chart.js, login e gestão de usuários por perfil',
      'Padrões da equipe com ESLint, Vitest e CI no GitHub Actions, e testes de integração do login em Go'
    ],
    tags: ['Nuxt', 'Chart.js', 'Go', 'PostgreSQL', 'Python'],
    shots: [
      { image: img('track-dashboard', 1600, 788), alt: 'Dashboard do Track com cards por tag, status e usuário', frame: 'aspect-[1600/788]' }
    ]
  }
]

// VisionData, o projeto de destaque.
export const visionData = {
  banner: img('visiondata-banner', 1600, 484, { fit: 'contain', bg: '#000000' }),
  dw: img('visiondata-dw', 647, 680, { fit: 'contain', bg: '#2f2f2f' }),
  authFlow: img('visiondata-auth', 1046, 611, { fit: 'contain', bg: '#ffffff' }),
  videos: {
    search: { src: '/assets/tg/video/visiondata-search.mp4', poster: '/assets/tg/video/visiondata-search.webp', width: 1600, height: 824 },
    dashboards: { src: '/assets/tg/video/visiondata-dashboards.mp4', poster: '/assets/tg/video/visiondata-dashboards.webp', width: 1600, height: 824 },
    login: { src: '/assets/tg/video/visiondata-login.mp4', poster: '/assets/tg/video/visiondata-login.webp', width: 1200, height: 590 },
    users: { src: '/assets/tg/video/visiondata-users.mp4', poster: '/assets/tg/video/visiondata-users.webp', width: 1600, height: 788 }
  },
  problem: 'A Pro4tech tinha um grande volume de chamados de suporte antigos e desorganizados. A equipe perdia tempo procurando soluções para problemas já resolvidos, e a gestão não conseguia extrair indicadores desse histórico.',
  goal: 'Transformar os chamados em uma base de conhecimento pesquisável e em informação de apoio à decisão.',
  features: [
    { title: 'Busca vetorizada', text: 'Chamados semelhantes, indexados no Elasticsearch' },
    { title: 'Dashboards', text: 'Métricas quantitativas e qualitativas dos chamados' },
    { title: 'Previsões', text: 'Por produto e por cliente, com modelos de Machine Learning' },
    { title: 'Insights de IA', text: 'Exportação dos insights gerados por inteligência artificial' }
  ],
  stack: [
    { layer: 'Interface', tech: 'Nuxt, Vue e TypeScript', use: 'nuxt-auth-utils na autenticação e Chart.js nos painéis' },
    { layer: 'API', tech: 'Go', use: 'API REST do backend' },
    { layer: 'Busca', tech: 'Elasticsearch', use: 'Indexação e busca dos chamados' },
    { layer: 'Dados', tech: 'Oracle', use: 'Banco relacional e Data Warehouse' },
    { layer: 'ETL e ML', tech: 'Python', use: 'Rotinas de ETL e modelos de previsão' },
    { layer: 'Gestão', tech: 'Jira', use: 'Sprints e tarefas da equipe' }
  ],
  // mine: o que foi feito por mim; o resto é da equipe.
  lgpd: [
    { title: 'Anonimização', text: 'Dados pessoais anonimizados', mine: false },
    { title: 'Logs', text: 'Registro de acesso e manipulação', mine: false },
    { title: 'Backup', text: 'Rotinas de backup', mine: false },
    { title: 'Consentimento', text: 'Controle de consentimento', mine: false },
    { title: 'Perfis de acesso', text: 'Middlewares authenticated e admin', mine: true },
    { title: 'Eliminação', text: 'O usuário exclui a própria conta no perfil', mine: true }
  ]
}

// Considerações finais: a progressão descrita no TG.
export const progression = [
  { when: '2022', title: 'Páginas estáticas e telas desktop', where: 'DispVag e TrackCash, em ADS' },
  { when: '2022', title: 'Modelagem relacional com MySQL', where: 'TrackCash' },
  { when: '2024 e 2025', title: 'Frontend completo e padrões da equipe', where: 'GeoTrack e Track' },
  { when: '2025', title: 'Autenticação, perfis de acesso e LGPD', where: 'VisionData' }
]
