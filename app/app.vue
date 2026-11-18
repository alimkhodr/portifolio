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
    <!-- Cabeçalho, rodapé e link de pular ficam em layouts/default.vue; os slides usam layouts/deck.vue. -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
