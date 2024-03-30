<template>
  <button
    class="flex scale-125 items-center rounded-md text-white dark:outline-white"
    @click="toggleDarkMode"
  >
    <Icon
      v-if="colorMode.value === 'dark'"
      name="material-symbols:dark-mode-rounded"
      class="text-light hover:text-primary"
    />
    <Icon
      v-if="colorMode.value === 'light'"
      name="material-symbols:light-mode-rounded"
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

console.log(colorMode)
</script>

<style scoped></style>
