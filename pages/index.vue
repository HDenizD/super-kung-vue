<template>
  <section>
    <Transition
      enter-active-class="animate__lightSpeedInLeft"
      leave-active-class="animate__lightSpeedOutLeft animate__faster"
    >
      <div
        class="md-absolute-center flex flex-col items-center justify-center md:mt-0"
      >
        <div
          ref="heroText"
          class="animate__slower"
        >
          <h1
            class="animated-text inline-block bg-clip-text px-4 text-center font-brushking text-6xl italic leading-[8rem] tracking-widest text-transparent bg-blend-soft-light"
          >
            Super <br />
            Kung Vue
          </h1>
        </div>
        <div
          ref="gameOptions"
          class="animate__slower mt-14 flex flex-col gap-10"
        >
          <KVBtn
            v-if="isGameInProgress"
            is-retro
            label="CONTINUE"
            @click="$router.push('/game/stage-hub')"
          />
          <KVBtn
            v-else
            is-retro
            label="START"
            data-testid="start-game"
            @click="$router.push('/game/player-name')"
          />
          <!-- <KVBtn
              is-retro
              label="SETTINGS"
              @click="$router.push('/settings')"
            /> -->
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'

const heroText = ref()
const gameOptions = ref()

const { isGameInProgress } = storeToRefs(usePlayerStore())

const { observeElement } = useEasyIntersectionObserver()

onMounted(() => {
  observeElement(heroText.value, 'animate__fadeIn')
  observeElement(gameOptions.value, 'animate__fadeIn')
})
</script>

<style scoped></style>
