export default defineNuxtPlugin(() => {
  const { registerInstallPromptListener } = usePwaInstall()
  registerInstallPromptListener()

  // Defer service worker until the browser is idle so it never blocks LCP.
  const registerLater = async () => {
    try {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: false })
    } catch {
      // PWA virtual module unavailable in some environments — ignore.
    }
  }

  if (typeof window !== 'undefined') {
    const run = () => {
      window.setTimeout(() => {
        void registerLater()
      }, 3500)
    }

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 5000 })
    } else {
      window.addEventListener('load', run, { once: true })
    }
  }
})
