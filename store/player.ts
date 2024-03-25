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
    toggleGameInProgress
  }
})
