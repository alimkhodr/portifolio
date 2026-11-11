<script setup lang="ts">
import { diploma, fatecPhoto } from '~/data/media'
import { tgPath } from '~/data/tg/shared'

const content = useSiteContent()
const localePath = useLocalePath()
</script>

<template>
  <section id="sobre" aria-labelledby="about-title" class="py-20 sm:py-28">
    <UContainer class="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="reveal lg:col-span-7">
        <SectionTitle id="about-title" :heading="content.about.title" />
        <p class="mt-8 max-w-[30ch] text-[clamp(1.375rem,2.4vw,1.875rem)] leading-snug font-medium tracking-[-0.02em] text-highlighted">
          {{ content.about.lead }}
        </p>
        <div class="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed">
          <RichText
            v-for="(paragraph, index) in content.about.paragraphs"
            :key="index"
            :text="paragraph"
            :class="{ 'text-muted': index === content.about.paragraphs.length - 1 }"
          />
        </div>
      </div>

      <div class="reveal lg:col-span-5 lg:pt-3">
        <h3 class="mb-5 text-lg font-medium text-highlighted">
          {{ content.about.educationTitle }}
        </h3>

        <figure class="mb-6">
          <img
            :src="fatecPhoto.src"
            :alt="content.about.photoAlt"
            :width="fatecPhoto.width"
            :height="fatecPhoto.height"
            loading="lazy"
            decoding="async"
            class="aspect-[16/9] w-full rounded-xl object-cover object-[50%_70%] ring-1 ring-default"
          >
          <PhotoCredit
            class="mt-2 text-muted"
            :photo="fatecPhoto"
            place="Fatec São José dos Campos"
            :photo-by="content.ui.photoBy"
            :cropped="content.ui.cropped"
          />
        </figure>

        <ol class="node-grid grid-cols-1">
          <NodeCell v-for="item in content.educationItems" :key="item.course" as="li" class="group flex flex-col gap-1.5 p-5 sm:p-6">
            <div class="flex items-start justify-between gap-4">
              <div class="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                <span>{{ item.period }}</span>
                <span v-if="item.status" class="rounded-full px-2 py-0.5 text-primary ring ring-primary/40 ring-inset">{{ item.status }}</span>
              </div>
              <BrandLogo :id="item.logo" class="text-dimmed transition-colors duration-300 group-hover:text-highlighted" />
            </div>
            <div class="mt-1 font-medium text-highlighted">
              {{ item.course }}
            </div>
            <div class="text-sm text-muted">
              {{ item.school }}
            </div>
            <a
              v-if="item.tgPortfolio && item.link"
              :href="localePath(tgPath)"
              class="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {{ item.link }}
              <UIcon name="i-ph-arrow-right" class="size-4" />
            </a>
            <UModal
              v-if="item.diploma"
              :title="content.about.diplomaTitle"
              :description="content.about.diplomaNote"
              :ui="{ content: 'sm:max-w-5xl', body: 'p-2 sm:p-3' }"
            >
              <button
                type="button"
                class="mt-2 inline-flex w-fit cursor-pointer items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
              >
                <UIcon name="i-ph-certificate" class="size-4" />
                {{ content.ui.viewDiploma }}
              </button>
              <template #body>
                <img
                  :src="diploma.src"
                  :alt="content.about.diplomaTitle"
                  :width="diploma.width"
                  :height="diploma.height"
                  class="mx-auto h-auto max-h-[72dvh] w-auto rounded-lg"
                >
              </template>
            </UModal>
          </NodeCell>
        </ol>
      </div>
    </UContainer>
  </section>
</template>
