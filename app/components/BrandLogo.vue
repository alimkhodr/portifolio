<script setup lang="ts">
import type { LogoId } from '~/data/media'
import { logos } from '~/data/media'

// Logo da instituição como máscara: pega a cor do texto e acompanha o tema claro e escuro.
// size troca a altura padrão do logo (classe Tailwind, ex.: 'h-4').
const props = defineProps<{ id: LogoId, size?: string }>()
const logo = computed(() => logos[props.id])
</script>

<template>
  <span
    role="img"
    :aria-label="logo.label"
    class="brand-logo inline-block shrink-0 bg-current"
    :class="size ?? logo.height"
    :style="{ aspectRatio: logo.ratio, '--logo': `url(${logo.src})` }"
  />
</template>

<style scoped>
.brand-logo {
  -webkit-mask: var(--logo) left center / contain no-repeat;
  mask: var(--logo) left center / contain no-repeat;
}
</style>
