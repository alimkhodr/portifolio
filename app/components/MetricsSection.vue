<script setup lang="ts">
import { metrics } from '~/data/portfolio'

// Os números chegam prontos no HTML. Com JS e sem reduced motion, contam a partir do zero ao entrar na tela.
const root = ref<HTMLElement>()
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!root.value || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  const counters = root.value.querySelectorAll<HTMLElement>('[data-to]')

  const countUp = (el: HTMLElement) => {
    const target = Number(el.dataset.to)
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1)
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  // A contagem começa no primeiro pixel visível; até lá o valor real continua no lugar.
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      countUp(entry.target as HTMLElement)
      io.unobserve(entry.target)
    }
  })
  observer = io

  counters.forEach((el) => {
    // O que já está na tela ao carregar não reinicia.
    if (el.getBoundingClientRect().top > window.innerHeight) io.observe(el)
  })
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section ref="root" aria-labelledby="metrics-title" class="py-20 sm:py-28">
    <UContainer>
      <div class="mb-12 flex flex-col gap-3 sm:mb-14">
        <h2 id="metrics-title" class="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em] text-highlighted">
          Um ano de <span class="text-primary">entregas reais</span>.
        </h2>
        <p class="font-mono text-sm text-muted">
          {{ metrics.period }}
        </p>
      </div>

      <div class="node-grid grid-cols-2 lg:grid-cols-4">
        <NodeCell v-for="item in metrics.items" :key="item.label" class="group flex flex-col gap-10 p-5 sm:p-8">
          <UIcon :name="item.icon" class="size-6 text-muted transition-colors duration-300 group-hover:text-primary" />
          <div>
            <div
              :data-to="item.value"
              class="text-[clamp(2.75rem,6vw,4.5rem)] leading-none font-medium tracking-[-0.04em] text-highlighted tabular-nums"
            >
              {{ item.value }}
            </div>
            <div class="mt-3 text-sm text-muted sm:text-base">
              {{ item.label }}
            </div>
          </div>
        </NodeCell>
      </div>
    </UContainer>
  </section>
</template>
