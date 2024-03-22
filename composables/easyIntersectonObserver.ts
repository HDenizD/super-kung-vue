export function useEasyIntersectionObserver() {
  function observeElement(el: HTMLElement, animation: string) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animation, 'opacity-100')
          }
        })
      },
      {
        threshold: 0.2
      }
    )
    observer.observe(el)
    el.classList.add('animate__animated', 'opacity-0')
    onUnmounted(() => {
      observer.disconnect()
    })
  }

  return {
    observeElement
  }
}
