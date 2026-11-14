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
import type { PwaInstallButtonProps } from '~/interfaces/pwa'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<PwaInstallButtonProps>(), {
  labelKey: 'actions.installApp',
  size: 'sm',
  variant: 'secondary',
  block: false
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
const { state, isInstalling, promptInstall } = usePwaInstall()
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
const label = computed(() => {
  if (state.value === 'installed') {
    return t('actions.installed')
  }

  if (isInstalling.value) {
    return t('actions.installApp')
  }

  return t(props.labelKey)
})

// Never permanently disable — users may still need the how-to guide
const disabled = computed(() => isInstalling.value)
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
const onInstallClick = async () => {
  await promptInstall()
}
//#endregion
</script>

<template>
  <AppButton
    :label="label"
    :size="size"
    :variant="variant"
    :block="block"
    :disabled="disabled"
    :aria-label="label"
    @click.stop="onInstallClick"
  />
</template>

<style scoped lang="scss">
</style>
