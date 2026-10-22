<script setup lang="ts">
import type { Project } from '~/data/portfolio'
import { projects } from '~/data/portfolio'

// Bento de 4 colunas: o destaque ocupa 2x2, os dois seguintes 2x1, os menores 1x1.
// 4 + 2 + 2 + 4 = 12 células, três linhas cheias no desktop.
function span(project: Project, index: number) {
  if (project.featured) return 'md:col-span-2 lg:row-span-2'
  if (index <= 2) return 'md:col-span-2'
  return ''
}
</script>

<template>
  <section id="projetos" aria-labelledby="projects-title" class="py-20 sm:py-28">
    <UContainer>
      <div class="reveal mb-12 flex flex-col gap-4 sm:mb-14">
        <h2 id="projects-title" class="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em] text-highlighted">
          Projetos e <span class="text-primary">entregas</span>.
        </h2>
        <p class="max-w-[56ch] text-lg text-muted">
          Produtos que construí ou liderei tecnicamente, de pagamentos a coordenação entre times.
        </p>
      </div>

      <div class="node-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <NodeCell
          v-for="(project, index) in projects"
          :key="project.title"
          as="article"
          class="group flex flex-col p-6 sm:p-8"
          :class="[span(project, index), project.featured ? 'isolate bg-(--panel) text-white' : '']"
        >
          <template v-if="project.featured">
            <div class="dot-field" aria-hidden="true" />
            <div class="featured-light" aria-hidden="true" />
          </template>

          <div class="flex items-start justify-between gap-4">
            <UIcon
              :name="project.icon"
              class="size-7 shrink-0 transition-colors duration-300"
              :class="project.featured ? 'text-white' : 'text-muted group-hover:text-primary'"
            />
            <span
              v-if="project.role"
              class="rounded-full px-2.5 py-1 font-mono text-xs ring ring-inset"
              :class="project.featured ? 'text-white ring-white/45' : 'text-primary ring-primary/40'"
            >{{ project.role }}</span>
          </div>

          <h3
            class="mt-6 font-medium tracking-[-0.015em]"
            :class="project.featured ? 'max-w-[18ch] text-[clamp(1.75rem,3.2vw,2.75rem)] leading-[1.05] tracking-[-0.03em]' : 'text-xl text-highlighted'"
          >
            {{ project.title }}
          </h3>
          <p
            class="mt-3 leading-relaxed"
            :class="project.featured ? 'max-w-[46ch] text-lg text-(--panel-muted)' : 'text-muted'"
          >
            {{ project.description }}
          </p>

          <div class="mt-auto flex flex-wrap items-end justify-between gap-x-6 gap-y-5 pt-8">
            <div v-if="project.kpi">
              <div
                class="font-medium tracking-[-0.03em] tabular-nums"
                :class="project.featured ? 'text-5xl' : 'text-3xl text-highlighted'"
              >
                {{ project.kpi.value }}
              </div>
              <div class="mt-1 text-sm" :class="project.featured ? 'text-(--panel-muted)' : 'text-muted'">
                {{ project.kpi.label }}
              </div>
            </div>
            <ul class="flex flex-wrap gap-1.5" aria-label="Tecnologias">
              <li
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full px-2 py-0.5 font-mono text-[11px] ring ring-inset"
                :class="project.featured ? 'text-white ring-white/35' : 'text-muted ring-default'"
              >
                {{ tag }}
              </li>
            </ul>
          </div>
        </NodeCell>
      </div>
    </UContainer>
  </section>
</template>

<style scoped>
.featured-light {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* Fraco o bastante para as tags brancas do canto manterem 4.5:1. */
  background: radial-gradient(60% 50% at 105% 110%, rgb(186 204 255 / 0.24), transparent 70%);
}
</style>
