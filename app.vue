<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
const { initStages } = useStageStore()

onMounted(() => {
  initStages()
})
</script>

<style></style>
