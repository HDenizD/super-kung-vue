<template>
  <div class="flex flex-col items-center justify-center gap-12">
    <StageTile
      v-for="(stage, index) in indexBasedStagesTitleAndId"
      :key="stage.id"
      :title="stage.title"
      :index="index"
      :isLocked="
        checkIfAllPreviousStageIsNotCompletedAndLockIt(stage.id as string)
      "
      @click="$router.push(`/game/stage-${stage.id}`)"
    />
  </div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'

const { checkIfAllPreviousStageIsNotCompletedAndLockIt, initStages } =
  useStageStore()
const { indexBasedStagesTitleAndId } = storeToRefs(useStageStore())

const isClickableBecauseAllPreviousStagesAreCompleted = (stageId: string) => {
  return !checkIfAllPreviousStageIsNotCompletedAndLockIt(stageId)
}

initStages()
</script>

<style scoped></style>
