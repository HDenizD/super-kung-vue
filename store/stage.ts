import { usePlayerStore } from './player'
//TODO: if questions are updated, reset stages and init them again
import { questions } from '~/data/questions'

export type Stage = {
  id?: string
  title?: string
  isCompleted?: boolean
  options: Option[]
  question: string
  hasCorrectAnswerSelected?: boolean | null
  damageOnWrongAnswer: number
}

export type Option = {
  option: string
  isCorrect: boolean
}

export const useStageStore = defineStore(
  'stage',
  () => {
    const { playerHealth } = storeToRefs(usePlayerStore())
    const stages = ref<Stage[]>([])

    const indexBasedStagesTitleAndId = computed(() => {
      return (stages.value = stages.value.map((stage, index) => {
        return { ...stage, title: `Stage ${index + 1}`, id: String(index + 1) }
      }))
    })

    const getStageById = computed(() => (stageId: Stage['id']) => {
      if (stages.value.length === 0) initStages()
      return stages.value.find((stage) => stage.id === stageId)
    })

    function submitAnswer(stageId: string, selectedAnswer: Option) {
      const stage = getStageById.value(stageId)
      if (stage) {
        if (!selectedAnswer.isCorrect) {
          playerHealth.value -= stage.damageOnWrongAnswer
        }

        if (selectedAnswer !== null) {
          stage.hasCorrectAnswerSelected = selectedAnswer.isCorrect
        }
        if (selectedAnswer.isCorrect) {
          stage.isCompleted = !stage.isCompleted
        }
      }
    }

    function resetStages() {
      stages.value = []
      initStages()
    }

    function stageConstructor(
      question: Stage['question'],
      damageOnWrongAnswer: Stage['damageOnWrongAnswer'],
      options: Stage['options']
    ) {
      const newStage = {
        id: '',
        title: '',
        question,
        damageOnWrongAnswer,
        options,
        hasCorrectAnswerSelected: null,
        isCompleted: false
      } as Stage
      stages.value.push(newStage)
    }

    function initStages() {
      if (questions.length !== stages.value.length) {
        stages.value = []
      }
      if (stages.value.length === 0) {
        questions.forEach((question) => {
          stageConstructor(
            question.question,
            question.damageOnWrongAnswer,
            question.options
          )
        })
      }
    }

    function checkIfAllPreviousStageIsNotCompletedAndLockIt(
      stageId: string
    ): boolean {
      const currentStageIndex = stages.value.findIndex(
        (stage) => stage.id === stageId
      )
      if (currentStageIndex === 0) return false
      for (let i = 0; i < currentStageIndex; i++) {
        if (!stages.value[i].isCompleted) {
          return true
        }
      }
      return false
    }

    return {
      stages,
      indexBasedStagesTitleAndId,
      getStageById,
      submitAnswer,
      initStages,
      checkIfAllPreviousStageIsNotCompletedAndLockIt,
      resetStages
    }
  },
  { persist: { storage: persistedState.localStorage } }
)
