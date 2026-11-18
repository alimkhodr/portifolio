<script setup lang="ts">
import { slideDownloads } from '~/data/tg/slides'

const tg = useTgContent()
</script>

<template>
  <section aria-labelledby="tg-closing-title" class="pb-20 sm:pb-28">
    <UContainer>
      <div class="reveal border-t border-default pt-14 sm:pt-20">
        <SectionTitle id="tg-closing-title" :heading="tg.closing.title" />
        <p class="mt-8 max-w-[64ch] text-[clamp(1.125rem,1.6vw,1.25rem)] leading-relaxed text-highlighted">
          {{ tg.closing.text }}
        </p>
      </div>

      <!-- Slides da apresentação para baixar e apresentar sem internet. -->
      <div class="reveal mt-12 flex flex-col gap-5 rounded-2xl bg-muted p-6 ring-1 ring-default sm:mt-16 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-[56ch]">
          <h3 class="font-medium text-highlighted">
            {{ tg.closing.downloads.title }}
          </h3>
          <p class="mt-1.5 text-sm leading-relaxed text-muted">
            {{ tg.closing.downloads.note }}
          </p>
        </div>
        <div class="flex flex-wrap gap-3">
          <UButton
            :to="slideDownloads.pdf"
            external
            download
            icon="i-ph-file-pdf"
            :label="tg.closing.downloads.pdf"
            color="neutral"
            variant="outline"
          />
          <UButton
            :to="slideDownloads.offline"
            external
            download
            icon="i-ph-download-simple"
            :label="tg.closing.downloads.offline"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
