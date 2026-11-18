<script setup lang="ts">
import type { SchemaTable } from '~/data/tg/slides'

// Esquema dimensional na grade de filetes: a tabela fato no meio, as dimensões dos dois lados.
const props = defineProps<{ fact: SchemaTable, left: SchemaTable[], right: SchemaTable[], compact?: boolean }>()
const rows = computed(() => Math.max(props.left.length, props.right.length))
</script>

<template>
  <ul
    class="node-grid grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)]"
    :style="{ gridTemplateRows: `repeat(${rows}, minmax(0, auto))` }"
  >
    <NodeCell
      as="li"
      class="flex flex-col justify-center gap-2 bg-primary! p-6 text-inverted"
      :style="{ gridColumn: 2, gridRow: `1 / span ${rows}` }"
    >
      <span class="font-mono text-[18px] uppercase opacity-80">Fato</span>
      <span class="font-mono font-medium" :class="compact ? 'text-[24px]' : 'text-[28px]'">{{ fact.name }}</span>
      <span v-if="fact.note" class="text-[20px] leading-snug opacity-85">{{ fact.note }}</span>
    </NodeCell>
    <NodeCell
      v-for="(table, index) in left"
      :key="table.name"
      as="li"
      class="flex flex-col justify-center"
      :class="compact ? 'px-5 py-4' : 'min-h-[120px] px-6 py-5'"
      :style="{ gridColumn: 1, gridRow: index + 1 }"
    >
      <span class="font-mono text-highlighted" :class="compact ? 'text-[19px]' : 'text-[22px]'">{{ table.name }}</span>
      <span v-if="table.note" class="text-[17px] leading-snug text-muted">{{ table.note }}</span>
    </NodeCell>
    <NodeCell
      v-for="(table, index) in right"
      :key="table.name"
      as="li"
      class="flex flex-col justify-center"
      :class="compact ? 'px-5 py-4' : 'min-h-[120px] px-6 py-5'"
      :style="{ gridColumn: 3, gridRow: index + 1 }"
    >
      <span class="font-mono text-highlighted" :class="compact ? 'text-[19px]' : 'text-[22px]'">{{ table.name }}</span>
      <span v-if="table.note" class="text-[17px] leading-snug text-muted">{{ table.note }}</span>
    </NodeCell>
  </ul>
</template>
