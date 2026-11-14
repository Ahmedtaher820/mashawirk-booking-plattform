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
import ServiceCard from '~/components/shared/ServiceCard.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import { useServicesStore } from '~~/stores/servicesStore'
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
  <section class="home-services" aria-labelledby="services-title">
    <div class="home-services__head">
      <h2 id="services-title">
        {{ t('home.servicesTitle') }}
      </h2>
      <p>{{ t('home.servicesSubtitle') }}</p>
    </div>

    <div class="home-services__grid">
      <ServiceCard
        v-for="service in services"
        :key="service.id"
        :service="service"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-services {
  &__head {
    @apply mb-6;

    h2 {
      @apply mb-2 text-2xl font-semibold text-[var(--color-text)] md:text-3xl;
    }

    p {
      @apply text-sm text-[var(--color-text-muted)];
    }
  }

  &__grid {
    @apply grid gap-4 sm:grid-cols-2 xl:grid-cols-4;
  }
}
</style>
