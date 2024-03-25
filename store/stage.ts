type Stage = {
  id: string
  title: string
  description: string
  isCompleted: boolean
  questions: Question
}

type Question = {
  question: string
  options: Option[]
  damageOnWrongAnswer: number
}

type Option = {
  option: string
  isCorrect: boolean
}

export const useStageStore = defineStore('stage', () => {
  const stages = ref<Stage[]>([
    {
      id: '1',
      title: 'Stage 1',
      description: 'This is the first stage',
      isCompleted: false,
      questions: {
        question: 'What is 1 + 1?',
        options: [
          { option: '1', isCorrect: false },
          { option: '2', isCorrect: true },
          { option: '3', isCorrect: false },
          { option: '4', isCorrect: false }
        ],
        damageOnWrongAnswer: 10
      }
    },
    {
      id: '2',
      title: 'Stage 2',
      description: 'This is the second stage',
      isCompleted: false,
      questions: {
        question: 'What is 3 + 3?',
        options: [
          { option: '5', isCorrect: false },
          { option: '6', isCorrect: true },
          { option: '7', isCorrect: false },
          { option: '8', isCorrect: false }
        ],
        damageOnWrongAnswer: 10
      }
    }
  ])

  const getStage = computed(() => (stageId: Stage['id']) => {
    return stages.value.find((stage) => stage.id === stageId)
  })

  function stageConstructor(
    title: string,
    description: string,
    isCompleted: boolean,
    questions: Question
  ): Stage {
    if (title === '' || description === '')
      throw new Error('Title and description cannot be empty')

    return {
      id: String(stages.value.length + 1),
      title,
      description,
      isCompleted,
      questions
    }
  }

  stageConstructor('Stage 3', 'This is the third stage', false, {
    question: 'Something',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: true },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: false }
    ]
  })

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
    getStage,
    checkIfAllPreviousStageIsNotCompletedAndLockIt
  }
})
