<script setup lang="ts">
import { education } from '~/data/portfolio'
</script>

<template>
  <section id="sobre" aria-labelledby="about-title" class="py-20 sm:py-28">
    <UContainer class="grid gap-14 lg:grid-cols-12 lg:gap-16">
      <div class="reveal lg:col-span-7">
        <h2 id="about-title" class="text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.05] font-medium tracking-[-0.03em] text-highlighted">
          Sobre <span class="text-primary">mim</span>.
        </h2>
        <p class="mt-8 max-w-[30ch] text-[clamp(1.375rem,2.4vw,1.875rem)] leading-snug font-medium tracking-[-0.02em] text-highlighted">
          Gosto de assumir produtos do zero: arquitetura inicial, CI/CD, Docker, temas, testes e deploy.
        </p>
        <div class="mt-8 max-w-[62ch] space-y-5 text-[17px] leading-relaxed">
          <p>
            Comecei a programar no ensino médio técnico em Desenvolvimento de Sistemas, na <strong class="font-medium text-highlighted">ETEC</strong>.
            Depois fui para a <strong class="font-medium text-highlighted">Fatec São José dos Campos</strong>, onde migrei para Banco de Dados para conciliar a faculdade com a primeira experiência profissional.
          </p>
          <p>
            Passei pela <strong class="font-medium text-highlighted">APTIV</strong>, com VB, C#, SQL, React e Node.
            Hoje estou na <strong class="font-medium text-highlighted">Qeevo Group (ex-Quero Educação)</strong>, full-stack com Vue, Nuxt, Ruby, Node e Docker em AWS.
          </p>
          <p>
            Atuei como tech lead em dois produtos este ano: um gateway de pagamentos embarcável e uma área do aluno multi-tenant.
          </p>
          <p class="text-muted">
            Fora do código: café, futebol e música.
          </p>
        </div>
      </div>

      <div class="reveal lg:col-span-5 lg:pt-3">
        <h3 class="mb-5 text-lg font-medium text-highlighted">
          Formação
        </h3>
        <ol class="node-grid grid-cols-1">
          <NodeCell v-for="item in education" :key="item.course" as="li" class="group flex flex-col gap-1.5 p-5 sm:p-6">
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
