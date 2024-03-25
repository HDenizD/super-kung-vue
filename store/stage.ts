type Stage = {
  id: string
  title: string
  description: string
  isCompleted: boolean
  damageOnWrongAnswer: number
}

export const useStageStore = defineStore('stage', () => {
  const stages = ref<Stage[]>([
    {
      id: '1',
      title: 'Stage 1',
      description: 'This is the first stage',
      isCompleted: false,
      damageOnWrongAnswer: 10
    },
    {
      id: '2',
      title: 'Stage 2',
      description: 'This is the second stage',
      isCompleted: false,
      damageOnWrongAnswer: 20
    },
    {
      id: '3',
      title: 'Stage 3',
      description: 'This is the third stage',
      isCompleted: false,
      damageOnWrongAnswer: 30
    },
    {
      id: '4',
      title: 'Stage 4',
      description: 'This is the fourth stage',
      isCompleted: false,
      damageOnWrongAnswer: 40
    },
    {
      id: '5',
      title: 'Stage 5',
      description: 'This is the fifth stage',
      isCompleted: false,
      damageOnWrongAnswer: 50
    },
    {
      id: '6',
      title: 'Stage 6',
      description: 'This is the sixth stage',
      isCompleted: false,
      damageOnWrongAnswer: 60
    },
    {
      id: '7',
      title: 'Stage 7',
      description: 'This is the seventh stage',
      isCompleted: false,
      damageOnWrongAnswer: 70
    },
    {
      id: '8',
      title: 'Stage 8',
      description: 'This is the eighth stage',
      isCompleted: false,
      damageOnWrongAnswer: 80
    },
    {
      id: '9',
      title: 'Stage 9',
      description: 'This is the ninth stage',
      isCompleted: false,
      damageOnWrongAnswer: 90
    },
    {
      id: '10',
      title: 'Stage 10',
      description: 'This is the tenth stage',
      isCompleted: false,
      damageOnWrongAnswer: 100
    },
    {
      id: '11',
      title: 'Stage 11',
      description: 'This is the eleventh stage',
      isCompleted: false,
      damageOnWrongAnswer: 110
    },
    {
      id: '12',
      title: 'Stage 12',
      description: 'This is the twelfth stage',
      isCompleted: false,
      damageOnWrongAnswer: 120
    },
    {
      id: '13',
      title: 'Stage 13',
      description: 'This is the thirteenth stage',
      isCompleted: false,
      damageOnWrongAnswer: 130
    },
    {
      id: '14',
      title: 'Stage 14',
      description: 'This is the fourteenth stage',
      isCompleted: false,
      damageOnWrongAnswer: 140
    },
    {
      id: '15',
      title: 'Stage 15',
      description: 'This is the fifteenth stage',
      isCompleted: false,
      damageOnWrongAnswer: 150
    }
  ])

  function checkIfPreviousStageIsNotCompletedAndLockIt(
    stageId: string
  ): boolean {
    const currentStageIndex = stages.value.findIndex(
      (stage) => stage.id === stageId
    )
    if (currentStageIndex === 0) return false
    const previousStage = stages.value[currentStageIndex - 1]
    return !previousStage.isCompleted
  }

  return {
    stages,
    checkIfPreviousStageIsNotCompletedAndLockIt
  }
})
