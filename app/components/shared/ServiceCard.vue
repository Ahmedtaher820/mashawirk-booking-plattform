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
import type { ServiceCardProps } from '~/interfaces/services'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<ServiceCardProps>(), {
  compact: false,
  showWhatsapp: true
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
const localePath = useLocalePath()
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
const title = computed(() => t(props.service.titleKey))
const description = computed(() => t(props.service.descriptionKey))
const disclaimer = computed(() =>
  props.service.disclaimerKey ? t(props.service.disclaimerKey) : ''
)
const message = computed(() => t(props.service.whatsappMessageKey))
const detailsTo = computed(() =>
  props.service.landingPath ? localePath(props.service.landingPath) : ''
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
  <article
    class="service-card reveal-on-scroll"
    :class="{
      'service-card--compact': compact,
      'service-card--secondary': service.priority === 'secondary'
    }"
  >
    <div class="service-card__icon" aria-hidden="true">
      {{ service.icon.slice(0, 1).toUpperCase() }}
    </div>

    <h3 class="service-card__title">
      {{ title }}
    </h3>

    <p class="service-card__description">
      {{ description }}
    </p>

    <p v-if="disclaimer" class="service-card__disclaimer">
      {{ disclaimer }}
    </p>

    <div class="service-card__actions">
      <NuxtLink
        v-if="detailsTo"
        :to="detailsTo"
        class="service-card__details"
      >
        {{ t('seoCommon.learnMore') }}
      </NuxtLink>

      <WhatsAppButton
        v-if="showWhatsapp"
        class="service-card__cta"
        :message="message"
        size="sm"
        block
      />
    </div>
  </article>
</template>

<style scoped lang="scss">
.service-card {
  @apply flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-soft;

  &--secondary {
    @apply opacity-95;
  }

  &__icon {
    @apply mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-sm font-bold text-gold dark:bg-ivory/10;
  }

  &__title {
    @apply mb-2 text-lg font-semibold text-[var(--color-text)];
  }

  &__description {
    @apply mb-3 text-sm leading-7 text-[var(--color-text-muted)];
  }

  &__disclaimer {
    @apply mb-4 rounded-xl bg-gold/15 px-3 py-2 text-xs font-medium leading-6 text-navy dark:text-ivory;
  }

  &__actions {
    @apply mt-auto flex flex-col gap-2;
  }

  &__details {
    @apply text-center text-sm font-semibold text-gold underline-offset-4 hover:underline;
  }

  &__cta {
    @apply w-full;
  }
}
</style>
