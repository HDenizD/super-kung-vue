import { type Stage } from '~/store/stage'

export const questions: Stage[] = [
  {
    question: 'What is the purpose of the v-model directive in Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option:
          'To establish data binding between an input field and the underlying data source.',
        isCorrect: true
      },
      {
        option: 'To modify the structure of the DOM document.',
        isCorrect: false
      },
      { option: 'To implement custom filters for data.', isCorrect: false },
      {
        option: 'To use conditional statements in templates.',
        isCorrect: false
      }
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
