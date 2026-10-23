<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const content = useSiteContent()

const mobileItems = computed<DropdownMenuItem[][]>(() => [
  content.value.navLinks.map(link => ({ label: link.label, to: link.href, external: true })),
  [{ label: content.value.ui.downloadCv, icon: 'i-ph-download-simple', to: content.value.cv.href, external: true, target: '_blank' }]
])
</script>

<template>
  <header class="dash-rule sticky top-0 z-40 bg-default/85 backdrop-blur-md supports-[backdrop-filter]:bg-default/70">
    <UContainer class="flex h-(--ui-header-height) items-center justify-between gap-4">
      <a href="#topo" class="group flex items-center gap-2.5 rounded-md text-[15px] font-medium text-highlighted">
        <span class="size-3 bg-primary transition-transform duration-500 ease-out-expo group-hover:rotate-90" aria-hidden="true" />
        ali khodr
      </a>

      <nav :aria-label="content.ui.mainNav" class="hidden lg:block">
        <ul class="flex items-center gap-1">
          <li v-for="link in content.navLinks" :key="link.href">
            <a
              :href="link.href"
              class="rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-muted hover:text-highlighted"
            >{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <div class="flex items-center gap-2">
        <LocaleMenu />
        <ClientOnly>
          <UColorModeButton variant="outline" class="ring-accented" :aria-label="content.ui.themeToggle" />
          <template #fallback>
            <span class="size-8" aria-hidden="true" />
          </template>
        </ClientOnly>
        <UButton
          :to="content.cv.href"
          external
          :download="content.cv.file"
          :label="content.ui.downloadCv"
          color="neutral"
          variant="outline"
          class="hidden ring-accented sm:inline-flex"
        />
        <UDropdownMenu :items="mobileItems" :content="{ align: 'end', sideOffset: 10 }" class="lg:hidden">
          <UButton icon="i-ph-list" color="neutral" variant="outline" class="ring-accented lg:hidden" :aria-label="content.ui.openMenu" />
        </UDropdownMenu>
      </div>
    </UContainer>
  </header>
</template>
