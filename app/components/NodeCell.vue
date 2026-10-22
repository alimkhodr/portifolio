<script setup lang="ts">
// Célula da grade: desenha os quatro marcadores dos cantos sobre os filetes.
withDefaults(defineProps<{ as?: string }>(), { as: 'div' })
</script>

<template>
  <component :is="as" class="node-cell">
    <span class="node node-tl" aria-hidden="true" />
    <span class="node node-tr" aria-hidden="true" />
    <span class="node node-bl" aria-hidden="true" />
    <span class="node node-br" aria-hidden="true" />
    <slot />
  </component>
</template>
