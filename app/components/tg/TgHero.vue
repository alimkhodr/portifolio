<script setup lang="ts">
import { fatecPhoto } from '~/data/media'
import { tgRepo } from '~/data/tg/shared'

const tg = useTgContent()
</script>

<template>
  <section id="topo" aria-labelledby="tg-title" class="px-2 pt-2 sm:px-3 sm:pt-3">
    <DotPanel>
      <div class="grid lg:grid-cols-[1.15fr_1fr]">
        <div class="flex flex-col justify-center gap-7 px-5 py-12 sm:px-10 sm:py-16 lg:py-20 lg:pr-6 lg:pl-14">
          <span class="rise inline-flex w-fit items-center gap-3 rounded-full py-1.5 pr-4 pl-3 text-sm ring ring-white/40 ring-inset" style="--i: 0">
            <BrandLogo id="fatec" size="h-4" class="text-white" />
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

        <figure class="m-2 mt-0 flex flex-col sm:m-3 sm:mt-0 lg:my-10 lg:mr-10 lg:ml-0">
          <div class="unclip relative min-h-[18rem] flex-1 overflow-hidden rounded-xl">
            <img
              :src="fatecPhoto.src"
              :width="fatecPhoto.width"
              :height="fatecPhoto.height"
              :alt="tg.hero.photoAlt"
              fetchpriority="high"
              class="absolute inset-0 size-full object-cover object-[50%_75%]"
            >
            <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20 ring-inset" aria-hidden="true" />
          </div>
          <PhotoCredit
            class="mt-2 px-1 text-(--panel-muted)"
            :photo="fatecPhoto"
            place="Fatec São José dos Campos"
            :photo-by="tg.labels.photoBy"
            :cropped="tg.labels.cropped"
          />
        </figure>
      </div>

      <!-- Ficha do trabalho em uma faixa sobre os filetes do painel. -->
      <dl class="grid border-t border-(--panel-line) lg:grid-cols-4">
        <div
          v-for="fact in tg.hero.facts"
          :key="fact.label"
          class="grid content-start gap-1 border-(--panel-line) px-5 py-4 not-first:border-t sm:px-10 lg:px-8 lg:py-6 lg:not-first:border-t-0 lg:not-first:border-l lg:first:pl-14"
        >
          <dt class="font-mono text-sm text-(--panel-muted)">
            {{ fact.label }}
          </dt>
          <dd class="text-white">
            {{ fact.value }}
          </dd>
        </div>
      </dl>
    </DotPanel>
  </section>
</template>
