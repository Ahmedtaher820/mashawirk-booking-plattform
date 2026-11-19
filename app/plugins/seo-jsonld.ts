/**
 * LocalBusiness / Organization JSON-LD for Google rich results.
 * Uses runtimeConfig so the live domain + WhatsApp stay accurate after deploy.
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const siteUrl = String(config.public.siteUrl || 'https://www.mashawirk.com').replace(/\/$/, '')
  const phone = String(config.public.contactPhoneDisplay || '+971 54 431 3696')
  const whatsapp = String(config.public.whatsappPhone || '971544313696')

  useHead({
    script: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}/#business`,
          name: 'Mashawirk',
          alternateName: 'مشاويرك',
          url: siteUrl,
          image: `${siteUrl}/icons/icon-512.png`,
          logo: `${siteUrl}/icons/icon-512.png`,
          telephone: phone,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Al Qusais',
            addressRegion: 'Dubai',
            addressCountry: 'AE'
          },
          areaServed: [
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'Saudi Arabia' },
            { '@type': 'Country', name: 'Oman' },
            { '@type': 'Country', name: 'Qatar' }
          ],
          sameAs: [`https://wa.me/${whatsapp}`],
          description:
            'Parcel, order and supplies delivery in the UAE, with international delivery to Saudi Arabia, Oman and Qatar, plus private trips and car-lift options.'
        })
      }
    ]
  })
})
