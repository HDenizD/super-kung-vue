import { useStageStore } from './stage'
export const usePlayerStore = defineStore(
  'player',
  () => {
    const router = useRouter()

    const isGameInProgress = ref(false)
    const playerName = ref('')
    const playerHealth = ref(0)

    watch(playerHealth, () => {
      if (playerHealth.value <= 0 && isGameInProgress.value) {
        isGameInProgress.value = false
        router.push('/game/over')
      }
    })

    function toggleGameInProgress() {
      isGameInProgress.value = !isGameInProgress.value
      if (isGameInProgress.value) {
        playerName.value = 'Deniz'
        playerHealth.value = 100
      }
    }

    function resetGame(mode: 'tryAgain' | 'exit' | 'resetGame' = 'resetGame') {
      const { resetStages } = useStageStore()
      if (mode === 'resetGame') {
        playerHealth.value = 0
        router.push('/')
      }
      if (mode === 'tryAgain') {
        console.log('tryAgain')
        playerHealth.value = 100
        isGameInProgress.value = true
        router.push('/game/stage-hub')

      }
      if (mode === 'exit') {
        playerName.value = ''
        playerHealth.value = 0
        router.push('/')
        localStorage.clear()
      }

      resetStages()
    }

    function updatePlayerName(name: string) {
      playerName.value = name
    }

    function isDamageRulesValid(damage: number): boolean {
      if (damage < 0) {
        console.error('Damage cannot be negative')
        return false
      }
      if (damage > playerHealth.value) {
        console.error('Damage cannot exceed player health')
        return false
      }
      return true
    }

    function reducePlayerHealthBy(damage: number) {
      if (isDamageRulesValid(damage)) {
        playerHealth.value -= damage
      }
    }

    const playerStats = computed(() => {
      return {
        name: playerName.value,
        health: playerHealth.value
      }
    })

    return {
      playerName,
      playerHealth,
      playerStats,
      isGameInProgress,
      toggleGameInProgress,
      reducePlayerHealthBy,
      resetGame,
      updatePlayerName
    }
  },
  { persist: { storage: persistedState.localStorage } }
)
