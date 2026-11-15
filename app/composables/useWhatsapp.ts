import type { WhatsAppLinkOptions } from '~/interfaces/shared'

export const useWhatsapp = () => {
  const config = useRuntimeConfig()

  const normalizedPhone = computed(() => {
    return String(config.public.whatsappPhone || '971544313696').replace(/\D/g, '')
  })

  const buildWhatsappUrl = (options: WhatsAppLinkOptions = {}) => {
    const phone = (options.phone || normalizedPhone.value).replace(/\D/g, '')
    const message = options.message?.trim()
    const encoded = message ? `?text=${encodeURIComponent(message)}` : ''
    return `https://wa.me/${phone}${encoded}`
  }

  const openWhatsapp = (options: WhatsAppLinkOptions = {}) => {
    if (!import.meta.client) {
      return
    }

    window.open(buildWhatsappUrl(options), '_blank', 'noopener,noreferrer')
  }

  return {
    normalizedPhone,
    buildWhatsappUrl,
    openWhatsapp
  }
}
