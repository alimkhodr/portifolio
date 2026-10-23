<script setup lang="ts">
// **trecho** vira <strong>; o resto é texto puro, sem v-html.
const props = defineProps<{ text: string }>()

const parts = computed(() => props.text.split('**').map((value, index) => ({ value, strong: index % 2 === 1 })))
</script>

<template>
  <p>
    <template v-for="(part, index) in parts" :key="index">
      <strong v-if="part.strong" class="font-medium text-highlighted">{{ part.value }}</strong>
      <template v-else>
        {{ part.value }}
      </template>
    </template>
  </p>
</template>
