<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import { cvFiles } from '~/data/portfolio'

// "panel": sobre o painel cobalto. "page": sobre o fundo da página.
const props = withDefaults(defineProps<{ tone?: 'panel' | 'page', size?: 'md' | 'lg' | 'xl' }>(), {
  tone: 'page',
  size: 'lg'
})

const [main] = cvFiles

const items: DropdownMenuItem[] = cvFiles.map(cv => ({
  label: cv.label,
  icon: 'i-ph-file-pdf',
  to: cv.href,
  external: true,
  target: '_blank'
}))

const tone = computed(() => props.tone === 'panel'
  ? 'ring ring-inset ring-white/45 bg-transparent text-white hover:bg-white/10 active:bg-white/15 focus-visible:outline-white'
  : 'ring ring-inset ring-accented bg-default text-highlighted hover:bg-muted active:bg-muted')
</script>

<template>
  <UFieldGroup :size="size">
    <UButton
      :to="main?.href"
      external
      :download="main?.file"
      icon="i-ph-download-simple"
      label="Baixar CV"
      color="neutral"
      variant="outline"
      :class="tone"
    />
    <UDropdownMenu :items="items" :content="{ align: 'end', sideOffset: 8 }">
      <UButton
        icon="i-ph-caret-down"
        color="neutral"
        variant="outline"
        aria-label="Escolher idioma do CV"
        :class="tone"
      />
    </UDropdownMenu>
  </UFieldGroup>
</template>
