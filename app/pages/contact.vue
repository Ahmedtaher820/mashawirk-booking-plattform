<script setup lang="ts">
/***************************************
 **** Section Imports Icons ***********
 **************************************/
//#region Imports Icons
//#endregion

/***************************************
 **** Section Imports Components ******
 **************************************/
//#region Imports Components
import InquiryStrip from '~/components/shared/InquiryStrip.vue'
import PwaInstallButton from '~/components/shared/PwaInstallButton.vue'
//#endregion

/***************************************
 **** Section Imports Functions *******
 **************************************/
//#region Imports Functions
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region meta
const { t } = useI18n()

definePageMeta({
  pageName: 'Contact Page',
  title: 'Contact Page'
})

const localePath = useLocalePath()

useSeoPage(
  computed(() => ({
    title: t('contact.seoTitle'),
    description: t('contact.seoDescription')
  }))
)

useBreadcrumbJsonLd(
  computed(() => [
    { name: t('nav.home'), path: localePath('/') },
    { name: t('nav.contact'), path: localePath('/contact') }
  ])
)
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
  <div class="contact-page">
    <header>
      <h1>{{ t('contact.title') }}</h1>
      <p>{{ t('contact.text') }}</p>
      <PwaInstallButton />
    </header>

    <InquiryStrip />
  </div>
</template>

<style scoped lang="scss">
.contact-page {
  @apply flex min-h-[50vh] flex-col gap-6;

  header {
    @apply rounded-3xl bg-navy p-6 text-ivory md:p-8;

    h1 {
      @apply mb-3 text-3xl font-semibold;
    }

    p {
      @apply mb-5 max-w-2xl text-sm leading-8 text-ivory/80;
    }

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }
}
</style>
