<script setup lang="ts">
// Painel cobalto com campo de pontos. Os pontos acendem sob o cursor:
// a posição vai direto para variáveis CSS, sem passar pela reatividade do Vue.
const panel = ref<HTMLElement>()
let frame = 0

function canGlow() {
  return window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches
}

function onMove(event: PointerEvent) {
  if (!panel.value || !canGlow()) return
  const el = panel.value
  const { clientX, clientY } = event
  cancelAnimationFrame(frame)
  frame = requestAnimationFrame(() => {
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${clientX - rect.left}px`)
    el.style.setProperty('--y', `${clientY - rect.top}px`)
    el.style.setProperty('--glow', '1')
  })
}

function onLeave() {
  cancelAnimationFrame(frame)
  panel.value?.style.setProperty('--glow', '0')
}

onBeforeUnmount(() => cancelAnimationFrame(frame))
</script>

<template>
  <div ref="panel" class="panel" @pointermove="onMove" @pointerleave="onLeave">
    <div class="panel-light" aria-hidden="true" />
    <div class="dot-field" aria-hidden="true" />
    <div class="dot-field dot-field--glow" aria-hidden="true" />
    <slot />
  </div>
</template>

<style scoped>
/* Luz baixa no rodapé do painel, como no topo da referência. */
.panel-light {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(55% 45% at 50% 112%, rgb(186 204 255 / 0.42), transparent 70%),
    radial-gradient(80% 60% at 0% 0%, rgb(20 34 140 / 0.35), transparent 60%);
}
</style>
