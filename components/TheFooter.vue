<template>
  <KVBtn
    class="block"
    icon="material-symbols:settings-rounded"
    @click="$router.push('/settings')"
  />
  <div class="flex items-center justify-center gap-2">
    <label for="debugger">Game in Progress</label>
    <input
      id="debugger"
      type="checkbox"
      icon="material-symbols:settings-rounded"
      @click="toggleGameInProgress"
    />
  </div>
  <div class="block font-retro text-xs opacity-50">v.1</div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'

const { toggleGameInProgress } = usePlayerStore()
</script>

<style scoped></style>
