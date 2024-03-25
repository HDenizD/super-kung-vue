import { type Question } from '~/store/stage'

export const questions: Question[] = [
  {
    question: 'Something',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: true },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: false }
    ]
  },
  {
    question: 'Lorem',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: true },
      { option: '2', isCorrect: false },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: false }
    ]
  },
  {
    question: 'Ipsum',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: false },
      { option: '3', isCorrect: true },
      { option: '4', isCorrect: false }
    ]
  },
  {
    question: 'Dolor',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: false },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: true }
    ]
  },
  {
    question: 'Sit',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: true },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: false }
    ]
  },
  {
    question: 'Amet',
    damageOnWrongAnswer: 20,
    options: [
      { option: '1', isCorrect: false },
      { option: '2', isCorrect: false },
      { option: '3', isCorrect: false },
      { option: '4', isCorrect: true }
    ]
  }
]
