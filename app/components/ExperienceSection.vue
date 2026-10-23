<script setup lang="ts">
const content = useSiteContent()
</script>

<template>
  <section id="experiencia" aria-labelledby="experience-title" class="py-20 sm:py-28">
    <UContainer>
      <SectionTitle id="experience-title" :heading="content.experience.title" class="reveal mb-12 sm:mb-16" />

      <ol class="relative">
        <li
          v-for="job in content.jobItems"
          :key="job.id"
          class="reveal relative grid gap-4 pb-14 pl-9 last:pb-0 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-x-16 md:pl-0"
        >
          <!-- Trilho: linha tracejada com um marcador por cargo. -->
          <span class="rail absolute top-2 bottom-0 left-[5px] w-px md:left-[15rem]" aria-hidden="true" />
          <span
            class="absolute top-1.5 left-0 size-[11px] border md:left-[calc(15rem-5px)]"
            :class="job.current ? 'border-primary bg-primary' : 'border-accented bg-default'"
            aria-hidden="true"
          />

          <div class="flex items-center gap-3 font-mono text-sm text-muted md:flex-col md:items-start md:gap-2 md:pt-0.5">
            <span :class="{ 'text-primary': job.current }">{{ job.period }}</span>
            <span v-if="job.current" class="rounded-full px-2 py-0.5 text-xs text-primary ring ring-primary/40 ring-inset">{{ content.ui.current }}</span>
            <span v-if="job.kind" class="rounded-full px-2 py-0.5 text-xs text-muted ring ring-default ring-inset">{{ job.kind }}</span>
          </div>

          <div>
            <h3 class="text-2xl font-medium tracking-[-0.02em] text-highlighted">
              {{ job.role }}
            </h3>
            <div class="mt-1 font-medium text-primary">
              {{ job.company }}
            </div>
            <p class="mt-4 max-w-[64ch] leading-relaxed">
              {{ job.description }}
            </p>
            <ul v-if="job.highlights.length" class="mt-4 space-y-2">
              <li v-for="item in job.highlights" :key="item" class="flex gap-3 text-muted">
                <span class="mt-[0.6em] size-1.5 shrink-0 bg-primary" aria-hidden="true" />
                {{ item }}
              </li>
            </ul>
            <ul class="mt-5 flex flex-wrap gap-1.5" :aria-label="content.ui.technologies">
              <li v-for="tag in job.tags" :key="tag" class="rounded-full px-2 py-0.5 font-mono text-[11px] text-muted ring ring-default ring-inset">
                {{ tag }}
              </li>
            </ul>
          </div>
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

li:last-child .rail {
  display: none;
}
</style>
