<template>
  <div
    class="kv-outline-primary hover:bg-secondary-100 w-52 cursor-pointer select-none transition-all hover:shadow-lg"
    :class="[
      isCheckCorrect,
      isLocked ? 'cursor-not-allowed opacity-50' : 'hover:scale-105'
    ]"
  >
    <h3 class="text-center font-retro text-base">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    default: false
  },
  isCorrect: {
    type: Boolean as PropType<boolean | null>,
    default: null
  },
  isLocked: {
    type: Boolean,
    default: false
  }
})

const isCheckCorrect = computed(() => {
  return props.isCorrect === null
    ? ''
    : props.isCorrect
      ? 'bg-primary'
      : 'bg-red-500'
})
</script>

<style scoped></style>
