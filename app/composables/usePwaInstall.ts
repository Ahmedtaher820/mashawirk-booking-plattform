import type { PwaDevicePlatform, PwaInstallState } from '~/interfaces/pwa'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

type PwaApi = {
  showInstallPrompt?: boolean
  needRefresh?: boolean
  offlineReady?: boolean
  isPWAInstalled?: boolean
  install?: () => Promise<void> | void
  cancelInstall?: () => void
}

const detectPlatform = (): PwaDevicePlatform => {
  if (!import.meta.client) {
    return 'other'
  }

  const ua = navigator.userAgent || ''
  const platform = navigator.platform || ''
  const maxTouch = navigator.maxTouchPoints || 0

  const isIpadOs =
    /ipad/i.test(ua) ||
    (platform === 'MacIntel' && maxTouch > 1)
  const isIphone = /iphone|ipod/i.test(ua)
  const isAndroid = /android/i.test(ua)
  const isMac = /macintosh|mac os x/i.test(ua) && !isIpadOs
  const isWindows = /windows|win32|win64/i.test(ua)

  if (isIphone || isIpadOs) {
    return 'ios'
  }

  if (isAndroid) {
    return 'android'
  }

  if (isMac) {
    return 'mac'
  }

  if (isWindows) {
    return 'windows'
  }

  return 'other'
}

const withTimeout = async <T>(
  promise: Promise<T>,
  ms: number
): Promise<T | null> => {
  let timer: ReturnType<typeof setTimeout> | undefined

  try {
    return await Promise.race([
      promise,
      new Promise<null>((resolve) => {
        timer = setTimeout(() => resolve(null), ms)
      })
    ])
  } finally {
    if (timer) {
      clearTimeout(timer)
    }
  }
}

export const usePwaInstall = () => {
  const state = useState<PwaInstallState>('pwa-install-state', () => 'idle')
  const deferredPrompt = useState<BeforeInstallPromptEvent | null>(
    'pwa-deferred-prompt',
    () => null
  )
  const showInstallGuide = useState('pwa-install-guide', () => false)
  const isInstalling = useState('pwa-installing', () => false)
  const devicePlatform = useState<PwaDevicePlatform>(
    'pwa-device-platform',
    () => 'other'
  )

  const pwa = computed<PwaApi | null>(() => {
    if (!import.meta.client) {
      return null
    }

    return (useNuxtApp().$pwa as PwaApi | undefined) || null
  })

  const isStandalone = computed(() => {
    if (!import.meta.client) {
      return false
    }

    const media = window.matchMedia('(display-mode: standalone)').matches
    const iosStandalone =
      'standalone' in navigator &&
      Boolean((navigator as Navigator & { standalone?: boolean }).standalone)

    return media || iosStandalone
  })

  const isIos = computed(() => devicePlatform.value === 'ios')
  const isAndroid = computed(() => devicePlatform.value === 'android')
  const isDesktop = computed(
    () =>
      devicePlatform.value === 'mac' ||
      devicePlatform.value === 'windows' ||
      devicePlatform.value === 'other'
  )

  const showIosGuide = showInstallGuide

  const canInstall = computed(
    () =>
      Boolean(pwa.value?.showInstallPrompt) ||
      Boolean(deferredPrompt.value) ||
      state.value === 'available'
  )

  const refreshDevicePlatform = () => {
    if (!import.meta.client) {
      return
    }

    devicePlatform.value = detectPlatform()
  }

  const detectState = () => {
    if (!import.meta.client) {
      return
    }

    refreshDevicePlatform()

    if (isStandalone.value) {
      state.value = 'installed'
      return
    }

    if (isIos.value) {
      state.value = 'ios-manual'
      return
    }

    if (pwa.value?.showInstallPrompt || deferredPrompt.value) {
      state.value = 'available'
      return
    }

    state.value = 'unsupported'
  }

  const openInstallGuide = () => {
    refreshDevicePlatform()
    showInstallGuide.value = true
  }

  const registerInstallPromptListener = () => {
    if (!import.meta.client) {
      return
    }

    refreshDevicePlatform()

    window.addEventListener('beforeinstallprompt', (event: Event) => {
      event.preventDefault()
      deferredPrompt.value = event as BeforeInstallPromptEvent
      state.value = 'available'
    })

    window.addEventListener('appinstalled', () => {
      deferredPrompt.value = null
      state.value = 'installed'
      showInstallGuide.value = false
      isInstalling.value = false
    })

    detectState()
  }

  /**
   * Always open the device how-to guide (screenshots + steps).
   * Native Chromium prompt is best-effort and must never block the guide
   * (headless / some desktops hang on prompt()/userChoice).
   */
  const promptInstall = async () => {
    if (!import.meta.client || isInstalling.value) {
      return
    }

    detectState()
    openInstallGuide()

    if (isIos.value || isStandalone.value) {
      return
    }

    if (!deferredPrompt.value && !pwa.value?.showInstallPrompt) {
      return
    }

    isInstalling.value = true

    try {
      if (pwa.value?.install && pwa.value.showInstallPrompt) {
        await withTimeout(Promise.resolve(pwa.value.install()), 2500)
        if (isStandalone.value) {
          state.value = 'installed'
          showInstallGuide.value = false
          return
        }
      }

      if (deferredPrompt.value) {
        const promptEvent = deferredPrompt.value
        await withTimeout(promptEvent.prompt(), 2500)
        const choice = await withTimeout(promptEvent.userChoice, 2500)
        deferredPrompt.value = null

        if (choice?.outcome === 'accepted') {
          state.value = 'installed'
          showInstallGuide.value = false
        } else {
          detectState()
        }
      }
    } catch {
      detectState()
    } finally {
      isInstalling.value = false
    }
  }

  const closeIosGuide = () => {
    showInstallGuide.value = false
  }

  const closeInstallGuide = closeIosGuide

  return {
    state,
    canInstall,
    isStandalone,
    isIos,
    isAndroid,
    isDesktop,
    devicePlatform,
    showIosGuide,
    showInstallGuide,
    isInstalling,
    promptInstall,
    openInstallGuide,
    closeIosGuide,
    closeInstallGuide,
    registerInstallPromptListener,
    detectState,
    refreshDevicePlatform
  }
}
