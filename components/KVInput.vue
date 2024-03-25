<template>
  <div class="flex flex-col gap-2">
    <label
      for="player-name"
      class="font-retro text-sm uppercase"
    >
      {{ label }}
    </label>
    <input
      id="player-name"
      v-model="inputValue"
      class="kv-outline-primary bg-light font-retro dark:bg-dark"
      type="text"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const inputValue = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
</script>

<style scoped></style>
