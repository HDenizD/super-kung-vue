<template>
  <div
    class="animate__animated relative flex h-12 md:w-96 w-full items-center justify-center"
    :class="[isCharging && 'animate__flash animate__infinite']"
  >
    <span
      v-if="route.path !== '/game/player-name'"
      class="absolute z-50 font-retro text-xs md:hidden"
    >
      {{ playerName }}
    </span>
    <div class="relative h-full w-full rounded bg-gray-800">
      <div
        class="absolute left-0 top-0 flex h-full items-center justify-center rounded bg-primary transition-all duration-1000"
        :style="{ width: playerHealth + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { useRoute } from 'vue-router'

const route = useRoute()
const emit = defineEmits(['update:charge-health-complete'])
const { playerHealth, playerName } = storeToRefs(usePlayerStore())

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
</script>

<style scoped></style>
