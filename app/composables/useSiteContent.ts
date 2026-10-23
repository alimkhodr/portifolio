import type { LocaleCode } from '~/data/shared'
import type { SiteCopy } from '~/data/locales/types'
import { cvFiles, jobMeta, metricValues, projectMeta, sectionIds, stackMeta } from '~/data/shared'
import { en } from '~/data/locales/en'
import { es } from '~/data/locales/es'
import { pt } from '~/data/locales/pt'

const copies: Record<LocaleCode, SiteCopy> = { pt, en, es }

// Junta o texto do idioma atual com os dados que não mudam (ícones, tags, números, links).
export function useSiteContent() {
  const { locale } = useI18n()

  return computed(() => {
    const code: LocaleCode = locale.value in copies ? locale.value as LocaleCode : 'pt'
    const copy = copies[code]

    return {
      ...copy,
      locale: code,
      cv: cvFiles.find(file => file.locale === code) ?? cvFiles[0]!,
      navLinks: sectionIds.map((id, index) => ({ label: copy.nav[index], href: `#${id}` })),
      metricItems: metricValues.map((metric, index) => ({ ...metric, label: copy.metrics.labels[index] })),
      projectItems: projectMeta.map(meta => ({ ...meta, ...copy.projects.items[meta.id] })),
      jobItems: jobMeta.map(meta => ({ ...meta, ...copy.experience.jobs[meta.id] })),
      stackGroups: stackMeta.map(group => ({
        id: group.id,
        label: copy.stack.groups[group.id],
        items: group.items.map(item => ({ ...item, note: copy.stack.notes[item.name] }))
      }))
    }
  })
}
