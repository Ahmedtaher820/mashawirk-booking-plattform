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
import WhatsAppButton from '~/components/shared/WhatsAppButton.vue'
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
const { t, locale } = useI18n()
const { openWhatsapp, buildWhatsappUrl } = useWhatsapp()

const serviceType = ref('orders')
const pickup = ref('')
const destination = ref('')
const date = ref('')
const time = ref('')
const notes = ref('')
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
const serviceOptions = computed(() => [
  { value: 'orders', label: t('form.orders'), messageKey: 'services.ordersMsg' },
  { value: 'supplies', label: t('form.supplies'), messageKey: 'services.suppliesMsg' },
  { value: 'international', label: t('form.international'), messageKey: 'services.internationalMsg' },
  { value: 'passenger', label: t('form.passenger'), messageKey: 'services.passengerMsg' }
])

const composedMessage = computed(() => {
  const selected = serviceOptions.value.find((item) => item.value === serviceType.value)
  const isArabic = locale.value === 'ar'
  const dash = isArabic ? '—' : '-'

  return [
    `*${t('form.messageTitle')}*`,
    '',
    `${t('form.serviceType')}: ${selected?.label || dash}`,
    `${t('form.fromLabel')}: ${pickup.value.trim() || dash}`,
    `${t('form.toLabel')}: ${destination.value.trim() || dash}`,
    `${t('form.date')}: ${date.value || dash}`,
    `${t('form.time')}: ${time.value || dash}`,
    `${t('form.notes')}: ${notes.value.trim() || dash}`
  ].join('\n')
})

const previewWhatsappUrl = computed(() =>
  buildWhatsappUrl({
    message: composedMessage.value
  })
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
const submitToWhatsapp = () => {
  openWhatsapp({
    message: composedMessage.value
  })
}
//#endregion
</script>

<template>
  <section class="home-booking-form reveal-on-scroll" aria-labelledby="booking-form-title">
    <div class="home-booking-form__intro">
      <h2 id="booking-form-title">
        {{ t('home.formTitle') }}
      </h2>
      <p>{{ t('home.formText') }}</p>
      <WhatsAppButton :message="composedMessage" />
      <p class="home-booking-form__hint">
        {{ locale === 'ar'
          ? 'بعد الضغط، هيفتح واتساب والرسالة تكون جاهزة — اضغط إرسال.'
          : 'After clicking, WhatsApp opens with the message ready — just press Send.' }}
      </p>
    </div>

    <form class="home-booking-form__form" @submit.prevent="submitToWhatsapp">
      <label>
        <span>{{ t('form.serviceType') }}</span>
        <select v-model="serviceType">
          <option
            v-for="option in serviceOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.label }}
          </option>
        </select>
      </label>

      <label>
        <span>{{ t('form.fromLabel') }}</span>
        <input
          v-model="pickup"
          type="text"
          autocomplete="street-address"
          :placeholder="locale === 'ar' ? 'مثال: دبي، القصيص' : 'Example: Dubai, Al Qusais'"
          required
        >
      </label>

      <label>
        <span>{{ t('form.toLabel') }}</span>
        <input
          v-model="destination"
          type="text"
          autocomplete="street-address"
          :placeholder="locale === 'ar' ? 'مثال: الشارقة' : 'Example: Sharjah'"
          required
        >
      </label>

      <div class="home-booking-form__row">
        <label>
          <span>{{ t('form.date') }}</span>
          <input v-model="date" type="date" required>
        </label>
        <label>
          <span>{{ t('form.time') }}</span>
          <input v-model="time" type="time" required>
        </label>
      </div>

      <label>
        <span>{{ t('form.notes') }}</span>
        <textarea v-model="notes" rows="3" />
      </label>

      <AppButton
        type="submit"
        variant="whatsapp"
        block
        :label="t('form.submitWhatsapp')"
      />

      <a
        class="home-booking-form__fallback"
        :href="previewWhatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        @click.prevent="submitToWhatsapp"
      >
        {{ t('actions.bookWhatsapp') }}
      </a>
    </form>
  </section>
</template>

<style scoped lang="scss">
.home-booking-form {
  @apply grid gap-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-soft md:grid-cols-2 md:p-8;

  &__intro {
    h2 {
      @apply mb-3 text-2xl font-semibold text-[var(--color-text)];
    }

    p {
      @apply mb-5 text-sm leading-7 text-[var(--color-text-muted)];
    }
  }

  &__hint {
    @apply mt-4 text-xs leading-6 text-[var(--color-text-muted)];
  }

  &__form {
    @apply space-y-4;
  }

  label {
    @apply flex flex-col gap-2 text-sm font-semibold text-[var(--color-text)];
  }

  input,
  select,
  textarea {
    @apply rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-2.5 text-sm font-normal text-[var(--color-text)];
  }

  &__row {
    @apply grid gap-4 sm:grid-cols-2;
  }

  &__fallback {
    @apply block text-center text-xs text-[var(--color-text-muted)] underline;
  }
}
</style>
