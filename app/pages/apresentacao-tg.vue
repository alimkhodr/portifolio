<script setup lang="ts">
import { fatecPhoto, jobLogos } from '~/data/media'
import { tgRepo, tgPath } from '~/data/tg/shared'
import { apiSlides, educationStatus, presenterAge, progression, slidesPath, stackByProject, visionData as vd } from '~/data/tg/slides'

// Slides da apresentação do TG (cerca de 7 minutos): 1 min de apresentação pessoal,
// 2 min das cinco primeiras APIs e 4 min do VisionData. Só em português e fora dos buscadores.
definePageMeta({ layout: 'deck', i18n: { locales: ['pt'] } })

const content = useSiteContent()
const tg = useTgContent()
const { public: { siteUrl } } = useRuntimeConfig()

useSeoMeta({
  title: 'Apresentação do TG | Ali Mohamed Khodr',
  description: 'Slides da apresentação do Trabalho de Graduação em Banco de Dados na Fatec São José dos Campos.',
  robots: 'noindex, nofollow',
  ogUrl: `${siteUrl}${slidesPath}`
})

const host = (url: string) => url.replace(/^https:\/\//, '')
const chip = 'rounded-full px-3.5 py-1 font-mono text-[20px] ring ring-inset'
const mine = `${chip} bg-primary text-inverted ring-primary`
const team = `${chip} text-muted ring-default`
const title = 'text-[68px] leading-[1.02] font-medium tracking-[-0.03em] text-balance text-highlighted'
const label = 'font-mono text-[22px] tracking-[0.06em] text-muted uppercase'
</script>

<template>
  <Deck>
    <!-- 1. Capa -->
    <DeckSlide section="Trabalho de Graduação" panel>
      <div class="grid h-full grid-rows-[minmax(0,1fr)_auto]">
        <div class="grid grid-cols-[minmax(0,1fr)_600px] gap-16 pb-12">
          <div class="flex flex-col justify-center">
            <span class="deck-in inline-flex w-fit items-center gap-4 rounded-full py-2 pr-6 pl-4 text-[24px] ring ring-white/40 ring-inset" style="--i: 0">
              <BrandLogo id="fatec" size="h-7" class="text-white" />
              Tecnólogo em Banco de Dados
            </span>
            <h1 class="deck-in mt-9 max-w-[13ch] text-[104px] leading-[0.98] font-medium tracking-[-0.035em]" style="--i: 1">
              Portfólio de API e VisionData
            </h1>
            <p class="deck-in mt-7 max-w-[34ch] text-[32px] leading-snug text-(--panel-muted)" style="--i: 2">
              Aprendizagem por Projetos Integrados e uma base de conhecimento inteligente de chamados.
            </p>
          </div>
          <figure class="deck-in flex flex-col" style="--i: 2">
            <div class="relative min-h-0 flex-1 overflow-hidden rounded-2xl ring-1 ring-white/20">
              <img
                :src="fatecPhoto.src"
                :width="fatecPhoto.width"
                :height="fatecPhoto.height"
                :alt="content.about.photoAlt"
                class="absolute inset-0 size-full object-cover object-[50%_75%]"
              >
            </div>
            <PhotoCredit
              class="mt-3 text-[16px] text-(--panel-muted)"
              :photo="fatecPhoto"
              place="Fatec São José dos Campos"
              :photo-by="content.ui.photoBy"
              :cropped="content.ui.cropped"
            />
          </figure>
        </div>
        <dl class="deck-in grid grid-cols-4 border-t border-(--panel-line)" style="--i: 3">
          <div
            v-for="fact in [
              { label: 'Aluno', value: 'Ali Mohamed Khodr' },
              { label: 'Orientador', value: 'Prof. Me. Giuliano Bertoti' },
              { label: 'Instituição', value: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
              { label: 'Ano', value: '2026' }
            ]"
            :key="fact.label"
            class="grid content-start gap-1.5 border-(--panel-line) pt-7 pr-8 not-first:border-l not-first:pl-8"
          >
            <dt class="font-mono text-[20px] text-(--panel-muted)">
              {{ fact.label }}
            </dt>
            <dd class="text-[26px] leading-snug text-white">
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </DeckSlide>

    <!-- 2. Sobre mim -->
    <DeckSlide section="Apresentação">
      <div class="grid h-full grid-cols-[440px_minmax(0,1fr)] gap-20">
        <div class="flex flex-col justify-center">
          <div class="deck-in relative aspect-[4/5] overflow-hidden rounded-2xl ring-1 ring-default" style="--i: 0">
            <img
              src="/assets/hero.webp"
              width="1254"
              height="1254"
              :alt="content.ui.heroImageAlt"
              class="absolute inset-0 size-full object-cover object-[38%_35%]"
            >
          </div>
          <h1 class="deck-in mt-8 text-[44px] leading-none font-medium tracking-[-0.03em] text-highlighted" style="--i: 1">
            Ali Mohamed Khodr
          </h1>
          <p class="deck-in mt-4 text-[26px] text-muted" style="--i: 2">
            <template v-if="presenterAge">
              {{ presenterAge }} anos ·
            </template>
            {{ content.contact.city }}
          </p>
        </div>

        <div class="flex min-w-0 flex-col justify-center gap-10">
          <div>
            <h2 class="deck-in mb-5" :class="label" style="--i: 1">
              Formação
            </h2>
            <ul class="node-grid grid-cols-2">
              <NodeCell
                v-for="(item, position) in content.educationItems"
                :key="item.course"
                as="li"
                class="deck-in flex flex-col gap-2 p-7"
                :style="{ '--i': 2 + position }"
              >
                <div class="flex items-start justify-between gap-4">
                  <span
                    class="rounded-full px-3 py-0.5 font-mono text-[18px] ring ring-inset"
                    :class="educationStatus[position] === 'Em andamento' ? 'text-primary ring-primary/40' : 'text-muted ring-default'"
                  >{{ educationStatus[position] }}</span>
                  <BrandLogo :id="item.logo" class="text-highlighted [zoom:1.8]" />
                </div>
                <span class="mt-1 text-[28px] leading-tight font-medium text-highlighted">{{ item.course }}</span>
              </NodeCell>
            </ul>
          </div>
          <div>
            <h2 class="deck-in mb-5" :class="label" style="--i: 5">
              Experiência
            </h2>
            <ul class="node-grid grid-cols-2">
              <NodeCell
                v-for="(job, position) in content.jobItems"
                :key="job.id"
                as="li"
                class="deck-in flex flex-col gap-2 p-7"
                :style="{ '--i': 6 + position }"
              >
                <div class="flex items-start justify-between gap-4">
                  <span class="font-mono text-[20px]" :class="job.current ? 'text-primary' : 'text-muted'">{{ job.period }}</span>
                  <BrandLogo :id="jobLogos[job.id]" class="text-highlighted [zoom:1.8]" />
                </div>
                <span class="mt-1 text-[28px] leading-tight font-medium text-highlighted">{{ job.role }}</span>
                <span class="text-[24px] text-muted">{{ job.company }}<template v-if="job.kind"> · {{ job.kind }}</template></span>
              </NodeCell>
            </ul>
          </div>
        </div>
      </div>
    </DeckSlide>

    <!-- 3. Visão geral das seis APIs -->
    <DeckSlide section="Projetos integradores">
      <div class="flex h-full flex-col justify-center">
        <h2 class="deck-in" :class="title" style="--i: 0">
          Seis projetos, <span class="text-primary">cinco bancos de dados</span>.
        </h2>
        <p class="deck-in mt-6 max-w-[58ch] text-[30px] leading-snug text-muted" style="--i: 1">
          Dois projetos em Análise e Desenvolvimento de Sistemas e quatro em Banco de Dados, sempre com uma demanda real e Scrum.
        </p>
        <ol class="node-grid mt-14 grid-cols-6">
          <NodeCell
            v-for="(project, position) in tg.projectItems"
            :key="project.id"
            as="li"
            class="deck-in flex min-h-[320px] flex-col gap-3 p-7"
            :class="{ 'bg-primary! text-inverted': project.latest }"
            :style="{ '--i': 2 + position }"
          >
            <span class="font-mono text-[22px]" :class="project.latest ? 'text-inverted/80' : 'text-primary'">{{ project.period }}</span>
            <span class="mt-2 text-[34px] leading-none font-medium tracking-[-0.02em]" :class="project.latest ? 'text-inverted' : 'text-highlighted'">{{ project.name }}</span>
            <span class="text-[22px] leading-snug" :class="project.latest ? 'text-inverted/85' : 'text-muted'">{{ project.partner.name }}</span>
            <span class="mt-auto font-mono text-[19px] leading-snug" :class="project.latest ? 'text-inverted' : 'text-toned'">
              {{ stackByProject[project.id] }}
            </span>
          </NodeCell>
        </ol>
      </div>
    </DeckSlide>

    <!-- 4 a 8. As cinco primeiras APIs -->
    <DeckApiSlide v-for="slide in apiSlides" :key="slide.id" :slide="slide" section="Projetos integradores" />

    <!-- 9. Abertura do VisionData -->
    <DeckSlide section="Projeto de destaque" panel>
      <div class="flex h-full flex-col justify-between">
        <div class="grid grid-cols-[minmax(0,1fr)_820px] items-center gap-16">
          <div>
          <p class="deck-in font-mono text-[24px] text-(--panel-muted)" style="--i: 0">
            6º semestre · 2025/2 · Banco de Dados
          </p>
          <BrandLogo id="visiondata" size="h-[190px]" class="deck-in mt-10 text-white" style="--i: 1" />
          <p class="deck-in mt-10 max-w-[22ch] text-[44px] leading-tight" style="--i: 2">
            Base de conhecimento inteligente de chamados.
          </p>
          </div>
          <img
            :src="vd.videos.dashboards.poster"
            width="1600"
            height="824"
            alt="Tela inicial do VisionData com os dashboards de chamados"
            class="deck-in w-full rounded-2xl shadow-2xl ring-1 shadow-black/30 ring-white/20"
            style="--i: 2"
          >
        </div>
        <dl class="deck-in grid grid-cols-3 border-t border-(--panel-line)" style="--i: 3">
          <div
            v-for="fact in [
              { label: 'Empresa parceira', value: 'Pro4tech' },
              { label: 'Equipe', value: 'iNineBD' },
              { label: 'Meu papel', value: 'Autenticação, controle de acesso e gestão de usuários' }
            ]"
            :key="fact.label"
            class="grid content-start gap-1.5 border-(--panel-line) pt-7 pr-8 not-first:border-l not-first:pl-8"
          >
            <dt class="font-mono text-[20px] text-(--panel-muted)">
              {{ fact.label }}
            </dt>
            <dd class="text-[28px] leading-snug text-white">
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </DeckSlide>

    <!-- 10. Problema e solução -->
    <DeckSlide section="VisionData">
      <div class="flex h-full flex-col justify-center">
        <h2 class="deck-in" :class="title" style="--i: 0">
          Problema e <span class="text-primary">solução</span>.
        </h2>
        <div class="mt-14 grid grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] gap-16">
          <div class="deck-in" style="--i: 1">
            <h3 :class="label">
              Problema
            </h3>
            <p class="mt-5 text-[32px] leading-snug">
              {{ vd.problem }}
            </p>
          </div>
          <div>
            <h3 class="deck-in" :class="label" style="--i: 2">
              Solução
            </h3>
            <p class="deck-in mt-5 text-[32px] leading-snug font-medium text-highlighted" style="--i: 2">
              {{ vd.goal }}
            </p>
            <ul class="node-grid mt-8 grid-cols-2">
              <NodeCell
                v-for="(feature, position) in vd.features"
                :key="feature.title"
                as="li"
                class="deck-in p-6"
                :style="{ '--i': 3 + position }"
              >
                <div class="text-[28px] font-medium text-highlighted">
                  {{ feature.title }}
                </div>
                <p class="mt-1.5 text-[22px] leading-snug text-muted">
                  {{ feature.text }}
                </p>
              </NodeCell>
            </ul>
            <p class="deck-in mt-6 text-[24px] text-muted" style="--i: 7">
              Tudo em conformidade com a LGPD.
            </p>
          </div>
        </div>
      </div>
    </DeckSlide>

    <!-- 11. Arquitetura de dados -->
    <DeckSlide section="VisionData">
      <div class="flex h-full flex-col justify-center">
        <h2 class="deck-in" :class="title" style="--i: 0">
          Do chamado ao <span class="text-primary">indicador</span>.
        </h2>
        <ol class="mt-12 grid grid-cols-[repeat(4,minmax(0,1fr))] gap-x-14">
          <li
            v-for="(stage, position) in vd.pipeline"
            :key="stage.step"
            class="deck-in relative flex flex-col"
            :style="{ '--i': 1 + position }"
          >
            <span class="mb-4 font-mono text-[20px] text-muted uppercase">{{ String(position + 1).padStart(2, '0') }} · {{ stage.step }}</span>
            <ul class="node-grid grid-cols-1">
              <NodeCell v-for="item in stage.items" :key="item.name" as="li" class="flex flex-col gap-1 p-6">
                <span class="font-mono text-[18px] text-primary">{{ item.tech }}</span>
                <span class="text-[28px] leading-tight font-medium text-highlighted">{{ item.name }}</span>
                <span class="text-[20px] leading-snug text-muted">{{ item.note }}</span>
              </NodeCell>
            </ul>
            <UIcon
              v-if="position < vd.pipeline.length - 1"
              name="i-ph-arrow-right"
              class="absolute top-[110px] -right-[46px] size-9 text-primary"
              aria-hidden="true"
            />
          </li>
        </ol>
      </div>
    </DeckSlide>

    <!-- 12. Data Warehouse -->
    <DeckSlide section="VisionData">
      <div class="grid h-full grid-cols-[minmax(0,1fr)_620px] items-center gap-16">
        <div>
          <h2 class="deck-in" :class="title" style="--i: 0">
            Data Warehouse em <span class="text-primary">estrela</span>.
          </h2>
          <DeckSchema v-bind="vd.schema" compact class="deck-in mt-10" style="--i: 1" />
        </div>
        <div class="flex flex-col gap-8">
          <ul class="space-y-4">
            <li
              v-for="(item, position) in [
                'Grão: um registro por chamado e tag',
                'Dim_Dates em três papéis: abertura, fechamento e primeira resposta',
                'Carga com MERGE: atualiza ou insere cada dimensão pela chave de negócio'
              ]"
              :key="item"
              class="deck-in flex gap-4 text-[26px] leading-snug text-highlighted"
              :style="{ '--i': 2 + position }"
            >
              <span class="mt-[0.5em] size-2.5 shrink-0 bg-primary" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
          <DeckCode :lines="vd.merge" caption="Carga das dimensões no ETL em Python (SQL Server)" class="deck-in" style="--i: 5" />
        </div>
      </div>
    </DeckSlide>

    <!-- 13. Busca de chamados -->
    <DeckSlide section="VisionData">
      <div class="grid h-full grid-cols-[minmax(0,1fr)_1180px] items-center gap-14">
        <div>
          <span class="deck-in" :class="team" style="--i: 0">Equipe</span>
          <h2 class="deck-in mt-6 text-[54px] leading-[1.04] font-medium tracking-[-0.03em] text-highlighted" style="--i: 1">
            Busca de chamados no Elasticsearch
          </h2>
          <ul class="mt-8 space-y-4">
            <li
              v-for="(item, position) in vd.search"
              :key="item"
              class="deck-in flex gap-4 text-[24px] leading-snug text-highlighted"
              :style="{ '--i': 2 + position }"
            >
              <span class="mt-[0.5em] size-2.5 shrink-0 bg-primary" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="deck-in" style="--i: 2">
          <DeckVideo v-bind="vd.videos.search" label="Busca de chamados no VisionData" />
        </div>
      </div>
    </DeckSlide>

    <!-- 14. Indicadores e previsões -->
    <DeckSlide section="VisionData">
      <div class="grid h-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-14">
        <div>
          <span class="deck-in" :class="team" style="--i: 0">Equipe</span>
          <h2 class="deck-in mt-6 text-[54px] leading-[1.04] font-medium tracking-[-0.03em] text-highlighted" style="--i: 1">
            Indicadores e previsões
          </h2>
          <p class="deck-in mt-5 text-[24px] leading-snug text-muted" style="--i: 2">
            A API em Go consulta o Data Warehouse, e modelos em Python com Prophet fazem previsões por produto e por cliente.
          </p>
          <DeckCode :lines="vd.resolution" caption="Tempo médio de resolução por prioridade (trecho simplificado)" class="deck-in mt-8" style="--i: 3" />
        </div>
        <div class="deck-in" style="--i: 2">
          <DeckVideo v-bind="vd.videos.dashboards" label="Dashboards do VisionData" />
        </div>
      </div>
    </DeckSlide>

    <!-- 15. LGPD -->
    <DeckSlide section="VisionData">
      <div class="flex h-full flex-col justify-center">
        <h2 class="deck-in max-w-[24ch]" :class="title" style="--i: 0">
          LGPD no <span class="text-primary">banco e na aplicação</span>.
        </h2>
        <ul class="node-grid mt-12 grid-cols-3">
          <NodeCell
            v-for="(item, position) in vd.lgpd"
            :key="item.title"
            as="li"
            class="deck-in flex min-h-[200px] flex-col gap-2 p-8"
            :style="{ '--i': 1 + position }"
          >
            <div class="flex items-start justify-between gap-4">
              <span class="text-[30px] font-medium text-highlighted">{{ item.title }}</span>
              <span :class="item.mine ? mine : team">{{ item.mine ? 'Minha parte' : 'Equipe' }}</span>
            </div>
            <p class="text-[22px] leading-snug text-muted">
              {{ item.text }}
            </p>
          </NodeCell>
        </ul>
      </div>
    </DeckSlide>

    <!-- 16. Minha parte: autenticação e controle de acesso -->
    <DeckSlide section="VisionData · minha parte">
      <div class="grid h-full grid-cols-[minmax(0,640px)_minmax(0,1fr)] gap-[72px]">
        <div class="flex flex-col justify-center">
          <span class="deck-in w-fit" :class="mine" style="--i: 0">Minha parte</span>
          <h2 class="deck-in mt-6" :class="title" style="--i: 1">
            Autenticação e <span class="text-primary">controle de acesso</span>
          </h2>
          <ul class="mt-10 space-y-5">
            <li
              v-for="(item, position) in [
                'Sessão no servidor, com rotas de login, logout e dados do usuário',
                'Login com conta Microsoft por OAuth, com rota de servidor própria',
                'Acesso por perfil: páginas restritas a usuários autenticados e a administradores'
              ]"
              :key="item"
              class="deck-in flex gap-5 text-[30px] leading-snug text-highlighted"
              :style="{ '--i': 2 + position }"
            >
              <span class="mt-[0.5em] size-3 shrink-0 bg-primary" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="relative flex min-w-0 items-center">
          <div class="deck-in w-full pb-[190px]" style="--i: 2">
            <DeckShot :image="vd.authFlow" alt="Fluxo de autenticação entre servidor, token e aplicação" frame="aspect-[1046/611]" class="shadow-2xl shadow-black/20" />
          </div>
          <div class="deck-in absolute right-[-24px] bottom-0 w-[56%]" style="--i: 4">
            <DeckVideo v-bind="vd.videos.login" label="Login com conta Microsoft no VisionData" class="shadow-2xl shadow-black/30" />
          </div>
        </div>
      </div>
    </DeckSlide>

    <!-- 17. Minha parte: usuários e direito de eliminação -->
    <DeckSlide section="VisionData · minha parte">
      <div class="grid h-full grid-cols-[minmax(0,1fr)_1120px] items-center gap-16">
        <div>
          <span class="deck-in" :class="mine" style="--i: 0">Minha parte</span>
          <h2 class="deck-in mt-6 text-[56px] leading-[1.04] font-medium tracking-[-0.03em] text-highlighted" style="--i: 1">
            Usuários e direito de eliminação
          </h2>
          <ul class="mt-8 space-y-4">
            <li
              v-for="(item, position) in [
                'Gestão de usuários: listar, editar e excluir contas',
                'O próprio usuário troca a senha ou exclui a conta, como prevê a LGPD'
              ]"
              :key="item"
              class="deck-in flex gap-4 text-[26px] leading-snug text-highlighted"
              :style="{ '--i': 2 + position }"
            >
              <span class="mt-[0.5em] size-2.5 shrink-0 bg-primary" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="deck-in" style="--i: 2">
          <DeckVideo v-bind="vd.videos.users" label="Gestão de usuários no VisionData" />
        </div>
      </div>
    </DeckSlide>

    <!-- 18. Considerações finais -->
    <DeckSlide section="Conclusão">
      <div class="flex h-full flex-col justify-center">
        <h2 class="deck-in" :class="title" style="--i: 0">
          Considerações <span class="text-primary">finais</span>.
        </h2>
        <ol class="node-grid mt-14 grid-cols-4">
          <NodeCell
            v-for="(step, position) in progression"
            :key="step.title"
            as="li"
            class="deck-in flex min-h-[260px] flex-col gap-3 p-8"
            :style="{ '--i': 1 + position }"
          >
            <span class="font-mono text-[22px] text-primary">{{ String(position + 1).padStart(2, '0') }} · {{ step.when }}</span>
            <span class="mt-2 text-[32px] leading-tight font-medium text-highlighted">{{ step.title }}</span>
            <span class="mt-auto text-[22px] text-muted">{{ step.where }}</span>
          </NodeCell>
        </ol>
        <p class="deck-in mt-12 max-w-[52ch] text-[32px] leading-snug" style="--i: 5">
          A prática integradora aproximou a sala de aula das condições reais de trabalho e se refletiu na minha atuação profissional.
        </p>
      </div>
    </DeckSlide>

    <!-- 19. Obrigado -->
    <DeckSlide section="Conclusão" panel>
      <div class="flex h-full flex-col justify-between">
        <div>
          <h2 class="deck-in text-[180px] leading-[0.9] font-medium tracking-[-0.045em]" style="--i: 0">
            Obrigado.
          </h2>
          <p class="deck-in mt-8 text-[44px] text-(--panel-muted)" style="--i: 1">
            Perguntas?
          </p>
        </div>
        <dl class="deck-in grid grid-cols-[1fr_1.35fr_1fr] border-t border-(--panel-line)" style="--i: 2">
          <div
            v-for="fact in [
              { label: 'Portfólio', value: host(siteUrl) + tgPath },
              { label: 'README', value: host(tgRepo) },
              { label: 'Orientador', value: 'Prof. Me. Giuliano Bertoti' }
            ]"
            :key="fact.label"
            class="grid content-start gap-1.5 border-(--panel-line) pt-7 pr-8 not-first:border-l not-first:pl-8"
          >
            <dt class="font-mono text-[20px] text-(--panel-muted)">
              {{ fact.label }}
            </dt>
            <dd class="text-[26px] leading-snug break-words text-white">
              {{ fact.value }}
            </dd>
          </div>
        </dl>
      </div>
    </DeckSlide>
  </Deck>
</template>
