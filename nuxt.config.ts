const siteUrl = 'https://alimkhodr.netlify.app'
const title = 'Ali Mohamed Khodr | Software Engineer'
const description = 'Software Engineer na Qeevo Group. Full-stack com Vue, Nuxt, Ruby e Node. Foco em pagamentos, multi-tenant e produtos construídos do zero.'

export default defineNuxtConfig({
  modules: ['@nuxt/ui'],

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  ui: {
    theme: {
      colors: ['primary', 'neutral']
    }
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark'
  },

  // Ícones vão no bundle do cliente: o site é estático e não tem o endpoint /api/_nuxt_icon.
  icon: {
    provider: 'none',
    clientBundle: {
      scan: {
        globInclude: ['app/**/*.{vue,ts}']
      }
    }
  },

  fonts: {
    families: [
      { name: 'Host Grotesk', provider: 'google', weights: [400, 500, 600] },
      { name: 'DM Mono', provider: 'google', weights: [400, 500] }
    ]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: title },
        { property: 'og:description', content: 'Full-stack com foco em pagamentos, multi-tenant e produtos construídos do zero.' },
        { property: 'og:image', content: `${siteUrl}/assets/hero.webp` },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: siteUrl }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/']
    }
  },

  compatibilityDate: '2026-10-01'
})
