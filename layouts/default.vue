<template>
  <ColorScheme tag="span">
    <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col">
      <header
        class="dark:border-tertiary sticky left-0 top-0 z-50 flex h-14 items-center bg-light bg-opacity-95 p-2 dark:bg-dark dark:bg-opacity-95"
      >
        <TheNavigation />
      </header>
      <main class="h-0 flex-grow overflow-y-auto px-2 py-9 md:px-4">
        <slot />
      </main>
      <footer
        class="dark:border-tertiary sticky bottom-0 left-0 z-50 flex h-14 w-full items-center justify-between overflow-hidden bg-light bg-opacity-95 p-2 shadow-lg dark:bg-dark dark:bg-opacity-95"
      >
        <TheFooter />
        <PlayerHealthBar
          v-if="isGameInProgress"
          class="z-50 md:hidden"
          :player-health="playerHealth"
          is-small
          is-full-width
        />
      </footer>
    </div>
  </ColorScheme>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'

const { playerHealth, isGameInProgress } = storeToRefs(usePlayerStore())
</script>

<style></style>
