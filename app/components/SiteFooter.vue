<script setup lang="ts">
import { profile } from '~/data/shared'

const content = useSiteContent()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="py-8">
    <UContainer class="flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <span>© {{ year }} {{ profile.name }}</span>
      <span>
        {{ content.ui.madeWith }} <a href="https://ui.nuxt.com" target="_blank" rel="noopener" class="underline decoration-accented hover:text-highlighted">Nuxt UI</a>
      </span>
      <a href="#topo" class="inline-flex w-fit items-center gap-1.5 hover:text-highlighted">
        {{ content.ui.backToTop }}
        <UIcon name="i-ph-arrow-up" class="size-4" />
      </a>
    </UContainer>
  </footer>
</template>
