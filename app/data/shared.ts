// Dados que não mudam entre idiomas: contatos, ícones, tags e números.
// O texto de cada idioma fica em app/data/locales/.

export type LocaleCode = 'pt' | 'en' | 'es'

export const profile = {
  name: 'Ali Mohamed Khodr',
  email: 'ali.m.khodr@gmail.com',
  phoneHref: 'tel:+5512988594305',
  linkedin: 'https://www.linkedin.com/in/alimohamedkhodr/',
  github: 'https://github.com/alimkhodr'
}

export const cvFiles: { locale: LocaleCode, label: string, href: string, file: string }[] = [
  { locale: 'pt', label: 'Português', href: '/cv.pdf', file: 'Ali_Mohamed_Khodr_CV.pdf' },
  { locale: 'en', label: 'English', href: '/cv_en.pdf', file: 'Ali_Mohamed_Khodr_CV_EN.pdf' },
  { locale: 'es', label: 'Español', href: '/cv_es.pdf', file: 'Ali_Mohamed_Khodr_CV_ES.pdf' }
]

export const sectionIds = ['sobre', 'projetos', 'experiencia', 'stack', 'contato'] as const

// API de busca do GitHub, org quero-edu, PRs criados de 22/10/2025 a 22/10/2026.
// Revisados = reviewed-by:alimkhodr -author:alimkhodr (sem contar os próprios PRs).
export const metricValues = [
  { value: 634, icon: 'i-ph-git-pull-request' },
  { value: 540, icon: 'i-ph-git-merge' },
  { value: 26, icon: 'i-ph-folders' },
  { value: 295, icon: 'i-ph-eye' }
]

const projectIds = ['gateway', 'studentArea', 'refunds', 'marketplace', 'crossSell', 'recurringPix', 'api5sem'] as const
export type ProjectId = typeof projectIds[number]

export const projectMeta: { id: ProjectId, icon: string, tags: string[], featured?: boolean }[] = [
  { id: 'gateway', icon: 'i-ph-credit-card', tags: ['Vue', 'Nuxt', 'Ruby', 'Docker', 'AWS', 'CI/CD'], featured: true },
  { id: 'studentArea', icon: 'i-ph-student', tags: ['Vue', 'Nuxt', 'TypeScript', 'Ruby', 'i18n'] },
  { id: 'refunds', icon: 'i-ph-arrow-u-up-left', tags: ['Ruby', 'Vue', 'Workers', 'PIX'] },
  { id: 'marketplace', icon: 'i-ph-storefront', tags: ['Nuxt', 'OAuth', 'Multi-tenant'] },
  { id: 'crossSell', icon: 'i-ph-arrows-split', tags: ['Vue', 'A/B', 'Tracking'] },
  { id: 'recurringPix', icon: 'i-ph-repeat', tags: ['Ruby', 'Vue', 'PIX'] },
  { id: 'api5sem', icon: 'i-ph-graduation-cap', tags: ['Nuxt', 'Node', 'Python', 'Docker'] }
]

const jobIds = ['qeevoEngineer', 'aptiv'] as const
export type JobId = typeof jobIds[number]

export const jobMeta: { id: JobId, tags: string[], current?: boolean }[] = [
  { id: 'qeevoEngineer', tags: ['Vue', 'Nuxt', 'TypeScript', 'React', 'Ruby', 'Node', 'Docker', 'AWS'], current: true },
  { id: 'aptiv', tags: ['VB', 'C#', 'SQL', 'React', 'Node', 'Docker'] }
]

export const stackMeta = [
  {
    id: 'frontend',
    items: [
      { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
      { name: 'Nuxt', icon: 'i-simple-icons-nuxt' },
      { name: 'React', icon: 'i-simple-icons-react' },
      { name: 'TypeScript', icon: 'i-simple-icons-typescript' }
    ]
  },
  {
    id: 'backend',
    items: [
      { name: 'Ruby on Rails', icon: 'i-simple-icons-rubyonrails' },
      { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
      { name: 'Python', icon: 'i-simple-icons-python' },
      { name: 'C#', icon: 'i-simple-icons-csharp' }
    ]
  },
  {
    id: 'infra',
    items: [
      { name: 'Docker', icon: 'i-simple-icons-docker' },
      { name: 'AWS', icon: 'i-simple-icons-amazonwebservices' },
      { name: 'GitHub Actions', icon: 'i-simple-icons-githubactions' },
      { name: 'Linux', icon: 'i-simple-icons-linux' }
    ]
  },
  {
    id: 'data',
    items: [
      { name: 'PostgreSQL', icon: 'i-simple-icons-postgresql' },
      { name: 'SQL Server', icon: 'i-simple-icons-microsoftsqlserver' },
      { name: 'MySQL', icon: 'i-simple-icons-mysql' },
      { name: 'Supabase', icon: 'i-simple-icons-supabase' }
    ]
  }
] as const

export type StackGroupId = typeof stackMeta[number]['id']
export type StackItemName = typeof stackMeta[number]['items'][number]['name']
