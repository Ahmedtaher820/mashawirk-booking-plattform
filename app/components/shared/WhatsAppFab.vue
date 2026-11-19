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
const href = computed(() =>
  buildWhatsappUrl({
    message: t('services.ordersMsg')
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
    message: t('services.ordersMsg')
  })
}
//#endregion
</script>

<template>
  <a
    class="whatsapp-fab"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="t('a11y.whatsappFab')"
    @click="onClick"
  >
    WA
  </a>
</template>

<style scoped lang="scss">
.whatsapp-fab {
  @apply fixed z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white shadow-lg;
  inset-inline-end: 1.25rem;
  bottom: 5.5rem;

  @media (min-width: 768px) {
    bottom: 1.25rem;
  }
}
</style>
