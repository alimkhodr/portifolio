<script setup lang="ts">
import type { SitePhoto } from '~/data/media'

// Crédito exigido pela licença CC BY-SA: autor, licença e aviso de que a foto foi recortada.
defineProps<{ photo: SitePhoto, place: string, photoBy: string, cropped: string }>()
</script>

<template>
  <figcaption class="text-xs leading-relaxed">
    {{ place }}. {{ photoBy }}:
    <a :href="photo.source" target="_blank" rel="noopener" class="underline underline-offset-2 hover:opacity-80">{{ photo.author }}</a>,
    <a :href="photo.licenseUrl" target="_blank" rel="noopener" class="underline underline-offset-2 hover:opacity-80">{{ photo.license }}</a>, {{ cropped }}.
  </figcaption>
</template>
