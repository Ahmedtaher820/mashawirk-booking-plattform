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
import type { WhatsAppButtonProps } from '~/interfaces/whatsappButton'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<WhatsAppButtonProps>(), {
  labelKey: 'actions.bookWhatsapp',
  message: '',
  size: 'md',
  block: false,
  variant: 'whatsapp'
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
const { buildWhatsappUrl, openWhatsapp } = useWhatsapp()
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
const label = computed(() => t(props.labelKey))
const href = computed(() =>
  buildWhatsappUrl({
    message: props.message
  })
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
const onClick = (event: MouseEvent) => {
  event.preventDefault()
  openWhatsapp({
    message: props.message
  })
}
//#endregion
</script>

<template>
  <AppButton
    :href="href"
    :label="label"
    :size="size"
    :block="block"
    :variant="variant"
    external
    @click="onClick"
  />
</template>

<style scoped lang="scss">
</style>