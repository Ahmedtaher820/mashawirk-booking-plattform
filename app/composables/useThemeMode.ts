import type { ThemeMode } from '~/interfaces/theme'

const THEME_COOKIE = 'mashawirk_theme'

export const useThemeMode = () => {
  const theme = useCookie<ThemeMode>(THEME_COOKIE, {
    default: () => 'light',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365
  })

  const isDark = computed(() => theme.value === 'dark')

  const applyThemeClass = (mode: ThemeMode) => {
    if (!import.meta.client) {
      return
    }

    const root = document.documentElement
    root.classList.toggle('dark', mode === 'dark')
    root.style.colorScheme = mode
  }

  const setTheme = (mode: ThemeMode) => {
    theme.value = mode
    applyThemeClass(mode)
  }

  const toggleTheme = () => {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  if (import.meta.client) {
    const instance = getCurrentInstance()
    if (instance) {
      onMounted(() => {
        applyThemeClass(theme.value || 'light')
      })
    } else {
      applyThemeClass(theme.value || 'light')
    }
  }

  return {
    theme,
    isDark,
    setTheme,
    toggleTheme,
    applyThemeClass
  }
}
