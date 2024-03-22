<template>
  <button
    class="opacity-65 hover:opacity-100"
    :class="[isRetro && 'font-retro', isBrushKing && 'font-brushking']"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
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
