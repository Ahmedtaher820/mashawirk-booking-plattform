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
import LanguageSwitch from '~/components/shared/LanguageSwitch.vue'
import PwaInstallButton from '~/components/shared/PwaInstallButton.vue'
import ThemeToggle from '~/components/shared/ThemeToggle.vue'
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
//#endregion

/***************************************
 **** Section General Imports  *********
 **************************************/
//#region General Imports
import type { NavLinkItem } from '~/interfaces/shared'
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
const localePath = useLocalePath()
const config = useRuntimeConfig()
const isMenuOpen = ref(false)

const links = computed<NavLinkItem[]>(() => [
  { key: 'home', to: localePath('/'), labelKey: 'nav.home' },
  { key: 'services', to: localePath('/services'), labelKey: 'nav.services' },
  { key: 'about', to: localePath('/about'), labelKey: 'nav.about' },
  { key: 'contact', to: localePath('/contact'), labelKey: 'nav.contact' }
])
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
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
//#endregion
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner">
      <NuxtLink :to="localePath('/')" class="app-header__brand" @click="closeMenu">
        <img
          src="/icons/icon-192.webp"
          width="40"
          height="40"
          alt="Mashawirk"
          class="app-header__logo"
          decoding="async"
          fetchpriority="low"
        >
        <span>{{ t('brand.name') }}</span>
      </NuxtLink>

      <nav class="app-header__nav" :aria-label="t('a11y.mainNavigation')">
        <NuxtLink
          v-for="link in links"
          :key="link.key"
          :to="link.to"
          class="app-header__link"
        >
          {{ t(link.labelKey) }}
        </NuxtLink>
      </nav>

      <div class="app-header__actions">
        <PwaInstallButton class="app-header__install-desktop" label-key="actions.installShort" />
        <ThemeToggle />
        <LanguageSwitch />
        <WhatsAppButton class="app-header__whatsapp-desktop" size="sm" />

        <AppButton
          class="app-header__burger"
          variant="ghost"
          size="sm"
          :aria-label="isMenuOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <span aria-hidden="true">{{ isMenuOpen ? '✕' : '☰' }}</span>
        </AppButton>
      </div>
    </div>

    <div v-if="isMenuOpen" class="app-header__mobile" role="dialog" aria-modal="true">
      <NuxtLink
        v-for="link in links"
        :key="`mobile-${link.key}`"
        :to="link.to"
        class="app-header__mobile-link"
        @click="closeMenu"
      >
        {{ t(link.labelKey) }}
      </NuxtLink>

      <PwaInstallButton block label-key="actions.installApp" />
      <WhatsAppButton block />
      <p class="app-header__mobile-phone">
        {{ config.public.contactPhoneDisplay }}
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  @apply sticky top-0 z-50 border-b border-[var(--color-border)] backdrop-blur;
  background: color-mix(in srgb, var(--color-bg) 95%, transparent);
  /* Fixed bar height prevents CLS when actions hydrate */
  min-height: 3.5rem;

  &__inner {
    @apply mx-auto flex h-14 w-full max-w-[90rem] items-center justify-between gap-3 px-4;
  }

  &__brand {
    @apply flex items-center gap-2 text-base font-bold text-[var(--color-text)];
  }

  &__logo {
    @apply h-10 w-10 rounded-xl object-cover;
  }

  &__nav {
    @apply hidden items-center gap-5 lg:flex;
  }

  &__link {
    @apply text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-gold;
  }

  &__actions {
    @apply flex items-center gap-1;
  }

  &__install-desktop,
  &__whatsapp-desktop {
    @apply hidden md:inline-flex;
  }

  &__burger {
    @apply lg:hidden;
  }

  &__mobile {
    @apply mx-4 mb-4 flex flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-soft lg:hidden;
  }

  &__mobile-link {
    @apply rounded-xl px-3 py-2 text-sm font-semibold text-[var(--color-text)] hover:bg-gold/10;
  }

  &__mobile-phone {
    @apply text-center text-sm text-[var(--color-text-muted)];
  }
}
</style>
