<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

// Links reais (href) para /, /en e /es: funcionam sem JS e o crawler do prerender os encontra.
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const content = useSiteContent()

const currentName = computed(() => locales.value.find(item => item.code === locale.value)?.name)

// Cada nome de idioma leva o próprio lang, para o leitor de tela pronunciar "English" em inglês.
const languageOf = (name?: string) => locales.value.find(item => item.name === name)?.language

const items = computed<DropdownMenuItem[]>(() => locales.value.map(item => ({
  label: item.name,
  to: switchLocalePath(item.code),
  external: true
})))
</script>

<template>
  <UDropdownMenu :items="items" :content="{ align: 'end', sideOffset: 10 }">
    <UButton
      icon="i-ph-translate"
      :label="locale.toUpperCase()"
      color="neutral"
      variant="outline"
      class="ring-accented font-mono text-xs"
      :aria-label="content.ui.language"
    />
    <template #item-label="{ item }">
      <span :lang="languageOf(item.label)">{{ item.label }}</span>
    </template>
    <template #item-trailing="{ item }">
      <UIcon v-if="item.label === currentName" name="i-ph-check" class="size-4 shrink-0 text-primary" />
    </template>
  </UDropdownMenu>
</template>
