<script setup lang="ts">
import type { TgImage } from '~/data/tg/shared'

// Captura de tela num quadro arredondado. fit 'contain' mostra a imagem inteira sobre a cor dela.
withDefaults(defineProps<{ image: TgImage, alt: string, frame?: string }>(), { frame: 'aspect-[16/10]' })
</script>

<template>
  <div
    class="overflow-hidden rounded-xl bg-muted ring-1 ring-default"
    :class="frame"
    :style="image.bg ? { backgroundColor: image.bg } : undefined"
  >
    <img
      :src="image.src"
      :alt="alt"
      :width="image.width"
      :height="image.height"
      decoding="async"
      class="size-full"
      :class="image.fit === 'contain' ? 'object-contain' : 'object-cover'"
      :style="{ objectPosition: image.position ?? '50% 50%' }"
    >
  </div>
</template>
