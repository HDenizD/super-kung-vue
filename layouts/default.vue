<template>
  <div class="mx-auto max-w-7xl px-2 md:px-4">
    <ColorScheme tag="span">
      <div class="flex min-h-screen flex-col">
        <header
          class="dark:border-tertiary sticky top-0 z-50 mb-2 flex items-center bg-light bg-opacity-95 pt-1 dark:bg-dark dark:bg-opacity-95"
        >
          <TheNavigation />
        </header>
        <main class="my-10 flex-grow">
          <PlayerHealthBar
            v-if="isGameInProgress"
            class="sticky top-11 z-50 mb-10 md:hidden"
            :player-health="playerHealth"
            is-small
            is-full-width
          />
          <slot />
        </main>
        <footer
          class="dark:border-tertiary sticky bottom-0 right-0 mt-2 flex h-auto w-full items-center justify-between overflow-hidden bg-light bg-opacity-95 pb-2 shadow-lg dark:bg-dark dark:bg-opacity-95"
        >
          <TheFooter />
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
