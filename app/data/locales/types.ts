import type { JobId, ProjectId, StackGroupId, StackItemName } from '../shared'

// Título de seção com uma palavra em destaque: lead + accent + tail.
export interface Heading {
  lead: string
  accent: string
  tail: string
}

export interface SiteCopy {
  seo: {
    title: string
    description: string
    ogDescription: string
  }
  ui: {
    skipLink: string
    mainNav: string
    themeToggle: string
    openMenu: string
    language: string
    downloadCv: string
    cvLanguage: string
    technologies: string
    stackFilter: string
    viewProjects: string
    current: string
    madeWith: string
    backToTop: string
    heroImageAlt: string
  }
  // Na mesma ordem de sectionIds.
  nav: [string, string, string, string, string]
  hero: {
    badge: string
    lead: string
  }
  metrics: {
    title: Heading
    period: string
    labels: [string, string, string, string]
  }
  about: {
    title: Heading
    lead: string
    // **texto** vira destaque em negrito.
    paragraphs: string[]
    educationTitle: string
    education: { period: string, course: string, school: string, status?: string }[]
  }
  projects: {
    title: Heading
    intro: string
    items: Record<ProjectId, {
      title: string
      description: string
      role?: string
      kpi?: { value: string, label: string }
    }>
  }
  experience: {
    title: Heading
    jobs: Record<JobId, {
      period: string
      role: string
      company: string
      // Tipo de vínculo, quando não é tempo integral (ex.: estágio).
      kind?: string
      description: string
      highlights: string[]
    }>
  }
  stack: {
    title: Heading
    intro: string
    all: string
    groups: Record<StackGroupId, string>
    notes: Record<StackItemName, string>
  }
  contact: {
    title: string
    lead: string
    phone: string
    city: string
  }
}
