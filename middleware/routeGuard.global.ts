import { usePlayerStore } from '~/store/player'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isGameInProgress } = storeToRefs(usePlayerStore())

  const publicRoutes = ['/', '/game/over', '/game/player-name']
  const isPublicRoute = publicRoutes.includes(to.path)

  if (isGameInProgress.value) {
    return
  }
  if (!isGameInProgress.value && !isPublicRoute) {
    return navigateTo('/game/player-name')
  }

  console.log('isGameInProgress:', isGameInProgress.value)
  console.log('to:', to.path)
  console.log('from:', from.path)
})
