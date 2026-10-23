<script setup lang="ts">
const content = useSiteContent()
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
        <ol class="node-grid grid-cols-1">
          <NodeCell v-for="item in content.about.education" :key="item.course" as="li" class="group flex flex-col gap-1.5 p-5 sm:p-6">
            <div class="flex items-center justify-between gap-3 font-mono text-xs text-muted">
              <span>{{ item.period }}</span>
              <span v-if="item.status" class="rounded-full px-2 py-0.5 text-primary ring ring-primary/40 ring-inset">{{ item.status }}</span>
            </div>
            <div class="mt-1 font-medium text-highlighted">
              {{ item.course }}
            </div>
            <div class="text-sm text-muted">
              {{ item.school }}
            </div>
          </NodeCell>
        </ol>
      </div>
    </UContainer>
  </section>
</template>
