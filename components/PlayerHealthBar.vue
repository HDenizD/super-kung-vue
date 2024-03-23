<template>
  <div
    class="animate__animated flex items-center justify-center"
    :class="isCharging && 'animate__flash animate__infinite'"
  >
    <div class="relative h-12 w-96 rounded bg-gray-800">
      <div
        class="absolute left-0 top-0 h-full rounded bg-primary transition-all duration-1000"
        :style="{ width: playerHealth + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'

const emit = defineEmits(['update:charge-health-complete'])

const props = defineProps({
  playerHealth: {
    type: Number,
    required: true
  },
  isChargeHealth: {
    type: Boolean,
    default: false
  }
})

const isCharging = ref(false)

function chargePlayerHealthTill100() {
  isCharging.value = true
  const interval = setInterval(() => {
    if (playerHealth.value < 100) {
      playerHealth.value += 1
    } else {
      clearInterval(interval)
      setTimeout(() => {
        isCharging.value = false
        emit('update:charge-health-complete')
      }, 1000)
    }
  }, 10)
}

watch(
  () => props.isChargeHealth,
  (isChargeHealth) => {
    if (isChargeHealth) {
      chargePlayerHealthTill100()
    }
  }
)

const { playerHealth } = storeToRefs(usePlayerStore())
</script>

<style scoped></style>
