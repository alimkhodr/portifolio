<script setup lang="ts">
const content = useSiteContent()
</script>

<template>
  <div>
    <a
      href="#conteudo"
      class="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-inverted px-4 py-2 text-sm font-medium text-inverted transition-transform focus:translate-y-0"
    >{{ content.ui.skipLink }}</a>

    <SiteHeader />

    <main id="conteudo">
      <slot />
    </main>

    <SiteFooter />
  </div>
</template>
