<script setup lang="ts">
// Vídeo mudo em loop que começa do início quando o slide entra e pausa quando sai.
defineProps<{ src: string, poster: string, width: number, height: number, label: string }>()

const active = inject(slideActiveKey, ref(false))
const video = ref<HTMLVideoElement>()

function sync(on: boolean) {
  const el = video.value
  if (!el) return
  if (on) {
    el.currentTime = 0
    el.play().catch(() => {})
  }
  else {
    el.pause()
  }
}

watch(active, sync, { flush: 'post' })
onMounted(() => sync(active.value))
</script>

<template>
  <!-- No PDF, o pôster entra no lugar do vídeo. -->
  <div class="min-w-0 rounded-xl">
    <img :src="poster" :width="width" :height="height" alt="" class="hidden h-auto w-full rounded-xl ring-1 ring-default print:block">
    <video
      ref="video"
      :src="src"
      :poster="poster"
      :width="width"
      :height="height"
      :aria-label="label"
      muted
      loop
      playsinline
      preload="auto"
      class="block h-auto max-h-full w-full rounded-xl bg-black object-contain ring-1 ring-default print:hidden"
    />
  </div>
</template>
