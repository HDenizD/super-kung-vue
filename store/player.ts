export const usePlayerStore = defineStore('player', () => {
  const playerName = ref('')
  const playerHealth = ref(0)

  const playerStats = computed(() => {
    return {
      name: playerName.value,
      health: playerHealth.value
    }
  })

  return {
    playerName,
    playerHealth,
    playerStats
  }
})
