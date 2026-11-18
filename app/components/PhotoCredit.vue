<script setup lang="ts">
import type { SitePhoto } from '~/data/media'

// Crédito exigido pela licença CC BY-SA: autor, licença e aviso de que a foto foi recortada.
// as='p' quando o crédito fica longe da foto (fora de um <figure>).
withDefaults(defineProps<{ photo: SitePhoto, place: string, photoBy: string, cropped: string, as?: 'figcaption' | 'p' }>(), { as: 'figcaption' })
</script>

<template>
  <component :is="as" class="text-xs leading-relaxed">
    {{ place }}. {{ photoBy }}:
    <a :href="photo.source" target="_blank" rel="noopener" class="underline underline-offset-2 hover:opacity-80">{{ photo.author }}</a>,
    <a :href="photo.licenseUrl" target="_blank" rel="noopener" class="underline underline-offset-2 hover:opacity-80">{{ photo.license }}</a>, {{ cropped }}.
  </component>
</template>
