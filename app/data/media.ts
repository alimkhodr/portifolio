import type { JobId } from '~/data/shared'

// Imagens que não mudam entre idiomas: foto da Fatec, logos das instituições e empresas e diploma.
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
// Fatec, CNA e APTIV: domínio público no Wikimedia Commons. UNIFEOB e Qeevo (qeevo.com.br): sites oficiais.
// Etec: site da Etec Profª Ilza Nascimento Pintus (etecsjcampos.com.br), só a palavra "Etec".
// Qeevo, Etec e VisionData viram PNG só com o alfa.
export const logos = {
  unifeob: { src: '/assets/logos/unifeob.svg', label: 'UNIFEOB', ratio: 141 / 32, height: 'h-4' },
  fatec: { src: '/assets/logos/fatec.svg', label: 'Fatec', ratio: 796 / 347, height: 'h-7' },
  etec: { src: '/assets/logos/etec.png', label: 'Etec', ratio: 643 / 244, height: 'h-5' },
  cna: { src: '/assets/logos/cna.svg', label: 'CNA', ratio: 2757 / 1080, height: 'h-5' },
  qeevo: { src: '/assets/logos/qeevo.png', label: 'Qeevo', ratio: 1004 / 283, height: 'h-6' },
  aptiv: { src: '/assets/logos/aptiv.svg', label: 'APTIV', ratio: 171 / 22, height: 'h-3.5' },
  // Logo do projeto de destaque do TG (banner do README do VisionData, só o alfa).
  visiondata: { src: '/assets/logos/visiondata.png', label: 'VisionData', ratio: 1200 / 362, height: 'h-10' }
} as const

export type LogoId = keyof typeof logos

// Diploma da UNIFEOB com data de nascimento, RG, link e código de validação cobertos.
export const diploma = { src: '/assets/education/diploma-unifeob.webp', width: 1800, height: 1273 }

// Na mesma ordem de about.education nos arquivos de idioma.
export const educationMeta: { logo: LogoId, diploma?: boolean, tgPortfolio?: boolean }[] = [
  { logo: 'unifeob', diploma: true },
  { logo: 'fatec', tgPortfolio: true },
  { logo: 'etec' },
  { logo: 'cna' }
]

// Logo de cada empresa da experiência.
export const jobLogos: Record<JobId, LogoId> = {
  qeevoEngineer: 'qeevo',
  aptiv: 'aptiv'
}
