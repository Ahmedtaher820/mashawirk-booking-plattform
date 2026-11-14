export default defineNuxtPlugin((nuxtApp) => {
  const { bindReveal } = useRevealOnScroll()

  const run = () => {
    nextTick(() => bindReveal(document))
  }

  // Lightweight: no MutationObserver (it was slowing the whole site).
  nuxtApp.hook('page:finish', run)
  onNuxtReady(run)
})
