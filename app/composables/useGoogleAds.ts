export const useGoogleAds = () => {
  const reportConversion = (url?: string) => {
    if (!import.meta.client) {
      return false
    }

    const w = window as Window & {
      gtag_report_conversion?: (targetUrl?: string) => boolean
    }

    if (typeof w.gtag_report_conversion === 'function') {
      return w.gtag_report_conversion(url)
    }

    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }

    return false
  }

  return {
    reportConversion
  }
}
