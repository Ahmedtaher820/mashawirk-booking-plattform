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
const { t } = useI18n()
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
  <section class="home-whatsapp-band">
    <div>
      <h2>{{ t('home.whatsappBandTitle') }}</h2>
      <p>{{ t('home.whatsappBandText') }}</p>
    </div>
    <WhatsAppButton size="lg" />
  </section>
</template>

<style scoped lang="scss">
.home-whatsapp-band {
  @apply flex flex-col gap-5 rounded-3xl bg-navy p-6 text-ivory md:flex-row md:items-center md:justify-between md:p-8;

  h2 {
    @apply mb-2 text-2xl font-semibold md:text-3xl;
  }

  p {
    @apply max-w-2xl text-sm leading-7 text-ivory/80;
  }
}
</style>
