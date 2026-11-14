export default defineNuxtPlugin(() => {
  const { theme, applyThemeClass } = useThemeMode()
  applyThemeClass(theme.value || 'light')
})
