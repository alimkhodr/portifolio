<script setup lang="ts">
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
    </UContainer>
  </section>
</template>
