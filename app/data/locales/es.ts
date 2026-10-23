import type { SiteCopy } from './types'

export const es: SiteCopy = {
  seo: {
    title: 'Ali Mohamed Khodr | Ingeniero de Software',
    description: 'Ingeniero de software en Qeevo Group. Full-stack con Vue, Nuxt, Ruby y Node, enfocado en pagos, sistemas multi-tenant y productos construidos desde cero.',
    ogDescription: 'Full-stack enfocado en pagos, sistemas multi-tenant y productos construidos desde cero.'
  },
  ui: {
    skipLink: 'Saltar al contenido',
    mainNav: 'Principal',
    themeToggle: 'Cambiar entre tema claro y oscuro',
    openMenu: 'Abrir menú',
    language: 'Idioma',
    downloadCv: 'Descargar CV',
    cvLanguage: 'Elegir idioma del CV',
    technologies: 'Tecnologías',
    stackFilter: 'Filtrar stack por área',
    viewProjects: 'Ver proyectos',
    current: 'Actual',
    madeWith: 'Hecho con',
    backToTop: 'Volver arriba',
    heroImageAlt: 'Ali Mohamed Khodr sentado frente a dos monitores, con iluminación azul al fondo'
  },
  nav: ['Sobre mí', 'Proyectos', 'Experiencia', 'Stack', 'Contacto'],
  hero: {
    badge: 'Ingeniero de Software en Qeevo Group',
    lead: 'Construyo productos full-stack desde cero hasta producción, enfocado en pagos, sistemas multi-tenant y productos embebibles.'
  },
  metrics: {
    title: { lead: 'Un año de ', accent: 'entregas reales', tail: '.' },
    period: 'Oct 2025 a oct 2026, Qeevo Group, datos de GitHub',
    labels: ['PRs abiertos', 'PRs integrados', 'Repositorios', 'PRs de compañeros revisados']
  },
  about: {
    title: { lead: 'Sobre ', accent: 'mí', tail: '.' },
    lead: 'Me gusta asumir productos desde cero: arquitectura inicial, CI/CD, Docker, temas, pruebas y deploy.',
    paragraphs: [
      'Empecé a programar en la secundaria técnica en Desarrollo de Sistemas, en la **ETEC**. Después fui a la **Fatec São José dos Campos**, donde cambié a Base de Datos para conciliar la facultad con mi primer empleo.',
      'Pasé por **APTIV**, con VB, C#, SQL, React y Node. Hoy estoy en **Qeevo Group (antes Quero Educação)**, como full-stack con Vue, Nuxt, Ruby, Node y Docker en AWS.',
      'En Qeevo fui tech lead de dos productos construidos desde cero: una pasarela de pagos embebible y un portal de estudiantes multi-tenant.',
      'Fuera del código: café, fútbol y música.'
    ],
    educationTitle: 'Formación',
    education: [
      { period: 'Mar 2023 a oct 2025', course: 'Análisis y Desarrollo de Sistemas', school: 'Universidade do Vale do Paraíba (Univap)', status: 'Completado' },
      { period: 'Feb 2022 a la actualidad', course: 'Tecnología en Base de Datos', school: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { period: 'Feb 2019 a dic 2021', course: 'Técnico en Desarrollo de Sistemas', school: 'ETEC Profª Ilza Nascimento Pintus' },
      { period: 'Ene 2022 a dic 2026', course: 'Inglés avanzado (C1)', school: 'CNA Idiomas' }
    ]
  },
  projects: {
    title: { lead: 'Proyectos y ', accent: 'entregas', tail: '.' },
    intro: 'Productos que construí o lideré técnicamente, de pagos a coordinación entre equipos.',
    items: {
      gateway: {
        title: 'Pasarela de pagos embebible',
        description: 'Construida desde cero para que socios externos la integren vía iframe. Renderizado de ofertas, Tarjeta, PIX y Boleto, cupones, temas por marca, CI/CD y Docker.',
        role: 'Tech lead',
        kpi: { value: '~33 PRs', label: 'entre backend y frontend' }
      },
      studentArea: {
        title: 'Portal de estudiantes multi-tenant',
        description: 'Historial de pagos, reembolsos de autoservicio, modal de pago con Tarjeta y PIX, validación de clave PIX y localización por tenant. Arquitectura, setup y deploy bajo mi responsabilidad.',
        role: 'Tech lead',
        kpi: { value: '~24 PRs', label: 'como responsable técnico del producto' }
      },
      refunds: {
        title: 'Reembolsos de punta a punta',
        description: 'Más de 6 repositorios y equipos distintos: solicitudes con seguimiento, workers con reintentos, PIX con respaldo por correo y panel de auditoría.',
        role: 'Transversal',
        kpi: { value: '6+ repos', label: 'y coordinación entre equipos' }
      },
      marketplace: {
        title: 'Branded marketplace',
        description: 'Login con OTP por correo y Google OAuth, header multi-tenant, listado con filtros y brand slug dinámico.'
      },
      crossSell: {
        title: 'Cross-sell con pruebas A/B',
        description: 'Cross-sell multi-oferta post-checkout, con estado en cookies y seguimiento.'
      },
      recurringPix: {
        title: 'PIX recurrente',
        description: 'Suscripciones por PIX, desde el controller del monolito hasta el modal de pago del portal de estudiantes.'
      },
      api5sem: {
        title: 'API-5SEM, Fatec',
        description: 'Proyecto académico full-stack en monorepo con submódulos: backend, frontend y pipeline ETL.'
      }
    }
  },
  experience: {
    title: { lead: 'Experiencia ', accent: 'profesional', tail: '.' },
    jobs: {
      qeevoEngineer: {
        period: 'Abr 2025 a la actualidad',
        role: 'Ingeniero de Software',
        company: 'Qeevo Group',
        description: 'Full-stack enfocado en pagos, sistemas multi-tenant y productos embebibles. Tech lead de dos productos lanzados desde cero.',
        highlights: [
          '295 pull requests de otros desarrolladores revisados en los últimos 12 meses',
          'Contribuciones al design system compartido de la organización',
          'Pruebas A/B de cross-sell post-checkout'
        ]
      },
      qeevoFullstack: {
        period: '2024 a mar 2025',
        role: 'Desarrollador Full-stack',
        company: 'Qeevo Group (antes Quero Educação)',
        description: 'Productos del marketplace educativo con múltiples marcas y tenants. Primer contacto con Nuxt, Ruby y AWS en producción.',
        highlights: [
          'Rediseño de las páginas de pago de suscripciones',
          'Cross-sell multi-oferta post-checkout'
        ]
      },
      aptiv: {
        period: '2022 a 2024',
        role: 'Desarrollador de Herramientas Internas',
        company: 'APTIV',
        description: 'Herramientas internas y automatización de procesos industriales, integradas con bases SQL Server en producción.',
        highlights: [
          'Proyecto interno de tres meses presentado a la dirección, con reconocimiento formal'
        ]
      }
    }
  },
  stack: {
    title: { lead: 'Stack de ', accent: 'trabajo', tail: '.' },
    intro: 'Herramientas que uso a diario, de la interfaz a la base de datos.',
    all: 'Todo',
    groups: {
      frontend: 'Frontend',
      backend: 'Backend',
      infra: 'Infra y DevOps',
      data: 'Datos'
    },
    notes: {
      'Vue.js': 'Pinia, Vuex y design system',
      'Nuxt': 'Pasarela de pagos y portal de estudiantes',
      'React': 'Marketplace y herramientas internas',
      'TypeScript': 'JavaScript, HTML, CSS y Tailwind',
      'Ruby on Rails': 'Pagos, reembolsos y workers',
      'Node.js': 'APIs REST y GraphQL',
      'Python': 'Pipelines ETL',
      'C#': 'Herramientas internas, con Visual Basic',
      'Docker': 'Del entorno local a producción',
      'AWS': 'Producción en Qeevo',
      'GitHub Actions': 'Pipelines de CI/CD',
      'Linux': 'Shell y servidores',
      'PostgreSQL': 'Producción en Qeevo',
      'SQL Server': 'Bases en producción en APTIV',
      'MySQL': 'Modelado relacional',
      'Supabase': 'Postgres gestionado'
    }
  },
  contact: {
    title: 'Contacto.',
    lead: 'Para vacantes, proyectos o una conversación sobre pagos y productos multi-tenant.',
    phone: '+55 12 98859-4305',
    city: 'São José dos Campos, SP, Brasil'
  }
}
