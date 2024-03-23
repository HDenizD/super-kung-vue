export const useAppStore = defineStore('app', () => {
  const isLogoLoading = ref(false)

  return {
    isLogoLoading
  }
})
