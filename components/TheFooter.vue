<template>
  <!-- <KVBtn
    class="block"
    icon="material-symbols:settings-rounded"
    @click="$router.push('/settings')"
  /> -->
  <div class="font-retro text-xs opacity-50">{{ packageJson.version }}</div>
  <KVBtn
    v-if="isGameInProgress"
    is-retro
    is-upper-case
    label="Reset Game"
    @click="resetGame('resetGame')"
  />
</template>

<script setup lang="ts">
import packageJson from '@/package.json'
import { usePlayerStore } from '~/store/player'

const { resetGame } = usePlayerStore()
const { isGameInProgress } = storeToRefs(usePlayerStore())
</script>

<style scoped></style>
