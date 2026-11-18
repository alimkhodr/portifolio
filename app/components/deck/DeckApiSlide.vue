<script setup lang="ts">
import type { ApiSlide } from '~/data/tg/slides'

// Slide rápido de uma API: dados do semestre, o que fiz e uma ou duas capturas.
const props = defineProps<{ slide: ApiSlide, section: string }>()

const tg = useTgContent()
const project = computed(() => tg.value.projectItems.find(item => item.id === props.slide.id)!)
const [main, extra] = props.slide.shots
</script>

<template>
  <DeckSlide :section="section">
    <div class="grid h-full grid-cols-[minmax(0,760px)_minmax(0,1fr)] gap-[72px]">
      <div class="flex flex-col justify-center">
        <div class="deck-in flex flex-wrap items-center gap-3 font-mono text-[22px] text-muted" style="--i: 0">
          <span class="text-primary">{{ project.period }}</span>
          <span class="rounded-full px-3.5 py-1 ring ring-default ring-inset">{{ project.semester }}</span>
          <span class="rounded-full px-3.5 py-1 ring ring-default ring-inset">{{ project.course }}</span>
        </div>
        <h2 class="deck-in mt-6 text-[84px] leading-none font-medium tracking-[-0.035em] text-highlighted" style="--i: 1">
          {{ project.name }}
        </h2>
        <p class="deck-in mt-4 text-[30px] font-medium text-primary" style="--i: 1">
          {{ project.partner.name }} <span class="font-normal text-muted">· Equipe {{ project.team }}</span>
        </p>
        <p class="deck-in mt-7 text-[30px] leading-snug" style="--i: 2">
          {{ slide.summary }}
        </p>

        <div class="deck-in mt-10 font-mono text-[22px] tracking-[0.06em] text-muted uppercase" style="--i: 3">
          O que eu fiz
        </div>
        <ul class="mt-4 space-y-4">
          <li
            v-for="(item, position) in slide.did"
            :key="item"
            class="deck-in flex gap-5 text-[30px] leading-snug text-highlighted"
            :style="{ '--i': 4 + position }"
          >
            <span class="mt-[0.5em] size-3 shrink-0 bg-primary" aria-hidden="true" />
            {{ item }}
          </li>
        </ul>

        <ul class="deck-in mt-10 flex flex-wrap gap-2.5" style="--i: 6" aria-label="Tecnologias">
          <li v-for="tag in slide.tags" :key="tag" class="rounded-full px-3.5 py-1 font-mono text-[20px] text-muted ring ring-default ring-inset">
            {{ tag }}
          </li>
        </ul>
      </div>

      <div class="relative flex min-w-0 items-center">
        <div class="deck-in w-full" :class="{ 'pb-[150px]': extra }" style="--i: 2">
          <DeckShot :image="main!.image" :alt="main!.alt" :frame="main!.frame" class="shadow-2xl shadow-black/20" />
        </div>
        <div v-if="extra" class="deck-in absolute right-[-24px] bottom-0 w-[58%]" style="--i: 4">
          <DeckShot :image="extra.image" :alt="extra.alt" :frame="extra.frame" class="shadow-2xl shadow-black/30" />
        </div>
      </div>
    </div>
  </DeckSlide>
</template>
