// Imagens que não mudam entre idiomas: foto da Fatec, logos das instituições e diploma.
// Os textos alternativos e as legendas ficam nos arquivos de idioma.

export interface SitePhoto {
  src: string
  width: number
  height: number
  author: string
  source: string
  license: string
  licenseUrl: string
}

// Wikimedia Commons, categoria "FATEC São José dos Campos". Recortada no prédio.
export const fatecPhoto: SitePhoto = {
  src: '/assets/education/fatec-sjc.webp',
  width: 1600,
  height: 1223,
  author: 'basiliovideo',
  source: 'https://commons.wikimedia.org/wiki/File:Fatec_-_panoramio.jpg',
  license: 'CC BY-SA 3.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
}

// Logos usados como máscara (pegam a cor do texto). ratio = largura / altura do SVG.
// Fatec e CNA: domínio público no Wikimedia Commons. UNIFEOB e Centro Paula Souza: sites oficiais.
export const logos = {
  unifeob: { src: '/assets/logos/unifeob.svg', label: 'UNIFEOB', ratio: 141 / 32, height: 'h-4' },
  fatec: { src: '/assets/logos/fatec.svg', label: 'Fatec', ratio: 796 / 347, height: 'h-7' },
  cps: { src: '/assets/logos/cps.svg', label: 'Centro Paula Souza', ratio: 122 / 79.725, height: 'h-7' },
  cna: { src: '/assets/logos/cna.svg', label: 'CNA', ratio: 2757 / 1080, height: 'h-5' }
} as const

export type LogoId = keyof typeof logos

// Diploma da UNIFEOB com data de nascimento, RG, link e código de validação cobertos.
export const diploma = { src: '/assets/education/diploma-unifeob.webp', width: 1800, height: 1273 }

// Na mesma ordem de about.education nos arquivos de idioma.
export const educationMeta: { logo: LogoId, diploma?: boolean, tgPortfolio?: boolean }[] = [
  { logo: 'unifeob', diploma: true },
  { logo: 'fatec', tgPortfolio: true },
  { logo: 'cps' },
  { logo: 'cna' }
]
