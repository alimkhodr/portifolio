<script setup lang="ts">
// Trecho de SQL em fonte mono. As palavras-chave ficam na cor de destaque.
const props = defineProps<{ lines: string[], caption?: string }>()

const keywords = ['SELECT', 'FROM', 'JOIN', 'ON', 'WHERE', 'GROUP BY', 'ORDER BY', 'AVG', 'DATEDIFF', 'MERGE', 'USING', 'AS',
  'WHEN', 'MATCHED', 'NOT', 'BY', 'THEN', 'UPDATE', 'SET', 'INSERT', 'PARTITION', 'RANGE', 'INTERVAL', 'SUBPARTITION', 'LIST']
const keywordSet = new Set(keywords)
// O grupo de captura faz o split manter as palavras-chave como partes próprias.
const splitter = new RegExp(`\\b(${keywords.join('|')})\\b`)

const tokens = computed(() => props.lines.map(line =>
  line.split(splitter).map(text => ({ text, keyword: keywordSet.has(text) }))
))
</script>

<template>
  <figure class="min-w-0">
    <pre class="overflow-hidden rounded-xl bg-muted px-7 py-6 font-mono text-[20px] leading-[1.6] text-toned ring-1 ring-default"><code><template v-for="(line, row) in tokens" :key="row"><span v-for="(part, col) in line" :key="col" :class="{ 'text-primary': part.keyword }">{{ part.text }}</span>{{ '\n' }}</template></code></pre>
    <figcaption v-if="caption" class="mt-3 text-[20px] text-muted">
      {{ caption }}
    </figcaption>
  </figure>
</template>
