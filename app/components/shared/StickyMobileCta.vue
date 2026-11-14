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
import PwaInstallButton from '~/components/shared/PwaInstallButton.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
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
  <div class="sticky-mobile-cta" aria-label="Mobile booking actions">
    <PwaInstallButton label-key="actions.installShort" size="sm" />
    <WhatsAppButton size="sm" block />
  </div>
</template>

<style scoped lang="scss">
.sticky-mobile-cta {
  @apply fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-[var(--color-border)] p-3 backdrop-blur md:hidden;
  background: color-mix(in srgb, var(--color-bg) 95%, transparent);
}
</style>
