import type { Heading } from '../locales/types'
import type { TgLinkKind, TgProjectId } from './shared'

// Nível de domínio das hard skills, no formato pedido pela Fatec.
export type SkillLevel = 'teach' | 'alone' | 'help'

export interface TgProjectCopy {
  semester: string
  course: string
  // Complemento ao nome da empresa parceira, ex.: "(interno)".
  partnerNote?: string
  area: string
  problem: string
  solution: string
  tech: { name: string, use: string }[]
  contributions: string
  contributionItems: { title: string, text: string }[]
  // Aviso quando os commits foram feitos por uma conta compartilhada.
  commitsNote?: string
  coverAlt: string
  // Legendas na mesma ordem de gallery em app/data/tg/shared.ts.
  gallery: string[]
  hardSkills: { name: string, level: SkillLevel }[]
  softSkills: { name: string, where: string }[]
}

export interface TgCopy {
  seo: {
    title: string
    description: string
  }
  hero: {
    badge: string
    title: string
    lead: string
    viewProjects: string
    photoAlt: string
    facts: { label: string, value: string }[]
  }
  about: {
    title: Heading
    // **texto** vira destaque em negrito.
    paragraphs: string[]
    skillsTitle: string
  }
  timeline: {
    title: Heading
    intro: string
  }
  closing: {
    title: Heading
    text: string
  }
  labels: {
    partner: string
    team: string
    professors: string
    moreDetails: string
    lessDetails: string
    area: string
    problem: string
    solution: string
    tech: string
    contributions: string
    hardSkills: string
    softSkills: string
    links: string
    gallery: string
    zoom: string
    photoBy: string
    cropped: string
    levels: Record<SkillLevel, string>
    linkKinds: Record<TgLinkKind, string>
  }
  projects: Record<TgProjectId, TgProjectCopy>
}
