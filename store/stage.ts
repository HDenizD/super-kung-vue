import { questions } from '~/data/questions'

type Stage = {
  id?: string
  title?: string
  isCompleted: boolean
  question?: Question
}

export type Question = {
  question: string
  options: Option[]
  damageOnWrongAnswer: number
}

type Option = {
  option: string
  isCorrect: boolean
}

export const useStageStore = defineStore(
  'stage',
  () => {
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

    function toggleCompleteState(stageId: string) {
      const stage = getStageById.value(stageId)
      if (stage) {
        stage.isCompleted = !stage.isCompleted
      }
    }

    function stageConstructor(
      question: string,
      damageOnWrongAnswer: number,
      options: Option[]
    ) {
      const newStage = {
        id: '',
        title: '',
        question,
        damageOnWrongAnswer,
        options,
        isCompleted: false
      } as unknown as Stage
      stages.value.push(newStage)
    }

    function initStages() {
      if (stages.value.length > 0) return
      questions.forEach((question) => {
        stageConstructor(
          question.question,
          question.damageOnWrongAnswer,
          question.options
        )
      })
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
      toggleCompleteState,
      initStages,
      checkIfAllPreviousStageIsNotCompletedAndLockIt
    }
  },
  { persist: true }
)
