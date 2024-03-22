<template>
  <div>
    <section class="">
      <div class="md-absolute-center flex flex-col items-center">
        <h1
          class="inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center font-brushking text-6xl leading-[8rem] tracking-widest text-transparent"
        >
          Super <br />
          Kung Vue
        </h1>
        <div class="mt-14 flex flex-col gap-10">
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
    </section>
  </div>
</template>

<script setup lang="ts">
// const section1 = ref()
// const section3 = ref()

// const { observeElement } = useEasyIntersectionObserver()

// onMounted(() => {
//   observeElement(section1.value, 'animate__fadeInLeft')
//   observeElement(section3.value, 'animate__fadeInUp')
// })
</script>

<style scoped>
.md-absolute-center {
  @apply md:absolute md:left-2/4 md:top-2/4 md:-translate-x-2/4 md:-translate-y-2/4 md:justify-center;
}
</style>
