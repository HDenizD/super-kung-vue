<template>
  <button
    class="flex scale-125 items-center rounded-md text-white dark:outline-white"
    @click="toggleDarkMode"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
      name="pixelarticons:moon"
      class="text-light hover:text-primary"
    />
    <Icon
      v-if="colorMode.value === 'light'"
      name="pixelarticons:sun-alt"
      class="text-dark hover:text-primary"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.value === 'dark'
    ? (colorMode.value = 'light')
    : (colorMode.value = 'dark')
}
</script>

<style scoped></style>
