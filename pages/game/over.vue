<template>
  <div class="md-absolute-center flex flex-col items-center">
    <div
      ref="heroText"
      class="animate__slower"
    >
      <h1
        class="animated-text inline-block bg-clip-text px-4 text-center font-brushking text-6xl italic leading-[8rem] tracking-widest text-transparent bg-blend-soft-light"
      >
        Game Over
      </h1>
    </div>
    <div
      ref="gameOptions"
      class="animate__slower mt-14 flex flex-col gap-10"
    >
      <KVBtn
        is-retro
        is-uppercase
        label="Try Again"
        @click="resetGame('tryAgain')"
      />
      <KVBtn
        is-retro
        is-uppercase
        label="Nah, I'm Good"
        @click="resetGame('exit')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'
import { useRouter } from 'vue-router'

const router = useRouter()
const heroText = ref()
const gameOptions = ref()

const { resetGame } = usePlayerStore()
const { playerHealth } = storeToRefs(usePlayerStore())

const { observeElement } = useEasyIntersectionObserver()

onMounted(() => {
  observeElement(heroText.value, 'animate__fadeIn')
  observeElement(gameOptions.value, 'animate__fadeIn')

  if (playerHealth.value > 0) {
    router.push('/')
  }
})
</script>

<style scoped></style>
