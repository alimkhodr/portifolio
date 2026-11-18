<script setup lang="ts">
import DotPanel from '~/components/DotPanel.vue'

// Um slide do Deck: seção no topo, número no rodapé e o conteúdo numa área de 1728x824.
// panel usa o painel cobalto com pontos do topo do site.
const props = defineProps<{ section: string, panel?: boolean }>()

const deck = inject(deckKey)!
const index = deck.register()
const active = computed(() => deck.current.value === index)
provide(slideActiveKey, active)

const pad = (n: number) => String(n).padStart(2, '0')
const muted = computed(() => props.panel ? 'text-(--panel-muted)' : 'text-muted')
</script>

<template>
  <section
    class="deck-slide absolute inset-0"
    :class="{ 'is-active': active }"
    :inert="!active"
    :aria-hidden="!active"
    :aria-label="`${index + 1}. ${section}`"
  >
    <component :is="panel ? DotPanel : 'div'" class="absolute" :class="panel ? 'inset-6 rounded-[28px]' : 'inset-0'">
      <header
        class="absolute inset-x-0 top-0 flex items-center justify-between pt-14 font-mono text-[22px] tracking-[0.06em] uppercase"
        :class="[muted, panel ? 'px-[72px]' : 'px-24']"
      >
        <span>{{ section }}</span>
        <span class="flex items-center gap-3 font-sans text-[26px] font-medium tracking-normal normal-case" :class="panel ? 'text-white' : 'text-highlighted'">
          <span class="size-3.5" :class="panel ? 'bg-white' : 'bg-primary'" aria-hidden="true" />
          ali khodr
        </span>
      </header>

      <div class="absolute top-36 bottom-28" :class="panel ? 'inset-x-[72px]' : 'inset-x-24'">
        <slot />
      </div>

      <footer
        v-if="deck.ready.value"
        class="absolute bottom-12 font-mono text-[22px]"
        :class="[muted, panel ? 'right-[72px]' : 'right-24']"
      >
        {{ pad(index + 1) }} / {{ pad(deck.total.value) }}
      </footer>
    </component>
  </section>
</template>
