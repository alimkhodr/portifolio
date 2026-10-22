<template>
  <UApp :tooltip="{ delayDuration: 200 }">
    <a
      href="#conteudo"
      class="fixed top-3 left-3 z-50 -translate-y-24 rounded-full bg-inverted px-4 py-2 text-sm font-medium text-inverted transition-transform focus:translate-y-0"
    >Pular para o conteúdo</a>

    <SiteHeader />

    <main id="conteudo">
      <HeroSection />
      <MetricsSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <StackSection />
      <ContactSection />
    </main>

    <SiteFooter />
  </UApp>
</template>
