<script setup lang="ts">
import { tgRepo } from '~/data/tg/shared'

const tg = useTgContent()
</script>

<template>
  <section id="topo" aria-labelledby="tg-title" class="px-2 pt-2 sm:px-3 sm:pt-3">
    <DotPanel>
      <div class="grid gap-12 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16 lg:px-14 lg:py-24">
        <div class="flex flex-col gap-7">
          <span class="rise inline-flex w-fit items-center rounded-full px-4 py-1.5 text-sm ring ring-white/40 ring-inset" style="--i: 0">
            {{ tg.hero.badge }}
          </span>

          <h1
            id="tg-title"
            class="rise max-w-[14ch] text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance"
            style="--i: 1"
          >
            {{ tg.hero.title }}
          </h1>

          <p class="rise max-w-[38ch] text-lg leading-relaxed text-(--panel-muted) sm:text-xl" style="--i: 2">
            {{ tg.hero.lead }}
          </p>

          <div class="rise flex flex-wrap items-center gap-3 pt-1" style="--i: 3">
            <UButton
              to="#projetos-integradores"
              external
              size="lg"
              :label="tg.hero.viewProjects"
              trailing-icon="i-ph-arrow-down"
              color="neutral"
              class="bg-white text-ink-950 hover:bg-cobalt-50 active:bg-cobalt-100 focus-visible:outline-white"
            />
            <UButton
              :to="tgRepo"
              external
              target="_blank"
              rel="noopener"
              size="lg"
              icon="i-simple-icons-github"
              :label="tg.labels.linkKinds.repo"
              color="neutral"
              variant="outline"
              class="bg-transparent text-white ring-white/45 hover:bg-white/10 active:bg-white/15 focus-visible:outline-white"
            />
          </div>
        </div>

        <!-- Ficha do trabalho, sobre os filetes do painel. -->
        <dl class="rise border-t border-(--panel-line)" style="--i: 4">
          <div
            v-for="fact in tg.hero.facts"
            :key="fact.label"
            class="grid gap-1 border-b border-(--panel-line) py-4 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-4"
          >
            <dt class="font-mono text-sm text-(--panel-muted)">
              {{ fact.label }}
            </dt>
            <dd class="text-white">
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </DotPanel>
  </section>
</template>
