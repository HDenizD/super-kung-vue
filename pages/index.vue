<template>
  <div>
    <section class="">
      <div class="md-absolute-center flex flex-col items-center">
        <h1
          class="font-brushking inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-center text-6xl leading-[8rem] tracking-widest text-transparent"
        >
          Super <br />
          Kung Vue
        </h1>
        <div class="my-20 flex flex-col gap-10">
          <button class="font-retro opacity-65 hover:opacity-100">Start</button>
          <button class="font-retro opacity-65 hover:opacity-100">
            Settings
          </button>
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
