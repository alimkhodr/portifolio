// Conteúdo do portfólio. Fonte: site anterior e build_cv.py (versão em português).

export const profile = {
  name: 'Ali Mohamed Khodr',
  role: 'Software Engineer',
  company: 'Qeevo Group',
  city: 'São José dos Campos, SP',
  email: 'ali.m.khodr@gmail.com',
  phone: '(12) 98859-4305',
  phoneHref: 'tel:+5512988594305',
  linkedin: 'https://www.linkedin.com/in/alimohamedkhodr/',
  github: 'https://github.com/alimkhodr'
}

export const cvFiles = [
  { label: 'Português', href: '/cv.pdf', file: 'Ali_Mohamed_Khodr_CV.pdf' },
  { label: 'English', href: '/cv_en.pdf', file: 'Ali_Mohamed_Khodr_CV_EN.pdf' },
  { label: 'Español', href: '/cv_es.pdf', file: 'Ali_Mohamed_Khodr_CV_ES.pdf' }
]

export const navLinks = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contato' }
]

// API de busca do GitHub, org quero-edu, PRs criados de 22/10/2025 a 22/10/2026.
// Revisados = reviewed-by:alimkhodr -author:alimkhodr (sem contar os próprios PRs).
export const metrics = {
  period: 'Out 2025 a out 2026, Qeevo Group, dados do GitHub',
  items: [
    { value: 634, label: 'PRs abertos', icon: 'i-ph-git-pull-request' },
    { value: 540, label: 'PRs mergeados', icon: 'i-ph-git-merge' },
    { value: 26, label: 'Repositórios', icon: 'i-ph-folders' },
    { value: 295, label: 'PRs de outros devs revisados', icon: 'i-ph-eye' }
  ]
}

export interface Project {
  title: string
  description: string
  icon: string
  tags: string[]
  role?: string
  kpi?: { value: string, label: string }
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Gateway de pagamentos embarcável',
    description: 'Construído do zero para parceiros externos embarcarem via iframe. Renderização de oferta, Cartão, PIX e Boleto, cupons, temas por marca, CI/CD e dockerização.',
    icon: 'i-ph-credit-card',
    tags: ['Vue', 'Nuxt', 'Ruby', 'Docker', 'AWS', 'CI/CD'],
    role: 'Tech lead',
    kpi: { value: '~33 PRs', label: 'entre backend e frontend' },
    featured: true
  },
  {
    title: 'Área do aluno multi-tenant',
    description: 'Histórico de pagamentos, reembolso self-service, modal de Cartão e PIX, validação de chave PIX e localização por tenant. Arquitetura, setup e deploy sob minha responsabilidade.',
    icon: 'i-ph-student',
    tags: ['Vue', 'Nuxt', 'TypeScript', 'Ruby', 'i18n'],
    role: 'Tech lead',
    kpi: { value: '~24 PRs', label: 'como owner técnico do produto' }
  },
  {
    title: 'Reembolso ponta a ponta',
    description: 'Mais de 6 repositórios e times diferentes: solicitação com acompanhamento, workers com retry, PIX com fallback por e-mail e painel de auditoria.',
    icon: 'i-ph-arrow-u-up-left',
    tags: ['Ruby', 'Vue', 'Workers', 'PIX'],
    role: 'Transversal',
    kpi: { value: '6+ repos', label: 'e coordenação entre times' }
  },
  {
    title: 'Branded marketplace',
    description: 'Login com OTP por e-mail e Google OAuth, header multi-tenant, listagem com filtros e brand slug dinâmico.',
    icon: 'i-ph-storefront',
    tags: ['Nuxt', 'OAuth', 'Multi-tenant']
  },
  {
    title: 'Cross-sell com teste A/B',
    description: 'Cross-sell multi-oferta no pós-checkout, com estado em cookies e rastreamento.',
    icon: 'i-ph-arrows-split',
    tags: ['Vue', 'A/B', 'Tracking']
  },
  {
    title: 'PIX recorrente',
    description: 'Assinaturas por PIX, do controller no monolito ao modal de pagamento na área do aluno.',
    icon: 'i-ph-repeat',
    tags: ['Ruby', 'Vue', 'PIX']
  },
  {
    title: 'API-5SEM, Fatec',
    description: 'Projeto acadêmico full-stack em monorepo com submódulos: backend, frontend e pipeline ETL.',
    icon: 'i-ph-graduation-cap',
    tags: ['Nuxt', 'Node', 'Python', 'Docker']
  }
]

export interface Job {
  period: string
  role: string
  company: string
  description: string
  highlights?: string[]
  tags: string[]
  current?: boolean
}

export const jobs: Job[] = [
  {
    period: 'Abr 2025 a atual',
    role: 'Software Engineer',
    company: 'Qeevo Group',
    description: 'Full-stack com foco em pagamentos, multi-tenant e produtos embarcáveis. Tech lead de dois produtos lançados do zero.',
    highlights: [
      '295 PRs de outros desenvolvedores revisados nos últimos 12 meses',
      'Contribuições ao design system compartilhado da organização',
      'Testes A/B de cross-sell pós-checkout'
    ],
    tags: ['Vue', 'Nuxt', 'Ruby', 'Node', 'TypeScript', 'Docker', 'AWS'],
    current: true
  },
  {
    period: '2024 a mar 2025',
    role: 'Desenvolvedor Full-stack',
    company: 'Qeevo Group (ex-Quero Educação)',
    description: 'Produtos do marketplace de educação com múltiplas marcas e tenants. Primeiro contato com Nuxt, Ruby e AWS em produção.',
    highlights: [
      'Reformulação das páginas de pagamento de assinatura',
      'Cross-sell multi-oferta no pós-checkout'
    ],
    tags: ['Vue', 'React', 'Nuxt', 'AWS', 'Docker']
  },
  {
    period: '2022 a 2024',
    role: 'Desenvolvedor de Ferramentas Internas',
    company: 'APTIV',
    description: 'Ferramentas internas e automação de processos industriais, integradas a bancos SQL Server em produção.',
    highlights: [
      'Projeto interno de três meses apresentado à liderança, com reconhecimento formal'
    ],
    tags: ['VB', 'C#', 'SQL', 'React', 'Node', 'Docker']
  }
]

export const education = [
  { period: 'Mar 2023 a out 2025', course: 'Análise e Desenvolvimento de Sistemas', school: 'Universidade do Vale do Paraíba (Univap)', status: 'Concluído' },
  { period: 'Fev 2022 a atual', course: 'Banco de Dados', school: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
  { period: 'Fev 2019 a dez 2021', course: 'Técnico em Desenvolvimento de Sistemas', school: 'ETEC Profª Ilza Nascimento Pintus' },
  { period: 'Jan 2022 a dez 2026', course: 'Inglês avançado (C1)', school: 'CNA Idiomas' }
]

export interface StackItem {
  name: string
  note: string
  icon: string
}

export interface StackGroup {
  id: string
  label: string
  items: StackItem[]
}

export const stack: StackGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { name: 'Vue.js', note: 'Pinia, Vuex e design system', icon: 'i-simple-icons-vuedotjs' },
      { name: 'Nuxt', note: 'Gateway e área do aluno', icon: 'i-simple-icons-nuxt' },
      { name: 'React', note: 'Marketplace e ferramentas internas', icon: 'i-simple-icons-react' },
      { name: 'TypeScript', note: 'JavaScript, HTML, CSS e Tailwind', icon: 'i-simple-icons-typescript' }
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    items: [
      { name: 'Ruby on Rails', note: 'Pagamentos, reembolso e workers', icon: 'i-simple-icons-rubyonrails' },
      { name: 'Node.js', note: 'APIs REST e GraphQL', icon: 'i-simple-icons-nodedotjs' },
      { name: 'Python', note: 'Pipelines ETL', icon: 'i-simple-icons-python' },
      { name: 'C#', note: 'Ferramentas internas, com Visual Basic', icon: 'i-simple-icons-csharp' }
    ]
  },
  {
    id: 'infra',
    label: 'Infra e DevOps',
    items: [
      { name: 'Docker', note: 'Do ambiente local à produção', icon: 'i-simple-icons-docker' },
      { name: 'AWS', note: 'Produção na Qeevo', icon: 'i-simple-icons-amazonwebservices' },
      { name: 'GitHub Actions', note: 'Pipelines de CI/CD', icon: 'i-simple-icons-githubactions' },
      { name: 'Linux', note: 'Shell e servidores', icon: 'i-simple-icons-linux' }
    ]
  },
  {
    id: 'dados',
    label: 'Dados',
    items: [
      { name: 'PostgreSQL', note: 'Produção na Qeevo', icon: 'i-simple-icons-postgresql' },
      { name: 'SQL Server', note: 'Bancos em produção na APTIV', icon: 'i-simple-icons-microsoftsqlserver' },
      { name: 'MySQL', note: 'Modelagem relacional', icon: 'i-simple-icons-mysql' },
      { name: 'Supabase', note: 'Postgres gerenciado', icon: 'i-simple-icons-supabase' }
    ]
  }
]
