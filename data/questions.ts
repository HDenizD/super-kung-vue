import { type Stage } from '~/store/stage'

export const questions: Stage[] = [
  {
    question: 'What is the new feature in Vue 3 for handling state?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'Composition API', isCorrect: true },
      { option: 'Mixins', isCorrect: false },
      { option: 'Directives', isCorrect: false },
      { option: 'Components', isCorrect: false }
    ]
  },
  {
    question: 'What is the new method for creating a Vue 3 application?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'createApp', isCorrect: true },
      { option: 'new Vue', isCorrect: false },
      { option: 'Vue.create', isCorrect: false },
      { option: 'Vue.init', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new feature in Vue 3 for code reuse and logic extraction?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'Composition API', isCorrect: true },
      { option: 'Mixins', isCorrect: false },
      { option: 'Directives', isCorrect: false },
      { option: 'Components', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 directive for conditionally rendering elements once?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'v-memo', isCorrect: true },
      { option: 'v-once', isCorrect: false },
      { option: 'v-if', isCorrect: false },
      { option: 'v-show', isCorrect: false }
    ]
  },
  {
    question: 'What is the new Vue 3 feature for handling side effects?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'watchEffect', isCorrect: true },
      { option: 'watch', isCorrect: false },
      { option: 'computed', isCorrect: false },
      { option: 'methods', isCorrect: false }
    ]
  },
  {
    question: 'What is the new Vue 3 feature for deep reactivity?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'reactive', isCorrect: true },
      { option: 'data', isCorrect: false },
      { option: 'props', isCorrect: false },
      { option: 'computed', isCorrect: false }
    ]
  },
  {
    question: 'What is the new Vue 3 feature for shallow reactivity?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'shallowReactive', isCorrect: true },
      { option: 'data', isCorrect: false },
      { option: 'props', isCorrect: false },
      { option: 'computed', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for creating read-only reactive objects?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'readonly', isCorrect: true },
      { option: 'data', isCorrect: false },
      { option: 'props', isCorrect: false },
      { option: 'computed', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for creating shallow read-only reactive objects?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'shallowReadonly', isCorrect: true },
      { option: 'data', isCorrect: false },
      { option: 'props', isCorrect: false },
      { option: 'computed', isCorrect: false }
    ]
  },
  {
    question: 'What is the new Vue 3 feature for creating computed properties?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'computed', isCorrect: true },
      { option: 'watch', isCorrect: false },
      { option: 'methods', isCorrect: false },
      { option: 'data', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for watching reactive dependencies?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'watch', isCorrect: true },
      { option: 'computed', isCorrect: false },
      { option: 'methods', isCorrect: false },
      { option: 'data', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for watching reactive dependencies and running side effects?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'watchEffect', isCorrect: true },
      { option: 'watch', isCorrect: false },
      { option: 'computed', isCorrect: false },
      { option: 'methods', isCorrect: false }
    ]
  },
  {
    question: 'What is the new Vue 3 feature for creating reactive references?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'ref', isCorrect: true },
      { option: 'reactive', isCorrect: false },
      { option: 'computed', isCorrect: false },
      { option: 'watch', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for creating custom reactive logic?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'customRef', isCorrect: true },
      { option: 'ref', isCorrect: false },
      { option: 'reactive', isCorrect: false },
      { option: 'computed', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 feature for creating lifecycle hooks in the Composition API?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'onMounted, onUpdated, etc.', isCorrect: true },
      { option: 'mounted, updated, etc.', isCorrect: false },
      { option: 'useMounted, useUpdated, etc.', isCorrect: false },
      { option: 'createMounted, createUpdated, etc.', isCorrect: false }
    ]
  }
]
