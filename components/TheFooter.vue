<template>
  <KVBtn
    class="block"
    icon="material-symbols:settings-rounded"
    @click="$router.push('/settings')"
  />
  <KVBtn
    v-if="isGameInProgress"
    class="block"
    is-retro
    label="Reset Game"
    @click="resetGame()"
  />
  <div class="block font-retro text-xs opacity-50">v.1</div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '~/store/player'

const { resetGame } = usePlayerStore()
const { isGameInProgress } = storeToRefs(usePlayerStore())
</script>

<style scoped></style>
