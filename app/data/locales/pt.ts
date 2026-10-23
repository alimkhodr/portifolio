import type { SiteCopy } from './types'

export const pt: SiteCopy = {
  seo: {
    title: 'Ali Mohamed Khodr | Software Engineer',
    description: 'Software Engineer na Qeevo Group. Full-stack com Vue, Nuxt, Ruby e Node. Foco em pagamentos, multi-tenant e produtos construídos do zero.',
    ogDescription: 'Full-stack com foco em pagamentos, multi-tenant e produtos construídos do zero.'
  },
  ui: {
    skipLink: 'Pular para o conteúdo',
    mainNav: 'Principal',
    themeToggle: 'Alternar tema claro e escuro',
    openMenu: 'Abrir menu',
    language: 'Idioma',
    downloadCv: 'Baixar CV',
    cvLanguage: 'Escolher idioma do CV',
    technologies: 'Tecnologias',
    stackFilter: 'Filtrar stack por área',
    viewProjects: 'Ver projetos',
    current: 'Atual',
    madeWith: 'Feito com',
    backToTop: 'Voltar ao topo',
    heroImageAlt: 'Ali Mohamed Khodr sentado em frente a dois monitores, com iluminação azul ao fundo'
  },
  nav: ['Sobre', 'Projetos', 'Experiência', 'Stack', 'Contato'],
  hero: {
    badge: 'Software Engineer na Qeevo Group',
    lead: 'Construo produtos full-stack do zero à produção, com foco em pagamentos, multi-tenant e sistemas embarcáveis.'
  },
  metrics: {
    title: { lead: 'Um ano de ', accent: 'entregas reais', tail: '.' },
    period: 'Out 2025 a out 2026, Qeevo Group, dados do GitHub',
    labels: ['PRs abertos', 'PRs mergeados', 'Repositórios', 'PRs de outros devs revisados']
  },
  about: {
    title: { lead: 'Sobre ', accent: 'mim', tail: '.' },
    lead: 'Gosto de assumir produtos do zero: arquitetura inicial, CI/CD, Docker, temas, testes e deploy.',
    paragraphs: [
      'Comecei a programar no ensino técnico em Desenvolvimento de Sistemas, na **ETEC**. Depois cursei Banco de Dados na **Fatec São José dos Campos** e Análise e Desenvolvimento de Sistemas na **Univap**.',
      'Passei pela **APTIV**, com VB, C#, SQL, React e Node. Hoje estou na **Qeevo Group (ex-Quero Educação)**, full-stack com Vue, Nuxt, Ruby, Node e Docker em AWS.',
      'Na Qeevo, fui tech lead de dois produtos construídos do zero: um gateway de pagamentos embarcável e uma área do aluno multi-tenant.',
      'Fora do código: café, futebol e música.'
    ],
    educationTitle: 'Formação',
    education: [
      { period: 'Mar 2023 a out 2025', course: 'Análise e Desenvolvimento de Sistemas', school: 'Universidade do Vale do Paraíba (Univap)', status: 'Concluído' },
      { period: 'Fev 2022 a dez 2025', course: 'Banco de Dados', school: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { period: 'Fev 2019 a dez 2021', course: 'Técnico em Desenvolvimento de Sistemas', school: 'ETEC Profª Ilza Nascimento Pintus' },
      { period: 'Jan 2022 a dez 2026', course: 'Inglês avançado (C1)', school: 'CNA Idiomas' }
    ]
  },
  projects: {
    title: { lead: 'Projetos e ', accent: 'entregas', tail: '.' },
    intro: 'Produtos que construí ou liderei tecnicamente, de pagamentos a coordenação entre times.',
    items: {
      gateway: {
        title: 'Gateway de pagamentos embarcável',
        description: 'Construído do zero para parceiros externos embarcarem via iframe. Renderização de oferta, Cartão, PIX e Boleto, cupons, temas por marca, CI/CD e dockerização.',
        role: 'Tech lead',
        kpi: { value: '~33 PRs', label: 'entre backend e frontend' }
      },
      studentArea: {
        title: 'Área do aluno multi-tenant',
        description: 'Histórico de pagamentos, reembolso self-service, modal de Cartão e PIX, validação de chave PIX e localização por tenant. Arquitetura, setup e deploy sob minha responsabilidade.',
        role: 'Tech lead',
        kpi: { value: '~24 PRs', label: 'como owner técnico do produto' }
      },
      refunds: {
        title: 'Reembolso ponta a ponta',
        description: 'Mais de 6 repositórios e times diferentes: solicitação com acompanhamento, workers com retry, PIX com fallback por e-mail e painel de auditoria.',
        role: 'Transversal',
        kpi: { value: '6+ repos', label: 'e coordenação entre times' }
      },
      marketplace: {
        title: 'Branded marketplace',
        description: 'Login com OTP por e-mail e Google OAuth, header multi-tenant, listagem com filtros e brand slug dinâmico.'
      },
      crossSell: {
        title: 'Cross-sell com teste A/B',
        description: 'Cross-sell multi-oferta no pós-checkout, com estado em cookies e rastreamento.'
      },
      recurringPix: {
        title: 'PIX recorrente',
        description: 'Assinaturas por PIX, do controller no monolito ao modal de pagamento na área do aluno.'
      },
      expediente: {
        title: 'Expediente Bar',
        description: 'Site, painel de senhas e avaliações de um bar com pagode ao vivo em São José dos Campos: CMS no Supabase sem redeploy, eventos do Sympla, horários e avaliações do Google, chamada de senhas em tempo real na TV e leitura de comanda por OCR. Também cuido da identidade visual e do marketing.',
        role: 'Design, site e marketing',
        kpi: { value: 'SEO 100', label: 'no Lighthouse, em produção' }
      }
    }
  },
  experience: {
    title: { lead: 'Experiência ', accent: 'profissional', tail: '.' },
    jobs: {
      qeevoEngineer: {
        period: 'Nov 2024 a atual',
        role: 'Software Engineer',
        company: 'Qeevo Group',
        description: 'Full-stack com foco em pagamentos, multi-tenant e produtos embarcáveis. Tech lead de dois produtos lançados do zero, em um marketplace de educação com múltiplas marcas e tenants.',
        highlights: [
          '295 PRs de outros desenvolvedores revisados nos últimos 12 meses',
          'Contribuições ao design system compartilhado da organização',
          'Testes A/B de cross-sell pós-checkout',
          'Reformulação das páginas de pagamento de assinatura'
        ]
      },
      aptiv: {
        period: 'Abr 2023 a nov 2024',
        role: 'Engenheiro de Software',
        company: 'APTIV',
        kind: 'Estágio',
        description: 'Ferramentas internas e automação de processos industriais, integradas a bancos SQL Server em produção.',
        highlights: [
          'Projeto interno de três meses apresentado à liderança, com reconhecimento formal'
        ]
      }
    }
  },
  stack: {
    title: { lead: 'Stack de ', accent: 'trabalho', tail: '.' },
    intro: 'Ferramentas que uso no dia a dia, da interface ao banco de dados.',
    all: 'Tudo',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      infra: 'Infra e DevOps',
      data: 'Dados'
    },
    notes: {
      'Vue.js': 'Pinia, Vuex e design system',
      'Nuxt': 'Gateway e área do aluno',
      'React': 'Marketplace e ferramentas internas',
      'TypeScript': 'JavaScript, HTML, CSS e Tailwind',
      'Ruby on Rails': 'Pagamentos, reembolso e workers',
      'Node.js': 'APIs REST e GraphQL',
      'Python': 'Pipelines ETL',
      'C#': 'Ferramentas internas, com Visual Basic',
      'Docker': 'Do ambiente local à produção',
      'AWS': 'Produção na Qeevo',
      'GitHub Actions': 'Pipelines de CI/CD',
      'Linux': 'Shell e servidores',
      'PostgreSQL': 'Produção na Qeevo',
      'SQL Server': 'Bancos em produção na APTIV',
      'MySQL': 'Modelagem relacional',
      'Supabase': 'Postgres gerenciado'
    }
  },
  contact: {
    title: 'Contato.',
    lead: 'Para vagas, projetos ou uma conversa sobre pagamentos e produtos multi-tenant.',
    phone: '(12) 98859-4305',
    city: 'São José dos Campos, SP'
  }
}
