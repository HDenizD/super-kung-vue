<template>
  <button
    v-if="!icon"
    class="opacity-65 hover:opacity-100"
    :class="[isRetro && 'font-retro', isBrushKing && 'font-brushking']"
  >
    {{ label }}
  </button>

  <Icon
    v-else
    class="cursor-pointer text-2xl opacity-65 hover:opacity-100"
    name="material-symbols:settings-rounded"
  />
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  isRetro: {
    type: Boolean,
    default: false
  },
  isBrushKing: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped></style>
