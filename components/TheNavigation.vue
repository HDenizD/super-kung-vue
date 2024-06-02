<template>
  <div class="mx-auto flex h-10 w-screen items-center justify-between">
    <Transition
      enter-active-class="animate__lightSpeedInLeft"
      leave-active-class="animate__fadeOutRightBig animate__faster"
    >
      <h1
        v-if="$route.fullPath !== '/'"
        :class="isLogoLoading && 'animated-text'"
        class="animate__animated inline-block cursor-pointer bg-gradient-to-r from-primary to-secondary bg-clip-text text-center font-brushking tracking-widest text-transparent"
        @click="$router.push('/')"
      >
        Super Kung Vue
      </h1>
    </Transition>
    <ul class="flex flex-grow items-center justify-end gap-8">
      <li
        v-if="isGameInProgress"
        class="hidden md:block"
      >
        <PlayerHealthBar :player-health="playerHealth" />
      </li>
      <li
        v-if="isGameInProgress"
        class="hidden font-retro md:block"
      >
        {{ playerName }}
      </li>
      <ColorModeToggle />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'
import { useAppStore } from '~/store/app'
const { playerName, isGameInProgress, playerHealth } =
  storeToRefs(usePlayerStore())
const { isLogoLoading } = storeToRefs(useAppStore())
const isMobileNavOpen = ref(false)

watch(isMobileNavOpen, () => {
  if (isMobileNavOpen.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
})
</script>

<style scoped></style>
