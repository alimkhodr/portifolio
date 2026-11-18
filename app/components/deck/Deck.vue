<script setup lang="ts">
// Apresentação em 16:9. O canvas tem 1920x1080 e é escalado para caber na janela,
// então cada slide fica igual em qualquer tela ou projetor.
// Teclado: → ↓ PageDown Espaço Enter avançam; ← ↑ PageUp voltam; Home e End vão às pontas;
// F alterna a tela cheia e D o tema. Clique avança (no quarto esquerdo da tela, volta).
// O número do slide fica no endereço (#5), então recarregar não perde o lugar.
const current = ref(0)
const total = ref(0)
const ready = ref(false)
const scale = ref(1)
const colorMode = useColorMode()

provide(deckKey, {
  current: readonly(current),
  total: readonly(total),
  ready: readonly(ready),
  register: () => total.value++
})

function go(index: number) {
  current.value = Math.min(Math.max(index, 0), total.value - 1)
}

function fit() {
  scale.value = Math.min(window.innerWidth / 1920, window.innerHeight / 1080)
}

function toggleFullscreen() {
  if (document.fullscreenElement) document.exitFullscreen()
  else document.documentElement.requestFullscreen()
}

const nextKeys = ['ArrowRight', 'ArrowDown', 'PageDown', ' ', 'Enter']
const prevKeys = ['ArrowLeft', 'ArrowUp', 'PageUp']

function onKey(event: KeyboardEvent) {
  if (event.metaKey || event.ctrlKey || event.altKey) return
  // Enter e Espaço continuam funcionando em links e botões.
  if ((event.key === 'Enter' || event.key === ' ') && (event.target as HTMLElement).closest('a, button')) return
  const key = event.key.length === 1 ? event.key.toLowerCase() : event.key
  if (nextKeys.includes(key)) go(current.value + 1)
  else if (prevKeys.includes(key)) go(current.value - 1)
  else if (key === 'Home') go(0)
  else if (key === 'End') go(total.value - 1)
  else if (key === 'f') toggleFullscreen()
  else if (key === 'd') colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  else return
  event.preventDefault()
}

function onClick(event: MouseEvent) {
  if ((event.target as HTMLElement).closest('a, button')) return
  go(event.clientX < window.innerWidth / 4 ? current.value - 1 : current.value + 1)
}

watch(current, (index) => {
  history.replaceState(history.state, '', `#${index + 1}`)
})

// Abrir ou editar o endereço com #5 leva ao slide 5.
function fromHash() {
  const number = Number(location.hash.slice(1))
  if (number) go(number - 1)
}

onMounted(() => {
  fit()
  fromHash()
  ready.value = true
  window.addEventListener('resize', fit)
  window.addEventListener('keydown', onKey)
  window.addEventListener('hashchange', fromHash)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', fit)
  window.removeEventListener('keydown', onKey)
  window.removeEventListener('hashchange', fromHash)
})
</script>

<template>
  <div class="deck fixed inset-0 overflow-hidden bg-default select-none" @click="onClick">
    <div
      class="absolute top-1/2 left-1/2 h-[1080px] w-[1920px] transition-opacity duration-300"
      :class="{ 'opacity-0': !ready }"
      :style="{ transform: `translate(-50%, -50%) scale(${scale})` }"
    >
      <slot />

      <div class="absolute inset-x-0 bottom-0 z-10 h-1.5" aria-hidden="true">
        <div
          class="h-full bg-primary transition-[width] duration-500 ease-out-expo"
          :style="{ width: `${((current + 1) / Math.max(total, 1)) * 100}%` }"
        />
      </div>
    </div>

    <p class="sr-only" aria-live="polite">
      Slide {{ current + 1 }} de {{ total }}
    </p>
  </div>
</template>

<style>
/* Só o slide da vez fica visível; os outros saem da árvore de acessibilidade (inert). */
.deck-slide {
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.45s var(--ease-out-expo), visibility 0s linear 0.45s;
}

.deck-slide.is-active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.45s var(--ease-out-expo);
}

/* O conteúdo sobe em cascata toda vez que o slide entra (--i dá a ordem). */
@media (prefers-reduced-motion: no-preference) {
  .deck-slide.is-active .deck-in {
    animation: rise 0.8s var(--ease-out-expo) both;
    animation-delay: calc(var(--i, 0) * 80ms + 120ms);
  }
}
</style>
