<template>
  <div class="flex flex-col items-center justify-center gap-12">
    <StageTile
      v-for="stage in stages"
      :key="stage.id"
      :title="stage.title"
      :isLocked="checkIfPreviousStageIsNotCompletedAndLockIt(stage.id)"
    />
  </div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'

const { stages, checkIfPreviousStageIsNotCompletedAndLockIt } = useStageStore()
</script>

<style scoped></style>
