<script setup lang="ts">
import { profile } from '~/data/portfolio'
</script>

<template>
  <section id="topo" aria-labelledby="hero-title" class="px-2 pt-2 sm:px-3 sm:pt-3">
    <DotPanel>
      <div class="grid min-h-[min(calc(100dvh-var(--ui-header-height)-1rem),50rem)] lg:grid-cols-[1.15fr_1fr]">
        <div class="flex flex-col justify-center gap-7 px-5 py-12 sm:px-10 sm:py-16 lg:py-20 lg:pl-14 lg:pr-6">
          <a
            href="#experiencia"
            class="rise group inline-flex w-fit items-center gap-3 rounded-full py-1 pr-1 pl-4 text-sm ring ring-white/40 ring-inset transition-colors hover:bg-white/10"
            style="--i: 0"
          >
            {{ profile.role }} na {{ profile.company }}
            <span class="grid size-7 place-items-center rounded-full bg-white text-cobalt-700 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5">
              <UIcon name="i-ph-arrow-right" class="size-4" />
            </span>
          </a>

          <h1
            id="hero-title"
            class="rise text-[clamp(3rem,7.4vw,6rem)] leading-[0.95] font-medium tracking-[-0.035em] text-balance"
            style="--i: 1"
          >
            Ali Mohamed <span class="block">Khodr</span>
          </h1>

          <p class="rise max-w-[34ch] text-lg leading-relaxed text-(--panel-muted) sm:text-xl" style="--i: 2">
            Construo produtos full-stack do zero à produção, com foco em pagamentos, multi-tenant e sistemas embarcáveis.
          </p>

          <div class="rise flex flex-wrap items-center gap-3 pt-1" style="--i: 3">
            <UButton
              to="#projetos"
              external
              size="lg"
              label="Ver projetos"
              trailing-icon="i-ph-arrow-down"
              color="neutral"
              class="bg-white text-ink-950 hover:bg-cobalt-50 active:bg-cobalt-100 focus-visible:outline-white"
            />
            <CvMenu tone="panel" />
          </div>
        </div>

        <figure class="unclip relative m-2 mt-0 min-h-[22rem] overflow-hidden rounded-xl sm:m-3 sm:mt-0 lg:mt-3 lg:ml-0 lg:min-h-0">
          <img
            src="/assets/hero.webp"
            width="1254"
            height="1254"
            alt="Ali Mohamed Khodr sentado em frente a dois monitores, com iluminação azul ao fundo"
            fetchpriority="high"
            class="absolute inset-0 size-full object-cover object-[38%_35%]"
          >
          <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/20 ring-inset" aria-hidden="true" />
        </figure>
      </div>
    </DotPanel>
  </section>
</template>
