// Slides da apresentação do TG (só em português), em /apresentacao-tg.
// Fontes: documento do TG, README de github.com/alimkhodr/portfolio-banco-de-dados e o código
// dos repositórios de cada projeto (links nos comentários). Nome, período, empresa e equipe vêm de shared.ts e pt.ts.
import type { TgImage, TgProjectId } from './shared'
import { img } from './shared'

export const slidesPath = '/apresentacao-tg'

// Gerados a cada deploy por scripts/deck-offline.sh (não existem no `nuxt dev`).
export const slideDownloads = {
  pdf: '/downloads/apresentacao-tg.pdf',
  offline: '/downloads/apresentacao-tg-offline.zip'
}

// Idade na data da apresentação, confirmada pelo Ali (faz 23 em 15/12/2026).
export const presenterAge: number | undefined = 22

// Situação de cada curso no slide "Sobre mim", sem datas, na ordem de about.education:
// UNIFEOB (diploma), Fatec (TG em 2026), ETEC (fev 2019 a dez 2021) e CNA (ainda cursando).
export const educationStatus = ['Concluído', 'Em andamento', 'Concluído', 'Em andamento'] as const

export interface SchemaTable { name: string, note?: string }
export interface StarSchema { fact: SchemaTable, left: SchemaTable[], right: SchemaTable[] }

export interface ApiSlide {
  id: Exclude<TgProjectId, 'visiondata'>
  summary: string
  // O que o projeto entregou de ponta a ponta (equipe).
  points: string[]
  // O que foi feito por mim, numa linha.
  mine: string
  tags: string[]
  // Visual da direita: uma ou duas capturas (a segunda menor, por cima no canto),
  // uma captura com um trecho de SQL por cima, ou o esquema do Data Warehouse.
  shots?: { image: TgImage, alt: string, frame?: string }[]
  code?: string[]
  schema?: StarSchema
}

export const apiSlides: ApiSlide[] = [
  {
    // github.com/TechForce-ADS/DispVag: app.py (Flask) e sprint 3/sqlite.py (4 tabelas e INSERTs).
    id: 'dispvag',
    summary: 'Portal em Python que organiza vagas de TI por área, com requisitos, benefícios e dados da empresa.',
    points: [
      'Servidor em Flask com páginas em HTML e Bootstrap',
      'Primeiras tabelas em SQLite, uma por área de vaga, com carga por scripts'
    ],
    mine: 'Páginas de vagas por área e de detalhes da vaga e da empresa',
    tags: ['Python', 'Flask', 'SQLite', 'Bootstrap'],
    shots: [
      { image: img('dispvag-4', 1280, 742, { position: '50% 0%' }), alt: 'Lista de vagas de Front-end do DispVag' },
      { image: img('dispvag-7', 1280, 744, { position: '50% 0%' }), alt: 'Página de detalhes de uma vaga' }
    ]
  },
  {
    // github.com/TechForce-ADS/TrackCash: codigo/4ºSprint/techforce.sql e src/dao/UsuarioDAO.java.
    id: 'trackcash',
    summary: 'Aplicação desktop em Java para o lojista cadastrar canais de venda e as credenciais de acesso aos dados.',
    points: [
      'Modelo relacional no MySQL com administrador, usuários e canais',
      'CRUD em Java com JDBC, DAO e PreparedStatement'
    ],
    mine: 'Modelo de dados, scripts de criação das tabelas e telas no NetBeans',
    tags: ['Java', 'JDBC', 'MySQL', 'NetBeans'],
    shots: [
      { image: img('trackcash-md', 1600, 900, { fit: 'contain', bg: '#ffffff' }), alt: 'Modelo de dados do TrackCash', frame: 'aspect-[16/9]' },
      { image: img('trackcash-channels', 1280, 660), alt: 'Tela de cadastro de canais do TrackCash' }
    ]
  },
  {
    // github.com/alimkhodr/Projeto-API-Drconvert: db/schema.sql, FromTo.java, MapsHeader.java e diagramas/der.png.
    id: 'drconvert',
    summary: 'Plataforma que recebe arquivos CSV e organiza os dados nos estágios Landing Zone, Bronze e Silver.',
    points: [
      'API em Spring Boot com JPA e MySQL: usuários e perfis (N:N), projetos, arquivos e campos',
      'Leitura do cabeçalho do CSV no servidor e regras de-para por campo na Silver'
    ],
    mine: 'Página do projeto com os estágios e a opção de CSV com cabeçalho no upload',
    tags: ['Next.js', 'Spring Boot', 'JPA', 'MySQL'],
    shots: [
      { image: img('drconvert-der', 1446, 766, { fit: 'contain', bg: '#ffffff' }), alt: 'Diagrama entidade-relacionamento do DrConvert', frame: 'aspect-[1446/766]' },
      { image: img('drconvert-project', 1280, 832, { position: '0% 0%' }), alt: 'Página do projeto com os estágios do DrConvert' }
    ]
  },
  {
    // github.com/iNineBD/GeoTrack-4Sem2024Main: Documentação/DDL SPRINT 4.SQL (partição, trigger e procedure);
    // github.com/iNineBD/GeoTrackServer-4Sem2024: LocationRepository.java (LAG e SUM OVER), StopPointService.java (Redis)
    // e README ("base de dados de 500.000 registros").
    id: 'geotrack',
    summary: 'Rastreamento de dispositivos IoT sobre uma base de 500 mil registros de geolocalização.',
    points: [
      'Oracle Spatial: localizações particionadas por dia e por dispositivo, e geofencing com trigger e procedure',
      'API em Spring Boot com pontos de parada calculados em SQL, com funções de janela, e Redis'
    ],
    mine: 'Mapa com marcadores, filtros, áreas e rotas sobre a API (26 commits)',
    tags: ['Vue 3', 'Spring Boot', 'Oracle Spatial', 'Redis'],
    shots: [
      { image: img('geotrack-markers', 1376, 613, { position: '0% 50%' }), alt: 'Marcadores de usuários no mapa do GeoTrack' }
    ],
    code: [
      'PARTITION BY RANGE ("DATA_REFERENCIA")',
      '  INTERVAL (INTERVAL \'1\' DAY)',
      'SUBPARTITION BY LIST ("ID_DISPOSITIVO")'
    ]
  },
  {
    // github.com/iNineBD/Track-5Sem2025Server: src/migrations/20250702020913_V3.sql (schema dw, Atlas);
    // github.com/iNineBD/Track-5Sem2025ETL: get_data.py (Taiga e Jira), prefect.yaml (600 s).
    id: 'track',
    summary: 'Indicadores de projetos do Taiga e do Jira, com ETL em Python, Data Warehouse em PostgreSQL e API em Go.',
    points: [
      'ETL com Prefect a cada 10 minutos, das APIs do Taiga e do Jira para o Data Warehouse',
      'Fato de cards com dimensões de status, tag, projeto, usuário e tempo; migrations com Atlas'
    ],
    mine: 'Dashboards, login e perfis de acesso, e testes de integração do login em Go (81 commits)',
    tags: ['Python', 'PostgreSQL', 'Go', 'Nuxt'],
    schema: {
      fact: { name: 'fato_cards', note: 'Métrica qtd_cards' },
      left: [{ name: 'dim_card' }, { name: 'dim_status' }, { name: 'dim_tag' }],
      right: [
        { name: 'dim_project', note: 'e dim_platform' },
        { name: 'dim_user', note: 'e dim_role' },
        { name: 'dim_time', note: 'dia, mês, ano, hora e minuto' }
      ]
    }
  }
]

// Visão geral: o que cada projeto usou da interface ao banco (TG, README e código).
export const stackByProject: Record<TgProjectId, string> = {
  dispvag: 'Flask · SQLite',
  trackcash: 'Java · MySQL',
  drconvert: 'Next.js · Spring Boot · MySQL',
  geotrack: 'Vue · Spring Boot · Oracle',
  track: 'Nuxt · Go · PostgreSQL',
  visiondata: 'Nuxt · Go · SQL Server · Elasticsearch'
}

// VisionData, o projeto de destaque. Banco: SQL Server (gorm.io/driver/sqlserver no go.mod do
// VisionData-6Sem2025Server e ODBC Driver 17 for SQL Server no ETL), não Oracle como diz o README.
export const visionData = {
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
    { title: 'Busca de chamados', text: 'Busca textual no Elasticsearch, com analisador em português' },
    { title: 'Dashboards', text: 'Indicadores calculados no Data Warehouse' },
    { title: 'Previsões', text: 'Por produto e por cliente, com Prophet em Python' },
    { title: 'Insights de IA', text: 'Exportação dos insights gerados por inteligência artificial' }
  ],
  // VisionData-6Sem2025ETL: dw_etl_processor.py, scheduler.py (diário, 00:10), elastic_client.py;
  // VisionData-6Sem2025Main: Database/V3.sql e Backup/; VisionData-6Sem2025ML: requirements.in (Prophet).
  pipeline: [
    { step: 'Origem', items: [{ name: 'Banco do cliente', tech: 'SQL Server', note: 'Chamados, anexos, histórico de status e auditoria' }] },
    { step: 'ETL', items: [{ name: 'Carga diária', tech: 'Python', note: 'Todo dia às 00:10: primeiro o DW, depois o Elasticsearch' }] },
    {
      step: 'Armazenamento',
      items: [
        { name: 'Data Warehouse', tech: 'SQL Server', note: 'Esquema estrela dos chamados' },
        { name: 'Índices de busca', tech: 'Elasticsearch', note: 'Chamados e logs da aplicação' },
        { name: 'Banco LGPD', tech: 'SQL Server', note: 'Registro das contas excluídas' }
      ]
    },
    {
      step: 'Uso',
      items: [
        { name: 'API REST', tech: 'Go', note: 'Indicadores, busca e perfis de acesso' },
        { name: 'Previsões', tech: 'Python', note: 'Prophet sobre as métricas da API' },
        { name: 'Aplicação', tech: 'Nuxt', note: 'Painéis, busca e gestão de usuários' }
      ]
    }
  ],
  // Database/V3.sql: Fact_Tickets com PK (TicketKey, TagKey) e três FKs para Dim_Dates.
  schema: {
    fact: { name: 'Fact_Tickets', note: 'Métrica QtTickets. Um registro por chamado e tag.' },
    left: [{ name: 'Dim_Users' }, { name: 'Dim_Agents' }, { name: 'Dim_Companies' }, { name: 'Dim_Categories' }, { name: 'Dim_Priorities' }],
    right: [{ name: 'Dim_Status' }, { name: 'Dim_Products' }, { name: 'Dim_Tags' }, { name: 'Dim_Channel' }, { name: 'Dim_Dates', note: 'Abertura, fechamento e 1ª resposta' }]
  } satisfies StarSchema,
  // load_dw_service.py: tabela temporária com índice clustered e MERGE pela chave de negócio (_BK).
  merge: [
    'MERGE Dim_Products AS Target',
    'USING ##Dim_Products_temp AS Source',
    'ON Target.ProductId_BK = Source.ProductId_BK',
    'WHEN MATCHED THEN UPDATE SET ...',
    'WHEN NOT MATCHED BY Target THEN INSERT ...'
  ],
  // VisionData-6Sem2025Server: internal/repositories/elsearch/build_tickets.go.
  search: [
    'Analisador em português: stopwords, stemmer e remoção de acentos',
    'Pesos por campo: título com peso 3 e descrição com peso 2',
    'Tolerância a erros de digitação (fuzziness)'
  ],
  // internal/repositories/sqlserver/connection.go, GetAverageResolutionTime (trecho simplificado).
  resolution: [
    'SELECT dp.Name, AVG(DATEDIFF(SECOND, abertura, fechamento))',
    'FROM Fact_Tickets ft',
    'JOIN Dim_Priorities dp ON ft.PriorityKey = dp.PriorityKey',
    'JOIN Dim_Dates de ON ft.EntryDateKey = de.DateKey',
    'JOIN Dim_Dates dc ON ft.ClosedDateKey = dc.DateKey',
    'GROUP BY dp.Name'
  ],
  // mine: o que foi feito por mim; o resto é da equipe.
  // V3.sql (índice único filtrado e UserAuthLogs), users.go (DeleteUser), Backup/backup_sgbd.sh e restaurar_lgpd.sh.
  lgpd: [
    { title: 'Consentimento', text: 'Termos versionados; um índice único filtrado permite só um aceite ativo por termo', mine: false },
    { title: 'Logs', text: 'Acessos com IP, navegador e resultado; logs da aplicação no Elasticsearch', mine: false },
    { title: 'Anonimização', text: 'Na exclusão, nome, e-mail e senha viram valores aleatórios, e o id da conta fica no banco LGPD', mine: false },
    { title: 'Backup', text: 'Backup comprimido do DW; depois de restaurar, uma procedure reconcilia o DW com o banco LGPD', mine: false },
    { title: 'Perfis de acesso', text: 'Páginas restritas a usuários autenticados e a administradores', mine: true },
    { title: 'Eliminação', text: 'O próprio usuário troca a senha ou exclui a conta pela página de perfil', mine: true }
  ]
}

// Considerações finais: a progressão técnica dos seis projetos.
export const progression = [
  { when: '2022', title: 'Primeiras tabelas e CRUD em Java com JDBC', where: 'DispVag e TrackCash · SQLite e MySQL' },
  { when: '2024', title: 'API em Spring Boot com JPA e dados em camadas', where: 'DrConvert · MySQL' },
  { when: '2024', title: 'Banco espacial com partições, triggers e funções de janela', where: 'GeoTrack · Oracle' },
  { when: '2025', title: 'ETL, Data Warehouse, busca e LGPD', where: 'Track e VisionData · PostgreSQL, SQL Server e Elasticsearch' }
]
