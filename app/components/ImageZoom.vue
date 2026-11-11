<script setup lang="ts">
// Miniatura que abre a imagem inteira num modal. O link aponta para o arquivo, então funciona sem JS.
withDefaults(defineProps<{
  src: string
  alt: string
  width: number
  height: number
  zoomLabel: string
  caption?: string
  fit?: 'cover' | 'contain'
  position?: string
  bg?: string
  // Classes do quadro (proporção).
  frame?: string
  eager?: boolean
}>(), {
  caption: undefined,
  fit: 'cover',
  position: '50% 50%',
  bg: undefined,
  frame: 'aspect-[16/10]',
  eager: false
})
</script>

<template>
  <figure class="min-w-0">
    <UModal :title="caption ?? alt" :ui="{ content: 'sm:max-w-5xl', body: 'p-2 sm:p-3' }">
      <a
        :href="src"
        class="group/zoom relative block overflow-hidden rounded-xl bg-muted ring-1 ring-default"
        :class="frame"
        :style="bg ? { backgroundColor: bg } : undefined"
        :aria-label="`${zoomLabel}: ${caption ?? alt}`"
        @click.prevent
      >
        <img
          :src="src"
          :alt="alt"
          :width="width"
          :height="height"
          :loading="eager ? 'eager' : 'lazy'"
          decoding="async"
          class="size-full transition-transform duration-700 ease-out-expo group-hover/zoom:scale-[1.02]"
          :class="fit === 'cover' ? 'object-cover' : 'object-contain'"
          :style="{ objectPosition: position }"
        >
        <span
          class="absolute right-2.5 bottom-2.5 grid size-8 place-items-center rounded-full bg-default/90 text-highlighted opacity-0 ring-1 ring-default transition-opacity duration-300 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
          aria-hidden="true"
        >
          <UIcon name="i-ph-arrows-out-simple" class="size-4" />
        </span>
      </a>

      <template #body>
        <img :src="src" :alt="alt" :width="width" :height="height" class="mx-auto h-auto max-h-[80dvh] w-auto rounded-lg">
      </template>
    </UModal>
    <figcaption v-if="caption" class="mt-2 text-sm text-muted">
      {{ caption }}
    </figcaption>
  </figure>
</template>
