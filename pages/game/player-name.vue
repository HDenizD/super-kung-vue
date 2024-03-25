<template>
  <div
    ref="playerNameForm"
    class="absolute-center animate__slower"
  >
    <form
      @submit.prevent="startGame()"
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
      <PlayerHealthBar
        :class="
          showPlayerHealth ? 'opacity-100' : 'pointer-events-none opacity-0'
        "
        :is-charge-health="isChargeHealth"
        :player-health="playerHealth"
        @update:charge-health-complete="isChargeHealthComplete = true"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import { useAppStore } from '~/store/app'
const { observeElement } = useEasyIntersectionObserver()
const { playerName, playerHealth, isGameInProgress } =
  storeToRefs(usePlayerStore())

const { isLogoLoading } = storeToRefs(useAppStore())
const router = useRouter()

const playerNameForm = ref()
const isChargeHealth = ref(false)
const showPlayerHealth = ref(false)
const isChargeHealthComplete = ref(false)

function startGame() {
  if (playerName.value) {
    isLogoLoading.value = true
    isChargeHealth.value = true
    showPlayerHealth.value = true
  }
}

watch(
  () => isChargeHealthComplete.value,
  () => {
    if (isChargeHealthComplete.value) {
      console.log('Game started!')
      isChargeHealth.value = false
      setTimeout(() => {
        router.push('/game/stage-hub')
        isGameInProgress.value = true
        isLogoLoading.value = false
      }, 1000)
    }
  }
)

onMounted(() => {
  if (isGameInProgress.value) {
    router.push('/')
  } else {
    // router.push('/game/hub')
  }
  observeElement(playerNameForm.value, 'animate__fadeIn')
})
</script>

<style scoped></style>
