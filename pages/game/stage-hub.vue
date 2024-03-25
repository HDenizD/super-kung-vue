<template>
  <div class="flex flex-col items-center justify-center gap-12">
    <StageTile
      v-for="stage in stages"
      :key="stage.id"
      :title="stage.title"
      :isLocked="checkIfAllPreviousStageIsNotCompletedAndLockIt(stage.id)"
      @click="
        isClickableBecauseAllPreviousStagesAreCompleted(stage.id) &&
          $router.push(`/game/stage-${stage.id}`)
      "
    />
  </div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'

const { stages, checkIfAllPreviousStageIsNotCompletedAndLockIt } =
  useStageStore()

const isClickableBecauseAllPreviousStagesAreCompleted = (stageId: string) => {
  return !checkIfAllPreviousStageIsNotCompletedAndLockIt(stageId)
}
</script>

<style scoped></style>
