import type { SiteCopy } from './types'

export const en: SiteCopy = {
  seo: {
    title: 'Ali Mohamed Khodr | Software Engineer',
    description: 'Software Engineer at Qeevo Group. Full-stack with Vue, Nuxt, Ruby and Node, focused on payments, multi-tenant systems and products built from scratch.',
    ogDescription: 'Full-stack engineer focused on payments, multi-tenant systems and products built from scratch.'
  },
  ui: {
    skipLink: 'Skip to content',
    mainNav: 'Main',
    themeToggle: 'Toggle light and dark theme',
    openMenu: 'Open menu',
    language: 'Language',
    downloadCv: 'Download CV',
    cvLanguage: 'Choose CV language',
    technologies: 'Technologies',
    stackFilter: 'Filter stack by area',
    viewProjects: 'View projects',
    current: 'Current',
    madeWith: 'Built with',
    backToTop: 'Back to top',
    heroImageAlt: 'Ali Mohamed Khodr sitting in front of two monitors, with blue light in the background'
  },
  nav: ['About', 'Projects', 'Experience', 'Stack', 'Contact'],
  hero: {
    badge: 'Software Engineer at Qeevo Group',
    lead: 'I build full-stack products from scratch to production, focused on payments, multi-tenant systems and embeddable products.'
  },
  metrics: {
    title: { lead: 'A year of ', accent: 'real delivery', tail: '.' },
    period: 'Oct 2025 to Oct 2026, Qeevo Group, GitHub data',
    labels: ['PRs opened', 'PRs merged', 'Repositories', 'Teammates\' PRs reviewed']
  },
  about: {
    title: { lead: 'About ', accent: 'me', tail: '.' },
    lead: 'I like owning products from day one: initial architecture, CI/CD, Docker, theming, tests and deploy.',
    paragraphs: [
      'I started coding in a technical program in Systems Development at **ETEC**. Then I studied Database Technology at **Fatec São José dos Campos** and Systems Analysis and Development at **Univap**.',
      'I worked at **APTIV** with VB, C#, SQL, React and Node. Today I am at **Qeevo Group (formerly Quero Educação)**, working full-stack with Vue, Nuxt, Ruby, Node and Docker on AWS.',
      'At Qeevo, I was the tech lead of two products built from scratch: an embeddable payment gateway and a multi-tenant student portal.',
      'Away from code: coffee, football and music.'
    ],
    educationTitle: 'Education',
    education: [
      { period: 'Mar 2023 to Oct 2025', course: 'Systems Analysis and Development', school: 'Universidade do Vale do Paraíba (Univap)', status: 'Completed' },
      { period: 'Feb 2022 to Dec 2025', course: 'Database Technology', school: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { period: 'Feb 2019 to Dec 2021', course: 'Systems Development Technician', school: 'ETEC Profª Ilza Nascimento Pintus' },
      { period: 'Jan 2022 to Dec 2026', course: 'Advanced English (C1)', school: 'CNA Idiomas' }
    ]
  },
  projects: {
    title: { lead: 'Projects I ', accent: 'shipped', tail: '.' },
    intro: 'Products I built or led technically, from payments to cross-team coordination.',
    items: {
      gateway: {
        title: 'Embeddable payment gateway',
        description: 'Built from scratch for external partners to embed via iframe. Offer rendering, Card, PIX and Boleto, coupons, per-brand theming, CI/CD and Docker.',
        role: 'Tech lead',
        kpi: { value: '~33 PRs', label: 'across backend and frontend' }
      },
      studentArea: {
        title: 'Multi-tenant student portal',
        description: 'Payment history, self-service refunds, Card and PIX payment modal, PIX key validation and per-tenant localization. Architecture, setup and deploy were my responsibility.',
        role: 'Tech lead',
        kpi: { value: '~24 PRs', label: 'as the product\'s technical owner' }
      },
      refunds: {
        title: 'End-to-end refunds',
        description: 'More than 6 repositories and several teams: tracked requests, workers with retry, PIX refunds with e-mail fallback and an audit panel.',
        role: 'Cross-team',
        kpi: { value: '6+ repos', label: 'and cross-team coordination' }
      },
      marketplace: {
        title: 'Branded marketplace',
        description: 'E-mail OTP and Google OAuth login, multi-tenant header, filtered listing and dynamic brand slug.'
      },
      crossSell: {
        title: 'Cross-sell with A/B testing',
        description: 'Multi-offer post-checkout cross-sell, with cookie-based state and tracking.'
      },
      recurringPix: {
        title: 'Recurring PIX',
        description: 'PIX subscriptions, from the controller in the monolith to the payment modal in the student portal.'
      },
      expediente: {
        title: 'Expediente Bar',
        description: 'Website, order-number display and reviews for a live pagode bar in São José dos Campos: Supabase CMS without redeploys, Sympla events, Google opening hours and reviews, real-time number calls on the TV and OCR to read order tickets. I also handle the visual identity and marketing.',
        role: 'Design, web and marketing',
        kpi: { value: 'SEO 100', label: 'on Lighthouse, in production' }
      }
    }
  },
  experience: {
    title: { lead: 'Work ', accent: 'experience', tail: '.' },
    jobs: {
      qeevoEngineer: {
        period: 'Nov 2024 to present',
        role: 'Software Engineer',
        company: 'Qeevo Group',
        description: 'Full-stack work focused on payments, multi-tenant systems and embeddable products. Tech lead of two products launched from scratch, on an education marketplace with multiple brands and tenants.',
        highlights: [
          '295 pull requests from other developers reviewed in the last 12 months',
          'Contributions to the organization\'s shared design system',
          'A/B tests for post-checkout cross-sell',
          'Redesign of the subscription payment pages'
        ]
      },
      aptiv: {
        period: 'Apr 2023 to Nov 2024',
        role: 'Software Engineer',
        company: 'APTIV',
        kind: 'Internship',
        description: 'Internal tools and industrial process automation, integrated with production SQL Server databases.',
        highlights: [
          'Three-month internal project presented to leadership, with formal recognition'
        ]
      }
    }
  },
  stack: {
    title: { lead: 'My ', accent: 'stack', tail: '.' },
    intro: 'Tools I use every day, from the interface to the database.',
    all: 'All',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      infra: 'Infra and DevOps',
      data: 'Data'
    },
    notes: {
      'Vue.js': 'Pinia, Vuex and design system',
      'Nuxt': 'Payment gateway and student portal',
      'React': 'Marketplace and internal tools',
      'TypeScript': 'JavaScript, HTML, CSS and Tailwind',
      'Ruby on Rails': 'Payments, refunds and workers',
      'Node.js': 'REST and GraphQL APIs',
      'Python': 'ETL pipelines',
      'C#': 'Internal tools, alongside Visual Basic',
      'Docker': 'From local setup to production',
      'AWS': 'Production at Qeevo',
      'GitHub Actions': 'CI/CD pipelines',
      'Linux': 'Shell and servers',
      'PostgreSQL': 'Production at Qeevo',
      'SQL Server': 'Production databases at APTIV',
      'MySQL': 'Relational modeling',
      'Supabase': 'Managed Postgres'
    }
  },
  contact: {
    title: 'Contact.',
    lead: 'For roles, projects or a conversation about payments and multi-tenant products.',
    phone: '+55 12 98859-4305',
    city: 'São José dos Campos, SP, Brazil'
  }
}
