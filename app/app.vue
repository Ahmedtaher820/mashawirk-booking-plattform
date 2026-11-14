<script setup lang="ts">
/***************************************
 **** Section Imports Icons ************
 **************************************/
//#region Imports Icons
//#endregion

/***************************************
 **** Section Imports Components *******
 **************************************/
//#region Imports Components
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
//#endregion

/***************************************
 **** Section Emits Declaration ********
 **************************************/
//#region Emits
//#endregion

/***************************************
 **** Section Variables Declaration ****
 **************************************/
//#region Variables
const { locale, locales } = useI18n()
const { applyThemeClass, theme } = useThemeMode()
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region Meta
const currentLocale = computed(() => {
  return locales.value.find((item) => item.code === locale.value)
})

useHead(() => ({
  htmlAttrs: {
    lang: locale.value === 'ar' ? 'ar' : 'en',
    dir: currentLocale.value?.dir || (locale.value === 'ar' ? 'rtl' : 'ltr'),
    class: theme.value === 'dark' ? 'dark' : ''
  }
}))
//#endregion

/***************************************
 **** Section Computed Variables  ******
 **************************************/
//#region Computed
//#endregion

/***************************************
 **** Section Watchers *****************
 **************************************/
//#region Watchers
watch(
  theme,
  (value) => {
    applyThemeClass(value || 'light')
  },
  { immediate: true }
)
//#endregion

/***************************************
 **** Section Lifecycle Hooks  *********
 **************************************/
//#region Lifecycle Hooks
//#endregion

/***************************************
 **** Section Functions Declaration ****
 **************************************/
//#region Functions
//#endregion
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
