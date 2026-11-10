<script setup lang="ts">
import { tgPath } from '~/data/tg/shared'

// Portfólio do Trabalho de Graduação (Fatec SJC). Título e descrição próprios; o resto do <head> vem de app.vue.
const tg = useTgContent()
const localePath = useLocalePath()
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: () => tg.value.seo.title,
  description: () => tg.value.seo.description,
  ogTitle: () => tg.value.seo.title,
  ogDescription: () => tg.value.seo.description,
  ogUrl: () => `${siteUrl}${localePath(tgPath)}`
})
</script>

<template>
  <div>
    <TgHero />
    <TgAbout />
    <TgTimeline />
    <TgClosing />
    <ContactSection />
  </div>
</template>
