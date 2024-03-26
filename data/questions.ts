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
    question: 'What is the main feature of Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'Component-based architecture',
        isCorrect: true
      },
      {
        option: 'Server-side rendering',
        isCorrect: false
      },
      { option: 'Static typing', isCorrect: false },
      {
        option: 'Native mobile app development',
        isCorrect: false
      }
    ]
  },
  {
    question: 'What does Vue.js use for rendering?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'Virtual DOM',
        isCorrect: true
      },
      {
        option: 'Shadow DOM',
        isCorrect: false
      },
      { option: 'Real DOM', isCorrect: false },
      {
        option: 'HTML5 Canvas',
        isCorrect: false
      }
    ]
  },
  {
    question:
      'What lifecycle hook is called right after the instance is created?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'created',
        isCorrect: true
      },
      {
        option: 'mounted',
        isCorrect: false
      },
      { option: 'updated', isCorrect: false },
      {
        option: 'destroyed',
        isCorrect: false
      }
    ]
  },
  {
    question: 'What is the purpose of the `v-for` directive in Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'To render a list of items based on an array',
        isCorrect: true
      },
      {
        option: 'To loop over the properties of an object',
        isCorrect: false
      },
      { option: 'To conditionally render an element', isCorrect: false },
      {
        option: 'To bind data to a form input field',
        isCorrect: false
      }
    ]
  },
  {
    question: 'What is computed property in Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option:
          'A property whose value is calculated based on other data properties',
        isCorrect: true
      },
      {
        option: 'A property that is updated asynchronously',
        isCorrect: false
      },
      { option: 'A property that can only be set once', isCorrect: false },
      {
        option: 'A property that triggers a method when accessed',
        isCorrect: false
      }
    ]
  },
  {
    question: 'Which directive is used to conditionally display an element?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'v-if',
        isCorrect: true
      },
      {
        option: 'v-show',
        isCorrect: false
      },
      { option: 'v-bind', isCorrect: false },
      {
        option: 'v-model',
        isCorrect: false
      }
    ]
  },
  {
    question: 'What is the purpose of the `v-bind` directive in Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'To dynamically bind an attribute to an expression',
        isCorrect: true
      },
      {
        option: 'To conditionally render an element',
        isCorrect: false
      },
      { option: 'To iterate over a list', isCorrect: false },
      {
        option: 'To bind data to a form input field',
        isCorrect: false
      }
    ]
  },
  {
    question: 'What is the purpose of the `v-on` directive in Vue.js?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'To attach event listeners to DOM elements',
        isCorrect: true
      },
      {
        option: 'To dynamically bind an attribute to an expression',
        isCorrect: false
      },
      { option: 'To conditionally render an element', isCorrect: false },
      {
        option: 'To bind data to a form input field',
        isCorrect: false
      }
    ]
  },
  {
    question:
      'Which Vue.js feature allows for code reuse and separation of concerns?',
    damageOnWrongAnswer: 20,
    options: [
      {
        option: 'Components',
        isCorrect: true
      },
      {
        option: 'Directives',
        isCorrect: false
      },
      { option: 'Mixins', isCorrect: false },
      {
        option: 'Filters',
        isCorrect: false
      }
    ]
  }
]
