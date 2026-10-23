<script setup lang="ts">
import type { Heading } from '~/data/locales/types'

withDefaults(defineProps<{ heading: Heading, as?: string }>(), { as: 'h2' })
</script>

<template>
  <component :is="as" class="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em] text-highlighted">
    {{ heading.lead }}<span class="text-primary">{{ heading.accent }}</span>{{ heading.tail }}
  </component>
</template>
