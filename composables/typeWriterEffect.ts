export function useTypeWriterEffect() {
  const typeEffectTarget = ref('')

  function typeWriterEffect(sentence: string, typeSpeedInMs: number) {
    const splitedSentence = sentence.split('')
    splitedSentence.forEach((letter, index) => {
      setTimeout(() => {
        typeEffectTarget.value += letter
      }, index * typeSpeedInMs)
    })
  }

  return { typeWriterEffect, typeEffectTarget }
}
