<script setup lang="ts">
const content = useSiteContent()
const localePath = useLocalePath()
const { public: { siteUrl } } = useRuntimeConfig()

// lang no <html>, hreflang dos três idiomas, canonical e og:locale vêm do i18n.
const localeHead = useLocaleHead()
useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  link: localeHead.value.link,
  meta: localeHead.value.meta
}))

useSeoMeta({
  title: () => content.value.seo.title,
  description: () => content.value.seo.description,
  ogTitle: () => content.value.seo.title,
  ogDescription: () => content.value.seo.ogDescription,
  ogUrl: () => `${siteUrl}${localePath('/')}`
})
</script>

<template>
  <UApp :tooltip="{ delayDuration: 200 }">
    <a
      href="#conteudo"
      class="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-inverted px-4 py-2 text-sm font-medium text-inverted transition-transform focus:translate-y-0"
    >{{ content.ui.skipLink }}</a>

    <SiteHeader />

    <main id="conteudo">
      <NuxtPage />
    </main>

    <SiteFooter />
  </UApp>
</template>
