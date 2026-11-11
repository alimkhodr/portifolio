// Portfólio do Trabalho de Graduação (Fatec SJC, Banco de Dados).
// Fonte: README de github.com/alimkhodr/portfolio-banco-de-dados.
// Aqui ficam os dados que não mudam entre idiomas; os textos ficam em app/data/tg/{pt,en,es}.ts.

export const tgRepo = 'https://github.com/alimkhodr/portfolio-banco-de-dados'

export const tgPath = '/portfolio-banco-de-dados'

export type TgProjectId = 'dispvag' | 'trackcash' | 'drconvert' | 'geotrack' | 'track' | 'visiondata'

// repo: repositório principal; commits*: lista dos meus commits filtrada por autor.
export type TgLinkKind = 'repo' | 'commits' | 'commitsFront' | 'commitsBack'

// fit 'contain' mostra a imagem inteira sobre a cor de fundo dela (bg); 'cover' preenche o quadro.
export interface TgImage {
  src: string
  width: number
  height: number
  fit?: 'cover' | 'contain'
  position?: string
  bg?: string
}

const img = (name: string, width: number, height: number, extra: Partial<TgImage> = {}): TgImage =>
  ({ src: `/assets/tg/${name}.webp`, width, height, ...extra })

export interface TgProjectMeta {
  id: TgProjectId
  name: string
  period: string
  partner: { name: string, href: string }
  team: string
  professors?: string[]
  tags: string[]
  links: { kind: TgLinkKind, href: string, name?: string }[]
  // Capturas do README do portfólio; legendas em app/data/tg/{pt,en,es}.ts.
  cover: TgImage
  gallery: TgImage[]
}

export const tgProjects: TgProjectMeta[] = [
  {
    id: 'dispvag',
    name: 'DispVag',
    period: '2022/1',
    partner: { name: 'Fatec São José dos Campos', href: 'https://fatecsjc-prd.azurewebsites.net/' },
    team: 'TechForce',
    professors: ['Jean Carlos Costa (M2)', 'Antônio Egydio (P2)'],
    tags: ['Python', 'HTML', 'CSS', 'Bootstrap', 'Git'],
    links: [{ kind: 'repo', href: 'https://github.com/TechForce-ADS/DispVag', name: 'TechForce-ADS/DispVag' }],
    cover: img('dispvag-1', 1280, 743, { position: '50% 0%' }),
    gallery: [img('dispvag-4', 1280, 742, { position: '50% 0%' }), img('dispvag-7', 1280, 744, { position: '50% 0%' })]
  },
  {
    id: 'trackcash',
    name: 'TrackCash',
    period: '2022/2',
    partner: { name: 'TrackCash', href: 'https://www.trackcash.com.br/' },
    team: 'TechForce',
    professors: ['Cláudio Etelvino de Lima (M2)', 'Giuliano Bertoti (P2)'],
    tags: ['Java', 'Swing', 'MySQL', 'NetBeans', 'Git'],
    links: [{ kind: 'repo', href: 'https://github.com/TechForce-ADS/TrackCash', name: 'TechForce-ADS/TrackCash' }],
    cover: img('trackcash-home', 1280, 660),
    gallery: [img('trackcash-channels', 1280, 660), img('trackcash-md', 1600, 900, { fit: 'contain', bg: '#ffffff' })]
  },
  {
    id: 'drconvert',
    name: 'DrConvert',
    period: '2024/1',
    partner: { name: 'Dom Rock', href: 'https://www.domrock.net/' },
    team: 'Void',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Java', 'Spring Boot', 'MySQL', 'Figma'],
    links: [
      { kind: 'repo', href: 'https://github.com/alimkhodr/Projeto-API-Drconvert', name: 'Projeto-API-Drconvert' },
      { kind: 'commits', href: 'https://github.com/alimkhodr/Projeto-API-Drconvert/commits?author=alimkhodr' }
    ],
    cover: img('drconvert-project', 1280, 832, { position: '0% 0%' }),
    gallery: [img('drconvert-upload', 1280, 832), img('drconvert-der', 1446, 766, { fit: 'contain', bg: '#ffffff' })]
  },
  {
    id: 'geotrack',
    name: 'GeoTrack',
    period: '2024/2',
    partner: { name: 'ITO1', href: 'https://www.linkedin.com/company/ito1/' },
    team: 'iNineBD',
    tags: ['Vue', 'Vuetify', 'Vite', 'Google Maps', 'Java', 'Spring Boot', 'Oracle', 'Docker'],
    links: [
      { kind: 'repo', href: 'https://github.com/iNineBD/GeoTrack-4Sem2024Main', name: 'GeoTrack-4Sem2024Main' },
      { kind: 'commits', href: 'https://github.com/iNineBD/GeoTrack-4Sem2024/commits?author=alimkhodr' }
    ],
    cover: img('geotrack-markers', 1376, 613, { position: '0% 50%' }),
    gallery: [img('geotrack-areas', 1600, 804, { position: '0% 50%' }), img('geotrack-db', 1063, 445, { fit: 'contain', bg: '#ffffff' })]
  },
  {
    id: 'track',
    name: 'Track',
    period: '2025/1',
    partner: { name: 'Youtan', href: 'https://youtan.com.br/' },
    team: 'iNineBD',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Tailwind', 'Pinia', 'Vitest', 'Go', 'PostgreSQL', 'SQLite', 'Python', 'GitHub Actions'],
    links: [
      { kind: 'repo', href: 'https://github.com/iNineBD/Track-5Sem2025Main', name: 'Track-5Sem2025Main' },
      { kind: 'commitsFront', href: 'https://github.com/iNineBD/Track-5Sem2025Front/commits?author=alimkhodr' },
      { kind: 'commitsBack', href: 'https://github.com/iNineBD/Track-5Sem2025Server/commits?author=alimkhodr' }
    ],
    cover: img('track-banner', 1600, 533, { fit: 'contain', bg: '#000000' }),
    gallery: [img('track-dw', 510, 1120, { fit: 'contain', bg: '#2f2f2f' })]
  },
  {
    id: 'visiondata',
    name: 'VisionData',
    period: '2025/2',
    partner: { name: 'Pro4tech', href: 'https://www.pro4tech.com.br/' },
    team: 'iNineBD',
    tags: ['Nuxt', 'Vue', 'TypeScript', 'Go', 'Elasticsearch', 'Oracle', 'Python'],
    links: [
      { kind: 'repo', href: 'https://github.com/iNineBD/VisionData-6Sem2025Main', name: 'VisionData-6Sem2025Main' },
      { kind: 'commits', href: 'https://github.com/iNineBD/VisionData-6Sem2025Front/commits?author=alimkhodr' }
    ],
    cover: img('visiondata-banner', 1600, 484, { fit: 'contain', bg: '#000000' }),
    gallery: [img('visiondata-dw', 647, 680, { fit: 'contain', bg: '#2f2f2f' }), img('visiondata-auth', 1046, 611, { fit: 'contain', bg: '#ffffff' })]
  }
]

// "Meus principais conhecimentos" do README, na mesma ordem.
export const tgSkills = [
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
  { name: 'TypeScript', icon: 'i-simple-icons-typescript' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
  { name: 'React', icon: 'i-simple-icons-react' },
  { name: 'Next.js', icon: 'i-simple-icons-nextdotjs' },
  { name: 'Tailwind CSS', icon: 'i-simple-icons-tailwindcss' },
  { name: 'HTML', icon: 'i-simple-icons-html5' },
  { name: 'CSS', icon: 'i-simple-icons-css' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'Ruby', icon: 'i-simple-icons-ruby' },
  { name: 'Elixir', icon: 'i-simple-icons-elixir' },
  { name: 'Go', icon: 'i-simple-icons-go' },
  { name: 'Java', icon: 'i-simple-icons-openjdk' },
  { name: 'Spring', icon: 'i-simple-icons-spring' },
  { name: 'C#', icon: 'i-simple-icons-csharp' },
  { name: '.NET', icon: 'i-simple-icons-dotnet' },
  { name: 'Python', icon: 'i-simple-icons-python' },
  { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
  { name: 'MySQL', icon: 'i-simple-icons-mysql' },
  { name: 'SQLite', icon: 'i-simple-icons-sqlite' },
  { name: 'Oracle', icon: 'i-simple-icons-oracle' },
  { name: 'Elasticsearch', icon: 'i-simple-icons-elasticsearch' },
  { name: 'Docker', icon: 'i-simple-icons-docker' },
  { name: 'AWS', icon: 'i-simple-icons-amazonwebservices' },
  { name: 'Git', icon: 'i-simple-icons-git' },
  { name: 'GitHub', icon: 'i-simple-icons-github' },
  { name: 'GitHub Actions', icon: 'i-simple-icons-githubactions' }
]
