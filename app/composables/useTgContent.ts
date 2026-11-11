import type { LocaleCode } from '~/data/shared'
import type { TgCopy } from '~/data/tg/types'
import { tgProjects, tgSkills } from '~/data/tg/shared'
import { tgEn } from '~/data/tg/en'
import { tgEs } from '~/data/tg/es'
import { tgPt } from '~/data/tg/pt'

const copies: Record<LocaleCode, TgCopy> = { pt: tgPt, en: tgEn, es: tgEs }
const listLocales: Record<LocaleCode, string> = { pt: 'pt-BR', en: 'en', es: 'es' }

// Conteúdo da página do portfólio do TG: texto do idioma atual + dados fixos de app/data/tg/shared.ts.
export function useTgContent() {
  const { locale } = useI18n()

  return computed(() => {
    const code: LocaleCode = locale.value in copies ? locale.value as LocaleCode : 'pt'
    const copy = copies[code]
    const list = new Intl.ListFormat(listLocales[code], { type: 'conjunction' })

    return {
      ...copy,
      skills: tgSkills,
      projectItems: tgProjects.map((meta, index) => ({
        ...meta,
        ...copy.projects[meta.id],
        latest: index === tgProjects.length - 1,
        // Imagens de shared.ts com o texto alternativo e as legendas do idioma.
        cover: { ...meta.cover, alt: copy.projects[meta.id].coverAlt },
        galleryItems: meta.gallery.map((image, position) => ({ ...image, caption: copy.projects[meta.id].gallery[position] ?? meta.name })),
        professorsText: meta.professors ? list.format(meta.professors) : undefined,
        links: meta.links.map(link => ({
          href: link.href,
          label: link.kind === 'repo' && link.name ? link.name : copy.labels.linkKinds[link.kind]
        }))
      }))
    }
  })
}
