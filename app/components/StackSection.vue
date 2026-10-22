<script setup lang="ts">
import type { TabsItem } from '@nuxt/ui'
import { stack } from '~/data/portfolio'

// Barra de filtros em pílula, como a do catálogo de produtos da referência.
const tabs: TabsItem[] = [
  { label: 'Tudo', value: 'all' },
  ...stack.map(group => ({ label: group.label, value: group.id }))
]

const selected = ref<string | number>('all')
const visibleGroups = computed(() => selected.value === 'all'
  ? stack
  : stack.filter(group => group.id === selected.value))
</script>

<template>
  <section id="stack" aria-labelledby="stack-title" class="py-20 sm:py-28">
    <UContainer>
      <div class="reveal mb-10 flex flex-col gap-4">
        <h2 id="stack-title" class="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em] text-highlighted">
          Stack de <span class="text-primary">trabalho</span>.
        </h2>
        <p class="max-w-[56ch] text-lg text-muted">
          Ferramentas que uso no dia a dia, da interface ao banco de dados.
        </p>
      </div>

      <div class="-mx-4 mb-12 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:px-0">
        <UTabs
          v-model="selected"
          :items="tabs"
          :content="false"
          color="neutral"
          variant="pill"
          aria-label="Filtrar stack por área"
          :ui="{
            root: 'w-max',
            list: 'w-max gap-1 rounded-full bg-transparent p-1 ring ring-default ring-inset',
            indicator: 'rounded-full bg-primary/12 shadow-none ring ring-primary/30 ring-inset',
            trigger: 'grow-0 rounded-full px-4 py-2 text-sm data-[state=active]:text-primary data-[state=inactive]:text-muted'
          }"
        />
      </div>

      <div class="flex flex-col gap-14">
        <TransitionGroup name="group-fade">
          <div v-for="group in visibleGroups" :key="group.id">
            <h3 class="mono-label mb-4">
              {{ group.label }}
            </h3>
            <ul class="node-grid grid-cols-2 lg:grid-cols-4">
              <NodeCell v-for="item in group.items" :key="item.name" as="li" class="group flex flex-col p-5 sm:p-7">
                <UIcon :name="item.icon" class="size-6 text-muted transition-colors duration-300 group-hover:text-primary" />
                <span class="mt-5 font-medium text-highlighted">{{ item.name }}</span>
                <span class="mt-1 text-sm leading-snug text-muted">{{ item.note }}</span>
              </NodeCell>
            </ul>
          </div>
        </TransitionGroup>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.group-fade-enter-active {
  transition: opacity 0.45s var(--ease-out-expo), transform 0.45s var(--ease-out-expo);
}

.group-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

@media (prefers-reduced-motion: reduce) {
  .group-fade-enter-active {
    transition: none;
  }
}
</style>
