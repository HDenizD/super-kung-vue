<template>
  <div class="flex flex-col items-center justify-center gap-12">
    <StageTile
      v-for="(stage, index) in indexBasedStagesTitleAndId"
      :key="stage.id"
      :title="stage.title"
      :index="index"
      :isCorrect="stage.hasCorrectAnswerSelected"
      :isLocked="
        stage.hasCorrectAnswerSelected ||
        checkIfAllPreviousStageIsNotCompletedAndLockIt(stage.id)
      "
      @click="
        isClickableBecauseAllPreviousStagesAreCompleted(stage.id) &&
          !stage.hasCorrectAnswerSelected &&
          $router.push(`/game/stage-${stage.id}`)
      "
    />
  </div>
</template>

<script setup lang="ts">
import { useStageStore } from '~/store/stage'
import { useRouter } from 'vue-router'

const router = useRouter()

const { checkIfAllPreviousStageIsNotCompletedAndLockIt } = useStageStore()
const { indexBasedStagesTitleAndId, isAllQuestionsAreCorrect } =
  storeToRefs(useStageStore())

const isClickableBecauseAllPreviousStagesAreCompleted = (stageId: string) => {
  return !checkIfAllPreviousStageIsNotCompletedAndLockIt(stageId)
}

watchEffect(() => {
  if (isAllQuestionsAreCorrect.value) {
    router.push('/game/win')
  }
})
</script>

<style scoped></style>
