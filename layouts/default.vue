<template>
  <ColorScheme tag="span">
    <div class="relative mx-auto flex min-h-screen max-w-7xl flex-col">
      <header
        class="dark:border-tertiary sticky left-0 top-0 z-50 flex h-16 items-center bg-light bg-opacity-95 p-4 dark:bg-dark dark:bg-opacity-95"
      >
        <TheNavigation />
      </header>
      <main class="mx-4 flex-1 py-8">
        <slot />
      </main>
      <footer
        class="dark:border-tertiary sticky bottom-0 left-0 z-50 flex h-16 w-full items-center justify-between overflow-hidden bg-light bg-opacity-95 p-4 shadow-lg dark:bg-dark dark:bg-opacity-95"
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
