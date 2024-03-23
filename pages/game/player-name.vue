<template>
  <div
    ref="playerNameForm"
    class="absolute-center animate__slower"
  >
    <form
      @submit.prevent="setPlayerName(playerName)"
      class="flex flex-col gap-4"
    >
      <KVInput
        v-model="playerName"
        label="PLAYER NAME"
        required
      />
      <KVBtn
        type="submit"
        label="SUBMIT"
        class="mx-auto"
        is-retro
      />
    </form>
    <PlayerHealthBar
      :is-charge-health="isChargeHealth"
      :player-health="playerHealth"
    />
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
const { observeElement } = useEasyIntersectionObserver()
const { playerName, playerHealth } = storeToRefs(usePlayerStore())

const playerNameForm = ref()
const isChargeHealth = ref(false)

function setPlayerName(name: string) {
  if (name) {
    console.log(name)
    isChargeHealth.value = true
  }
}

onMounted(() => {
  observeElement(playerNameForm.value, 'animate__fadeIn')
})
</script>

<style scoped></style>
