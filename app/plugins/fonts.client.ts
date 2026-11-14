/**
 * Defer Cairo @font-face until idle. With font-display:optional and no preload,
 * first visits keep system fonts (no CLS). Cached visits may apply Cairo quietly.
 */
export default defineNuxtPlugin(() => {
  if (!import.meta.client) {
    return
  }

  const inject = () => {
    if (document.getElementById('mashawirk-cairo')) {
      return
    }

    const link = document.createElement('link')
    link.id = 'mashawirk-cairo'
    link.rel = 'stylesheet'
    link.href = '/fonts/cairo.css'
    document.head.appendChild(link)
  }

  // Slightly earlier so reading feels soft, still after LCP
  const schedule = () => {
    window.setTimeout(inject, 1800)
  }

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(schedule, { timeout: 2500 })
  } else {
    window.addEventListener('load', schedule, { once: true })
  }
})
