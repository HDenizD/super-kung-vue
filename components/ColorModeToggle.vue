<template>
  <button
    class="dark:outline-white scale-125 rounded-md text-white flex items-center"
    @click="toggleDarkMode"
  >
    <Icon
      v-if="
        colorMode.preference === 'system' || colorMode.preference === 'dark'
      "
      name="material-symbols:dark-mode-rounded"
      class="text-light hover:text-primary"
    />
    <Icon
      v-if="
        colorMode.preference === 'system' || colorMode.preference === 'light'
      "
      name="material-symbols:light-mode-rounded"
      class="text-dark hover:text-primary"
    />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

function toggleDarkMode() {
  colorMode.preference === 'dark'
    ? (colorMode.preference = 'light')
    : (colorMode.preference = 'dark')
}
</script>

<style scoped></style>
