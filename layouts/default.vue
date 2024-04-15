<template>
  <div class="mx-auto max-w-7xl">
    <ColorScheme tag="span">
      <div class="flex min-h-screen flex-col">
        <header
          class="dark:border-tertiary sticky top-0 z-50 mb-2 flex items-center bg-light bg-opacity-95 p-2 pt-1 dark:bg-dark dark:bg-opacity-95"
        >
          <TheNavigation />
        </header>
        <main class="flex-grow px-2 pb-20 md:px-4">
          <slot />
        </main>
        <footer
          class="dark:border-tertiary fixed bottom-0 right-0 flex h-auto w-full items-center justify-between overflow-hidden bg-light bg-opacity-95 p-2 shadow-lg dark:bg-dark dark:bg-opacity-95"
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
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'

const { playerHealth, isGameInProgress } = storeToRefs(usePlayerStore())
</script>

<style></style>
