const siteUrl = 'https://alikhodr.dev'

export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],

  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    public: { siteUrl }
  },

  ui: {
    theme: {
      colors: ['primary', 'neutral']
    }
  },

  // Português na raiz, inglês em /en e espanhol em /es. Sem redirecionar pelo idioma do
  // navegador: o link que a pessoa recebeu abre no idioma escolhido por quem enviou.
  i18n: {
    baseUrl: siteUrl,
    defaultLocale: 'pt',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    locales: [
      { code: 'pt', language: 'pt-BR', name: 'Português' },
      { code: 'en', language: 'en', name: 'English' },
      { code: 'es', language: 'es', name: 'Español' }
    ]
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

  // Título, descrição, lang, canonical e hreflang são definidos por idioma em app.vue.
  app: {
    head: {
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: `${siteUrl}/assets/hero.webp` },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
      ]
    }
  },

  nitro: {
    prerender: {
      routes: ['/', '/en', '/es']
    }
  },

  compatibilityDate: '2026-10-01'
})
