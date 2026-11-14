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
import AppButton from '~/components/shared/AppButton.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import type {
  PwaDevicePlatform,
  PwaInstallGuideContent
} from '~/interfaces/pwa'
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
const {
  showInstallGuide,
  closeInstallGuide,
  promptInstall,
  canInstall,
  isIos,
  devicePlatform,
  refreshDevicePlatform
} = usePwaInstall()

const guides: Record<PwaDevicePlatform, PwaInstallGuideContent> = {
  android: {
    platform: 'android',
    titleKey: 'pwa.androidTitle',
    hintKey: 'pwa.androidHint',
    image: '/images/pwa/android-steps.webp',
    imageAltKey: 'pwa.androidImageAlt',
    steps: [
      { textKey: 'pwa.androidStep1' },
      { textKey: 'pwa.androidStep2' },
      { textKey: 'pwa.androidStep3' }
    ]
  },
  ios: {
    platform: 'ios',
    titleKey: 'pwa.iosTitle',
    hintKey: 'pwa.iosHint',
    image: '/images/pwa/ios-steps.webp',
    imageAltKey: 'pwa.iosImageAlt',
    steps: [
      { textKey: 'pwa.iosStep1' },
      { textKey: 'pwa.iosStep2' },
      { textKey: 'pwa.iosStep3' }
    ]
  },
  mac: {
    platform: 'mac',
    titleKey: 'pwa.macTitle',
    hintKey: 'pwa.macHint',
    image: '/images/pwa/mac-steps.webp',
    imageAltKey: 'pwa.macImageAlt',
    steps: [
      { textKey: 'pwa.macStep1' },
      { textKey: 'pwa.macStep2' },
      { textKey: 'pwa.macStep3' }
    ]
  },
  windows: {
    platform: 'windows',
    titleKey: 'pwa.windowsTitle',
    hintKey: 'pwa.windowsHint',
    image: '/images/pwa/windows-steps.webp',
    imageAltKey: 'pwa.windowsImageAlt',
    steps: [
      { textKey: 'pwa.windowsStep1' },
      { textKey: 'pwa.windowsStep2' },
      { textKey: 'pwa.windowsStep3' }
    ]
  },
  other: {
    platform: 'other',
    titleKey: 'pwa.desktopTitle',
    hintKey: 'pwa.desktopHint',
    image: '/images/pwa/windows-steps.webp',
    imageAltKey: 'pwa.desktopImageAlt',
    steps: [
      { textKey: 'pwa.desktopStep1' },
      { textKey: 'pwa.desktopStep2' },
      { textKey: 'pwa.desktopStep3' }
    ]
  }
}
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
const activeGuide = computed(
  () => guides[devicePlatform.value] || guides.other
)

const platformBadge = computed(() => {
  switch (devicePlatform.value) {
    case 'android':
      return t('pwa.platformAndroid')
    case 'ios':
      return t('pwa.platformIos')
    case 'mac':
      return t('pwa.platformMac')
    case 'windows':
      return t('pwa.platformWindows')
    default:
      return t('pwa.platformDesktop')
  }
})
//#endregion

/***************************************
 **** Section Watchers *****************
 **************************************/
//#region Watchers
watch(showInstallGuide, (open) => {
  if (open) {
    refreshDevicePlatform()
  }
})
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
const retryInstall = async () => {
  closeInstallGuide()
  await promptInstall()
}

const onBackdropClick = () => {
  closeInstallGuide()
}
//#endregion
</script>

<template>
  <Teleport to="body">
    <div
      v-if="showInstallGuide"
      class="pwa-install-guide"
      role="dialog"
      aria-modal="true"
      :aria-label="t(activeGuide.titleKey)"
      @click.self="onBackdropClick"
    >
    <div class="pwa-install-guide__card">
      <div class="pwa-install-guide__badge">
        {{ platformBadge }}
      </div>

      <h3>{{ t(activeGuide.titleKey) }}</h3>
      <p>{{ t(activeGuide.hintKey) }}</p>

      <figure class="pwa-install-guide__figure">
        <img
          :src="activeGuide.image"
          :alt="t(activeGuide.imageAltKey)"
          width="720"
          height="405"
          loading="lazy"
          decoding="async"
        >
      </figure>

      <ol>
        <li
          v-for="(step, index) in activeGuide.steps"
          :key="step.textKey"
        >
          <span class="pwa-install-guide__step-num">{{ index + 1 }}</span>
          <span>{{ t(step.textKey) }}</span>
        </li>
      </ol>

      <div class="pwa-install-guide__actions">
        <AppButton
          v-if="canInstall && !isIos"
          :label="t('actions.installApp')"
          variant="primary"
          @click="retryInstall"
        />
        <AppButton
          :label="t('actions.gotIt')"
          variant="secondary"
          @click="closeInstallGuide"
        />
      </div>
    </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.pwa-install-guide {
  @apply fixed inset-0 z-[80] flex items-center justify-center bg-navy/60 p-4;

  &__card {
    @apply max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[var(--color-surface)] p-5 text-[var(--color-text)] shadow-soft;

    h3 {
      @apply mb-2 text-xl font-semibold;
    }

    > p {
      @apply mb-4 text-sm leading-7 text-[var(--color-text-muted)];
    }

    ol {
      @apply mb-5 space-y-3 text-sm leading-7 text-[var(--color-text-muted)];
    }

    li {
      @apply flex items-start gap-3;
    }
  }

  &__badge {
    @apply mb-3 inline-flex rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold;
  }

  &__figure {
    @apply mb-4 overflow-hidden rounded-2xl border border-[var(--color-border)] bg-navy/5;

    img {
      @apply h-auto w-full object-cover;
    }
  }

  &__step-num {
    @apply mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy;
  }

  &__actions {
    @apply flex flex-wrap gap-2;
  }
}
</style>
