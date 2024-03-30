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
  },
  {
    question: 'What is the purpose of the `reactive` function in Vue 3?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'To create a reactive object', isCorrect: true },
      { option: 'To define props in a component', isCorrect: false },
      { option: 'To create a computed property', isCorrect: false },
      { option: 'To define methods in a component', isCorrect: false }
    ]
  },
  {
    question:
      'Which Vue 3 feature allows you to optimize re-renders by memoizing a value?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: '`v-memo`', isCorrect: true },
      { option: '`v-once`', isCorrect: false },
      { option: '`v-if`', isCorrect: false },
      { option: '`v-show`', isCorrect: false }
    ]
  },
  {
    question: 'What is the syntax for defining a template ref in Vue 3?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: '`ref="myRef"`', isCorrect: true },
      { option: '`#myRef`', isCorrect: false },
      { option: '`v-ref="myRef"`', isCorrect: false },
      { option: '`@ref.myRef`', isCorrect: false }
    ]
  },
  {
    question:
      'Which Vue 3 feature allows you to dynamically bind CSS classes and styles?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: '`:class` and `:style`', isCorrect: true },
      { option: '`v-bind:class` and `v-bind:style`', isCorrect: false },
      { option: '`v-class` and `v-style`', isCorrect: false },
      { option: '`class` and `style`', isCorrect: false }
    ]
  },
  {
    question:
      'How can you conditionally render a component in Vue 3 based on a prop value?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'Using `v-if`', isCorrect: true },
      { option: 'Using `v-show`', isCorrect: false },
      { option: 'Using `v-once`', isCorrect: false },
      { option: 'Using `v-memo`', isCorrect: false }
    ]
  },
  {
    question:
      'What is the new Vue 3 function for creating reactive references with mutable values?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: '`ref`', isCorrect: true },
      { option: '`reactiveRef`', isCorrect: false },
      { option: '`mutableRef`', isCorrect: false },
      { option: '`createRef`', isCorrect: false }
    ]
  },
  {
    question: 'Which Vue 3 feature enables the creation of custom directives?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: '`v-directive`', isCorrect: false },
      { option: '`v-custom`', isCorrect: false },
      { option: '`customDirective`', isCorrect: false },
      { option: '`directive`', isCorrect: true }
    ]
  },
  {
    question:
      'How can you listen to a custom event emitted by a child component in Vue 3?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'Using `@custom-event`', isCorrect: true },
      { option: 'Using `v-on:custom-event`', isCorrect: false },
      { option: 'Using `v-model`', isCorrect: false },
      { option: 'Using `v-bind:custom-event`', isCorrect: false }
    ]
  },
  {
    question:
      'What is the purpose of the `toRefs` function in Vue 3 Composition API?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'To convert reactive objects into refs', isCorrect: false },
      { option: 'To convert refs into plain objects', isCorrect: false },
      { option: 'To convert refs into reactive objects', isCorrect: false },
      {
        option: 'To convert reactive objects into plain objects',
        isCorrect: true
      }
    ]
  },
  {
    question:
      'Which Vue 3 feature allows you to optimize performance by lazy loading components?',
    damageOnWrongAnswer: Math.floor(Math.random() * 21) + 10,
    options: [
      { option: 'Async components', isCorrect: false },
      { option: 'Dynamic components', isCorrect: false },
      { option: 'Suspense', isCorrect: false },
      { option: 'Teleport', isCorrect: true }
    ]
  }
]
