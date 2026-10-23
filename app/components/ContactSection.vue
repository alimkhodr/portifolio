<script setup lang="ts">
import { profile } from '~/data/shared'

const content = useSiteContent()

const links = computed(() => [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'i-simple-icons-linkedin', external: true },
  { label: 'GitHub', href: profile.github, icon: 'i-simple-icons-github', external: true },
  { label: content.value.contact.phone, href: profile.phoneHref, icon: 'i-ph-phone', external: false }
])
</script>

<template>
  <section id="contato" aria-labelledby="contact-title" class="px-2 sm:px-3">
    <DotPanel class="reveal">
      <div class="flex flex-col gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
        <div class="flex flex-col gap-4">
          <h2 id="contact-title" class="text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-medium tracking-[-0.035em]">
            {{ content.contact.title }}
          </h2>
          <p class="max-w-[40ch] text-lg text-(--panel-muted)">
            {{ content.contact.lead }}
          </p>
        </div>

        <a
          :href="`mailto:${profile.email}`"
          class="group inline-flex w-fit max-w-full items-center gap-4 text-[clamp(1.5rem,4.6vw,3.5rem)] leading-tight font-medium tracking-[-0.03em] break-all"
        >
          <span class="border-b-2 border-white/50 pb-1 transition-colors group-hover:border-white">{{ profile.email }}</span>
          <UIcon name="i-ph-arrow-up-right" class="size-[0.7em] shrink-0 transition-transform duration-500 ease-out-expo group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>

        <div class="flex flex-wrap items-center gap-3">
          <UButton
            v-for="link in links"
            :key="link.label"
            :to="link.href"
            external
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener' : undefined"
            :icon="link.icon"
            :label="link.label"
            size="lg"
            color="neutral"
            variant="outline"
            class="bg-transparent text-white ring-white/45 hover:bg-white/10 active:bg-white/15 focus-visible:outline-white"
          />
          <CvMenu tone="panel" />
        </div>

        <p class="font-mono text-sm text-white">
          {{ content.contact.city }}
        </p>
      </div>
    </DotPanel>
  </section>
</template>
