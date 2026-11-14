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
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import type { PwaInstallSectionProps } from '~/interfaces/pwa'
//#endregion

/***************************************
 **** Section Props Declaration  ******
 **************************************/
//#region Props
const props = withDefaults(defineProps<PwaInstallSectionProps>(), {
  titleKey: 'pwa.sectionTitle',
  descriptionKey: 'pwa.sectionText'
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
const { devicePlatform, refreshDevicePlatform } = usePwaInstall()
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
const title = computed(() => t(props.titleKey))
const description = computed(() => t(props.descriptionKey))
const deviceHint = computed(() => {
  switch (devicePlatform.value) {
    case 'ios':
      return t('pwa.iosHint')
    case 'android':
      return t('pwa.androidHint')
    case 'mac':
      return t('pwa.macHint')
    case 'windows':
      return t('pwa.windowsHint')
    default:
      return t('pwa.desktopHint')
  }
})
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
onMounted(() => {
  refreshDevicePlatform()
})
//#endregion

/***************************************
 **** Section Functions Declaration ****
 **************************************/
//#region Functions
//#endregion
</script>

<template>
  <section class="pwa-install-section" aria-labelledby="pwa-install-title">
    <div class="pwa-install-section__content">
      <img
        class="pwa-install-section__icon"
        src="/icons/icon-192.webp"
        width="72"
        height="72"
        alt="Mashawirk"
        loading="lazy"
        decoding="async"
      >

      <div>
        <h2 id="pwa-install-title" class="pwa-install-section__title">
          {{ title }}
        </h2>
        <p class="pwa-install-section__text">
          {{ description }}
        </p>

        <ul class="pwa-install-section__benefits">
          <li>{{ t('pwa.benefitFast') }}</li>
          <li>{{ t('pwa.benefitIcon') }}</li>
          <li>{{ t('pwa.benefitEasy') }}</li>
        </ul>

        <PwaInstallButton size="md" />

        <p class="pwa-install-section__hint">
          {{ deviceHint }}
        </p>
      </div>
    </div>

    </section>
</template>

<style scoped lang="scss">
.pwa-install-section {
  @apply relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:p-8;

  &__content {
    @apply flex flex-col gap-5 md:flex-row md:items-center;
  }

  &__icon {
    @apply h-16 w-16 rounded-2xl object-cover;
  }

  &__title {
    @apply mb-2 text-2xl font-semibold text-[var(--color-text)];
  }

  &__text {
    @apply mb-4 max-w-2xl text-sm leading-7 text-[var(--color-text-muted)];
  }

  &__benefits {
    @apply mb-5 flex flex-wrap gap-3 text-xs font-semibold text-navy dark:text-ivory;

    li {
      @apply rounded-full bg-gold/20 px-3 py-1;
    }
  }

  &__hint {
    @apply mt-3 text-xs text-[var(--color-text-muted)];
  }

  &__ios {
    @apply mt-5 rounded-2xl bg-navy p-4 text-ivory;

    ol {
      @apply my-3 list-decimal pe-5 text-sm leading-7;
    }
  }

  &__close {
    @apply rounded-lg bg-gold px-4 py-2 text-sm font-bold text-navy;
  }
}
</style>
