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
const { t, locale } = useI18n()
const config = useRuntimeConfig()
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
const address = computed(() =>
  locale.value === 'ar'
    ? config.public.companyAddressAr
    : config.public.companyAddressEn
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
  <section class="inquiry-strip" aria-labelledby="inquiry-title">
    <div>
      <h2 id="inquiry-title" class="inquiry-strip__title">
        {{ t('home.inquiryTitle') }}
      </h2>
      <p class="inquiry-strip__text">
        {{ t('home.inquiryText') }}
      </p>
      <p class="inquiry-strip__meta">
        {{ config.public.contactPhoneDisplay }}
      </p>
      <p class="inquiry-strip__meta">
        {{ address }}
      </p>
    </div>

    <WhatsAppButton label-key="actions.contactWhatsapp" />
  </section>
</template>

<style scoped lang="scss">
.inquiry-strip {
  @apply flex flex-col gap-5 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:flex-row md:items-center md:justify-between md:p-8;

  &__title {
    @apply mb-2 text-2xl font-semibold text-[var(--color-text)];
  }

  &__text,
  &__meta {
    @apply text-sm leading-7 text-[var(--color-text-muted)];
  }
}
</style>
