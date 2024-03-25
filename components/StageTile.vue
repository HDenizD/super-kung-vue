<template>
  <div
    class="kv-outline-primary hover:bg-secondary-100 w-52 cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
    :class="[isCheckCorrect, isLocked && 'cursor-not-allowed opacity-50']"
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
    default: true
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
