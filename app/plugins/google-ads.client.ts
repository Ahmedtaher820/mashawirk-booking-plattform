/**
 * Google Tag Manager + gtag bootstrap for Ads conversions.
 * Loads on every client page via Nuxt plugin.
 */
export default defineNuxtPlugin(() => {
  if (!import.meta.client) {
    return
  }

  const w = window as Window & {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    gtag_report_conversion?: (url?: string) => boolean
  }

  w.dataLayer = w.dataLayer || []

  if (typeof w.gtag !== 'function') {
    // Must use classic `arguments` (Google Ads / gtag contract)
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer?.push(arguments)
    }
  }

  w.gtag('js', new Date())

  // Ads conversion helper used by WhatsApp / booking CTAs
  w.gtag_report_conversion = (url?: string) => {
    let finished = false

    const navigate = () => {
      if (!url) {
        return
      }

      // WhatsApp CTAs open in a new tab; keep current page for Ads/GTM.
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    const callback = () => {
      if (finished) {
        return
      }
      finished = true
      navigate()
    }

    // Fallback if gtag is blocked / callback never fires
    window.setTimeout(callback, 1500)

    w.gtag?.('event', 'conversion', {
      send_to: 'AW-18579261161/8C-tCPbM37kdEOmNpJtF',
      value: 1.0,
      currency: 'AED',
      transaction_id: '',
      event_callback: callback
    })

    return false
  }

  useHead({
    script: [
      {
        key: 'gtm-loader',
        async: true,
        src: 'https://www.googletagmanager.com/gtm.js?id=GTM-TZTJ4FZX'
      },
      {
        key: 'gtag-aw-loader',
        async: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=AW-18579261161'
      }
    ],
    noscript: [
      {
        key: 'gtm-noscript',
        innerHTML:
          '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TZTJ4FZX" height="0" width="0" style="display:none;visibility:hidden"></iframe>',
        tagPosition: 'bodyOpen'
      }
    ]
  })
})