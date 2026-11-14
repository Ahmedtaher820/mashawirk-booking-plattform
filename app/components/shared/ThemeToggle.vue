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
import AppButton from '~/components/shared/AppButton.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import type { ThemeToggleProps } from '~/interfaces/theme'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<ThemeToggleProps>(), {
  showLabel: false
})
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
const { t } = useI18n()
const { isDark, toggleTheme } = useThemeMode()
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region Meta
//#endregion

/***************************************
 **** Section Computed Variables  ******
 **************************************/
//#region Computed
const label = computed(() =>
  props.showLabel
    ? isDark.value
      ? t('actions.lightMode')
      : t('actions.darkMode')
    : t('actions.toggleTheme')
)
//#endregion

/***************************************
 **** Section Watchers *****************
 **************************************/
//#region Watchers
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
  <AppButton
    variant="ghost"
    size="sm"
    :label="label"
    :aria-label="label"
    @click="toggleTheme"
  >
    <ClientOnly>
      <span aria-hidden="true">{{ isDark ? '☀' : '☾' }}</span>
      <template #fallback>
        <span aria-hidden="true">☾</span>
      </template>
    </ClientOnly>
    <span v-if="showLabel">{{ label }}</span>
  </AppButton>
</template>

<style scoped lang="scss">
</style>
