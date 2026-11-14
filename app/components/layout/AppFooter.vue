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
const { t, locale } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const servicesStore = useServicesStore()
const year = new Date().getFullYear()
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
  <footer class="app-footer">
    <div class="app-footer__grid">
      <div>
        <h2 class="app-footer__brand">
          {{ t('brand.name') }}
        </h2>
        <p class="app-footer__blurb">
          {{ t('footer.blurb') }}
        </p>
        <WhatsAppButton class="app-footer__cta" size="sm" />
        <PwaInstallButton class="app-footer__install" size="sm" />
      </div>

      <div>
        <h3 class="app-footer__title">
          {{ t('footer.services') }}
        </h3>
        <ul>
          <li v-for="service in servicesStore.allServices" :key="service.id">
            {{ t(service.titleKey) }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="app-footer__title">
          {{ t('footer.pages') }}
        </h3>
        <ul>
          <li><NuxtLink :to="localePath('/')">{{ t('nav.home') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/services')">{{ t('nav.services') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/about')">{{ t('nav.about') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/contact')">{{ t('nav.contact') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/faq')">{{ t('nav.faq') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/privacy')">{{ t('nav.privacy') }}</NuxtLink></li>
          <li><NuxtLink :to="localePath('/terms')">{{ t('nav.terms') }}</NuxtLink></li>
        </ul>
      </div>

      <div>
        <h3 class="app-footer__title">
          {{ t('footer.contact') }}
        </h3>
        <p>{{ t('home.inquiryTitle') }}</p>
        <p>{{ config.public.contactPhoneDisplay }}</p>
        <p>{{ address }}</p>
      </div>
    </div>

    <div class="app-footer__bottom">
      © {{ year }} {{ t('brand.name') }} — {{ t('footer.rights') }}
    </div>
  </footer>
</template>

<style scoped lang="scss">
.app-footer {
  @apply mt-16 bg-navy text-ivory;

  &__grid {
    @apply mx-auto grid w-full max-w-[90rem] gap-8 px-4 py-12 md:grid-cols-2 lg:grid-cols-4;
  }

  &__brand {
    @apply mb-3 text-xl font-semibold text-gold;
  }

  &__blurb {
    @apply mb-4 text-sm leading-7 text-ivory/80;
  }

  &__cta,
  &__install {
    @apply mb-3;
  }

  &__title {
    @apply mb-3 text-sm font-bold text-gold;
  }

  ul {
    @apply space-y-2 text-sm text-ivory/85;
  }

  a {
    @apply transition hover:text-gold;
  }

  &__bottom {
    @apply border-t border-white/10 px-4 py-4 text-center text-xs text-ivory/70;
  }
}
</style>
