<script setup lang="ts">
import type { SkillLevel } from '~/data/tg/types'

const tg = useTgContent()

// Quem sabe ensinar ganha o pill cheio; os outros níveis ficam só no contorno.
const levelClass: Record<SkillLevel, string> = {
  teach: 'bg-primary text-inverted ring-primary',
  alone: 'text-primary ring-primary/40',
  help: 'text-muted ring-default'
}
</script>

<template>
  <section id="projetos-integradores" aria-labelledby="tg-timeline-title" class="py-20 sm:py-28">
    <UContainer>
      <div class="reveal mb-12 flex flex-col gap-4 sm:mb-16">
        <SectionTitle id="tg-timeline-title" :heading="tg.timeline.title" />
        <p class="max-w-[60ch] text-lg text-muted">
          {{ tg.timeline.intro }}
        </p>
      </div>

      <ol class="relative">
        <li
          v-for="project in tg.projectItems"
          :id="project.id"
          :key="project.id"
          class="relative grid gap-4 pb-16 pl-9 last:pb-0 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-x-16 md:pl-0"
        >
          <!-- Trilho: linha tracejada com um marcador por semestre; o mais recente fica cheio. -->
          <span class="rail absolute top-2 bottom-0 left-[5px] w-px md:left-[15rem]" aria-hidden="true" />
          <span
            class="absolute top-1.5 left-0 size-[11px] border md:left-[calc(15rem-5px)]"
            :class="project.latest ? 'border-primary bg-primary' : 'border-accented bg-default'"
            aria-hidden="true"
          />

          <div class="reveal flex flex-wrap items-center gap-3 font-mono text-sm text-muted md:flex-col md:items-start md:gap-2 md:pt-0.5">
            <span :class="{ 'text-primary': project.latest }">{{ project.period }}</span>
            <span class="rounded-full px-2 py-0.5 text-xs ring ring-default ring-inset">{{ project.semester }}</span>
            <span class="rounded-full px-2 py-0.5 text-xs ring ring-default ring-inset">{{ project.course }}</span>
          </div>

          <article class="reveal min-w-0">
            <h3 class="text-2xl font-medium tracking-[-0.02em] text-highlighted">
              {{ project.name }}
            </h3>
            <div class="mt-1 flex flex-wrap items-center gap-x-1.5 font-medium text-primary">
              <span class="sr-only">{{ tg.labels.partner }}:</span>
              <a :href="project.partner.href" target="_blank" rel="noopener" class="underline-offset-4 hover:underline">{{ project.partner.name }}</a>
              <span v-if="project.partnerNote" class="font-normal text-muted">{{ project.partnerNote }}</span>
            </div>
            <dl class="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
              <div class="flex gap-1.5">
                <dt>{{ tg.labels.team }}:</dt>
                <dd class="text-toned">
                  {{ project.team }}
                </dd>
              </div>
              <div v-if="project.professorsText" class="flex gap-1.5">
                <dt>{{ tg.labels.professors }}:</dt>
                <dd class="text-toned">
                  {{ project.professorsText }}
                </dd>
              </div>
            </dl>

            <!-- Capa ao lado do resumo no desktop; acima dele no celular. -->
            <div class="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem] xl:gap-10">
              <ImageZoom
                class="xl:order-2"
                :src="project.cover.src"
                :alt="project.cover.alt"
                :width="project.cover.width"
                :height="project.cover.height"
                :fit="project.cover.fit"
                :position="project.cover.position"
                :bg="project.cover.bg"
                :zoom-label="tg.labels.zoom"
              />

              <div class="xl:order-1">
                <p class="max-w-[64ch] leading-relaxed">
                  {{ project.solution }}
                </p>

                <div class="mt-5 max-w-[64ch]">
                  <h4 class="font-medium text-highlighted">
                    {{ tg.labels.contributions }}
                  </h4>
                  <p class="mt-1.5 leading-relaxed text-muted">
                    {{ project.contributions }}
                  </p>
                </div>

                <ul class="mt-5 flex flex-wrap gap-1.5" :aria-label="tg.labels.tech">
                  <li v-for="tag in project.tags" :key="tag" class="rounded-full px-2 py-0.5 font-mono text-[11px] text-muted ring ring-default ring-inset">
                    {{ tag }}
                  </li>
                </ul>
              </div>
            </div>

            <details class="group mt-6">
              <summary class="inline-flex cursor-pointer list-none items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-highlighted ring ring-accented ring-inset transition-colors select-none hover:bg-muted [&::-webkit-details-marker]:hidden">
                <span class="group-open:hidden">{{ tg.labels.moreDetails }}</span>
                <span class="hidden group-open:inline">{{ tg.labels.lessDetails }}</span>
                <UIcon name="i-ph-caret-down" class="size-4 transition-transform duration-300 ease-out-expo group-open:rotate-180" />
              </summary>

              <div class="details-body mt-8 space-y-10">
                <div class="grid gap-8 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-highlighted">
                      {{ tg.labels.area }}
                    </h4>
                    <p class="mt-2 leading-relaxed text-muted">
                      {{ project.area }}
                    </p>
                  </div>
                  <div>
                    <h4 class="font-medium text-highlighted">
                      {{ tg.labels.problem }}
                    </h4>
                    <p class="mt-2 leading-relaxed text-muted">
                      {{ project.problem }}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 class="font-medium text-highlighted">
                    {{ tg.labels.gallery }}
                  </h4>
                  <div class="mt-4 grid gap-5 sm:grid-cols-2">
                    <ImageZoom
                      v-for="image in project.galleryItems"
                      :key="image.src"
                      :src="image.src"
                      :alt="image.caption"
                      :caption="image.caption"
                      :width="image.width"
                      :height="image.height"
                      :fit="image.fit"
                      :position="image.position"
                      :bg="image.bg"
                      :zoom-label="tg.labels.zoom"
                    />
                  </div>
                </div>

                <div>
                  <h4 class="font-medium text-highlighted">
                    {{ tg.labels.tech }}
                  </h4>
                  <dl class="mt-3 grid gap-x-6 gap-y-2.5 sm:grid-cols-[13rem_minmax(0,1fr)]">
                    <template v-for="item in project.tech" :key="item.name">
                      <dt class="text-highlighted">
                        {{ item.name }}
                      </dt>
                      <dd class="text-muted max-sm:mb-1.5">
                        {{ item.use }}
                      </dd>
                    </template>
                  </dl>
                </div>

                <div>
                  <h4 class="font-medium text-highlighted">
                    {{ tg.labels.contributions }}
                  </h4>
                  <ul class="node-grid mt-4 grid-cols-1 md:grid-cols-2">
                    <NodeCell
                      v-for="item in project.contributionItems"
                      :key="item.title"
                      as="li"
                      class="p-5 sm:p-6 md:odd:last:col-span-2"
                    >
                      <div class="font-medium text-highlighted">
                        {{ item.title }}
                      </div>
                      <p class="mt-2 text-sm leading-relaxed text-muted">
                        {{ item.text }}
                      </p>
                    </NodeCell>
                  </ul>
                  <p v-if="project.commitsNote" class="mt-3 text-sm text-dimmed">
                    {{ project.commitsNote }}
                  </p>
                </div>

                <div class="grid gap-10 lg:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-highlighted">
                      {{ tg.labels.hardSkills }}
                    </h4>
                    <ul class="mt-3 space-y-2.5">
                      <li v-for="skill in project.hardSkills" :key="skill.name" class="flex items-start justify-between gap-4">
                        <span>{{ skill.name }}</span>
                        <span class="shrink-0 rounded-full px-2 py-0.5 font-mono text-[11px] ring ring-inset" :class="levelClass[skill.level]">
                          {{ tg.labels.levels[skill.level] }}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-highlighted">
                      {{ tg.labels.softSkills }}
                    </h4>
                    <dl class="mt-3 space-y-3">
                      <div v-for="skill in project.softSkills" :key="skill.name">
                        <dt class="text-highlighted">
                          {{ skill.name }}
                        </dt>
                        <dd class="mt-0.5 text-sm leading-relaxed text-muted">
                          {{ skill.where }}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div>
                  <h4 class="font-medium text-highlighted">
                    {{ tg.labels.links }}
                  </h4>
                  <ul class="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                    <li v-for="link in project.links" :key="link.href">
                      <a
                        :href="link.href"
                        target="_blank"
                        rel="noopener"
                        class="inline-flex items-center gap-1.5 font-medium text-primary underline-offset-4 hover:underline"
                      >
                        <UIcon name="i-simple-icons-github" class="size-4" />
                        {{ link.label }}
                        <UIcon name="i-ph-arrow-up-right" class="size-4" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </details>
          </article>
        </li>
      </ol>
    </UContainer>
  </section>
</template>

<style scoped>
.rail {
  background-image: linear-gradient(to bottom, var(--line) 50%, transparent 50%);
  background-size: 1px 8px;
}

li:last-child > .rail {
  display: none;
}

/* Ao abrir os detalhes, o conteúdo sobe como o resto da página. */
@media (prefers-reduced-motion: no-preference) {
  details[open] > .details-body {
    animation: rise 0.6s var(--ease-out-expo) both;
  }
}
</style>
