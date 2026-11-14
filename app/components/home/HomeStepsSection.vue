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
import { useHomeStore } from '~~/stores/homeStore'
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
const homeStore = useHomeStore()
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
const steps = computed(() => homeStore.steps)
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
  <section class="home-steps" aria-labelledby="steps-title">
    <div class="home-steps__head">
      <h2 id="steps-title">
        {{ t('home.stepsTitle') }}
      </h2>
      <WhatsAppButton label-key="actions.bookWhatsapp" size="sm" />
    </div>

    <div class="home-steps__grid">
      <article v-for="item in steps" :key="item.id" class="home-steps__card">
        <span>{{ item.step }}</span>
        <h3>{{ t(item.titleKey) }}</h3>
        <p>{{ t(item.descriptionKey) }}</p>
      </article>
    </div>
  </section>
</template>

<style scoped lang="scss">
.home-steps {
  &__head {
    @apply mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between;
  }

  h2 {
    @apply text-2xl font-semibold text-[var(--color-text)] md:text-3xl;
  }

  &__grid {
    @apply grid gap-4 md:grid-cols-3;
  }

  &__card {
    @apply rounded-2xl bg-navy p-5 text-ivory;

    span {
      @apply mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm font-bold text-navy;
    }

    h3 {
      @apply mb-2 text-lg font-semibold;
    }

    p {
      @apply text-sm leading-7 text-ivory/75;
    }
  }
}
</style>
