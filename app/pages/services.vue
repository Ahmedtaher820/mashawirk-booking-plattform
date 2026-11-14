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
import HomeBookingForm from '~/components/home/HomeBookingForm.vue'
import ServiceCard from '~/components/shared/ServiceCard.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
//#endregion

/***************************************
 **** Section Imports Functions *******
 **************************************/
//#region Imports Functions
import { useServicesStore } from '~~/stores/servicesStore'
//#endregion

/***************************************
 **** Section Meta Declaration  ******
 **************************************/
//#region meta
const { t } = useI18n()

definePageMeta({
  pageName: 'Services Page',
  title: 'Services Page'
})

useSeoPage(
  computed(() => ({
    title: t('services.seoTitle'),
    description: t('services.seoDescription'),
    keywords: t('services.seoKeywords')
  }))
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
const servicesStore = useServicesStore()
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
const services = computed(() => servicesStore.allServices)
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
  <div class="services-page">
    <header class="services-page__hero">
      <div>
        <h1>{{ t('services.pageTitle') }}</h1>
        <p>{{ t('services.pageText') }}</p>
      </div>
      <WhatsAppButton size="lg" />
    </header>

    <div class="services-page__grid">
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </div>

    <HomeBookingForm class="services-page__form" />
  </div>
</template>

<style scoped lang="scss">
.services-page {
  @apply min-h-screen;

  &__hero {
    @apply mb-8 flex flex-col gap-5 rounded-3xl bg-navy p-6 text-ivory md:flex-row md:items-center md:justify-between md:p-8;

    h1 {
      @apply mb-3 text-3xl font-semibold;
    }

    p {
      @apply max-w-3xl text-sm leading-8 text-ivory/80;
    }

    :deep(.app-button--secondary),
    :deep(.app-button--ghost) {
      color: #c5a46d !important;
      border-color: #c5a46d !important;
    }
  }

  &__grid {
    @apply grid gap-4 sm:grid-cols-2 xl:grid-cols-4;
  }

  &__form {
    @apply mt-10;
  }
}
</style>
