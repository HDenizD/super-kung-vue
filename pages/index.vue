<template>
  <div>
    <section>
      <Transition
        enter-active-class="animate__lightSpeedInLeft"
        leave-active-class="animate__lightSpeedOutLeft animate__faster"
      >
        <div class="md-absolute-center flex flex-col items-center">
          <div
            ref="heroText"
            class="animate__slower"
          >
            <h1
              class="hero-text inline-block bg-clip-text text-center font-brushking text-6xl italic leading-[8rem] tracking-widest text-transparent bg-blend-soft-light"
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
              is-retro
              label="START"
              @click="$router.push('/game/player-name')"
            />
            <KVBtn
              is-retro
              label="SETTINGS"
              @click="$router.push('/settings')"
            />
          </div>
        </div>
      </Transition>
    </section>
  </div>
</template>

<script setup lang="ts">
const heroText = ref()
const gameOptions = ref()

const { observeElement } = useEasyIntersectionObserver()

onMounted(() => {
  observeElement(heroText.value, 'animate__fadeIn')
  observeElement(gameOptions.value, 'animate__fadeIn')
})
</script>

<style scoped>
.md-absolute-center {
  @apply md:absolute md:left-2/4 md:top-2/4 md:-translate-x-2/4 md:-translate-y-2/4 md:justify-center;
}

.hero-text {
  background-image: linear-gradient(
    to left,
    #41b983,
    #354a5f,
    #41b983,
    #41b983
  );
  background-position: 100%;
  background-size: 300%;

  animation: animatedText 5s infinite linear;
}

@keyframes animatedText {
  to {
    background-position: -50%;
  }
}
</style>
