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
    <div
      class="group flex cursor-pointer select-none items-center gap-1"
      @click="
        () => {
          $router.push('/')
          isMobileNavOpen = false
        }
      "
    ></div>
    <button
      class="z-20 md:hidden"
      @click="isMobileNavOpen = !isMobileNavOpen"
    >
      <Icon
        v-if="!isMobileNavOpen"
        name="material-symbols-light:menu"
        class="cursor-pointer text-4xl"
      />
      <Icon
        v-else
        name="material-symbols:close-rounded"
        class="cursor-pointer text-4xl"
      />
    </button>
    <Transition
      enter-active-class="animate__fadeInRight"
      leave-active-class="animate__fadeOutRight"
    >
      <div
        id="mobile-navigation"
        v-if="isMobileNavOpen"
        class="animate__fast animate__animated fixed left-0 top-0 z-10 w-screen bg-light bg-opacity-95 dark:bg-dark dark:bg-opacity-95"
      >
        <ul
          class="flex h-dvh flex-col flex-wrap items-center justify-center gap-8 overflow-x-auto pt-24"
        >
          <li>Mobile Menu</li>
        </ul>
        <div
          class="absolute bottom-0 right-2 flex max-w-7xl justify-end pb-2 md:right-6"
        >
          <ColorModeToggle />
        </div>
      </div>
    </Transition>
    <ul class="hidden items-center gap-8 md:flex">
      <li v-if="isGameInProgress">
        <PlayerHealthBar
          :player-health="playerHealth"
          is-small
        />
      </li>
      <li
        v-if="isGameInProgress"
        class="font-retro"
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
