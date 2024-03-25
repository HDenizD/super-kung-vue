export const usePlayerStore = defineStore('player', () => {
  // TODO: toggle false when localStorage sync is implemented
  const isGameInProgress = ref(false)
  const playerName = ref('')
  const playerHealth = ref(0)

  function toggleGameInProgress() {
    isGameInProgress.value = !isGameInProgress.value
    if (isGameInProgress.value) {
      playerName.value = 'Deniz'
      playerHealth.value = 100
    }
  }

  function resetPlayer() {
    playerName.value = ''
    playerHealth.value = 0
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
    resetPlayer,
    updatePlayerName
  }
})
