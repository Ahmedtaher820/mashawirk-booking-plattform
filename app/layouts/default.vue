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
import AppHeader from '~/components/layout/AppHeader.vue'
import PwaInstallGuide from '~/components/shared/PwaInstallGuide.vue'
// Footer / FAB stay Lazy*; install guide must be eager so the modal can open
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
const { registerInstallPromptListener } = usePwaInstall()
const { applyThemeClass, theme } = useThemeMode()
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
onMounted(() => {
  applyThemeClass(theme.value || 'light')
  registerInstallPromptListener()
})
//#endregion

/***************************************
 **** Section Functions Declaration ****
 **************************************/
//#region Functions
//#endregion
</script>

<template>
  <div class="default-layout">
    <AppHeader />

    <main id="main-content" class="default-layout__main">
      <slot />
    </main>

    <LazyAppFooter hydrate-on-visible />

    <ClientOnly>
      <LazyStickyMobileCta hydrate-on-idle />
      <LazyWhatsAppFab hydrate-on-idle />
    </ClientOnly>

    <!-- Eager client mount (not Lazy) so Install always can open the guide -->
    <ClientOnly>
      <PwaInstallGuide />
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.default-layout {
  @apply min-h-screen bg-[var(--color-bg)] text-[var(--color-text)];

  &__main {
    @apply mx-auto w-full max-w-[90rem] px-4 py-6 pb-28 md:py-10 md:pb-10;
    /* Reserve space below sticky header (h-14) */
    padding-top: 1.5rem;
  }
}
</style>
