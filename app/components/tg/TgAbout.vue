<script setup lang="ts">
const tg = useTgContent()
</script>

<template>
  <section id="sobre-mim" aria-labelledby="tg-about-title" class="py-20 sm:py-28">
    <UContainer class="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="reveal lg:col-span-7">
        <SectionTitle id="tg-about-title" :heading="tg.about.title" />
        <div class="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed">
          <RichText v-for="(paragraph, index) in tg.about.paragraphs" :key="index" :text="paragraph" />
        </div>
      </div>

      <div class="reveal lg:col-span-5 lg:pt-3">
        <h3 class="mb-5 text-lg font-medium text-highlighted">
          {{ tg.about.skillsTitle }}
        </h3>
        <ul class="node-grid grid-cols-3 sm:grid-cols-4">
          <NodeCell
            v-for="skill in tg.skills"
            :key="skill.name"
            as="li"
            class="group flex flex-col items-start gap-3 p-3.5 sm:p-4"
          >
            <UIcon :name="skill.icon" class="size-5 text-muted transition-colors duration-300 group-hover:text-primary" />
            <span class="text-[13px] leading-tight text-highlighted">{{ skill.name }}</span>
          </NodeCell>
        </ul>
      </div>
    </UContainer>
  </section>
</template>
