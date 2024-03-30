export function useTypeWriterEffect() {
  const typeEffectTarget = ref('')

  function typeWriterEffect(
    sentence: string,
    target: Ref,
    typeSpeedInMs: number
  ) {
    const splitedSentence = sentence.split('')
    splitedSentence.forEach((letter, index) => {
      setTimeout(() => {
        target.value += letter
      }, index * typeSpeedInMs)
    })
  }

  return { typeWriterEffect, typeEffectTarget }
}
