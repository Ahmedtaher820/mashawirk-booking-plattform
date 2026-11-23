/**
 * Sitewide JSON-LD: Organization + WebSite + LocalBusiness for rich results.
 * Uses runtimeConfig so the live domain + WhatsApp stay accurate after deploy.
 */
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  const siteUrl = String(config.public.siteUrl || 'https://www.mashawirk.com').replace(/\/$/, '')
  const phone = String(config.public.contactPhoneDisplay || '+971 54 431 3696')
  const whatsapp = String(config.public.whatsappPhone || '971544313696')

  const organizationId = `${siteUrl}/#organization`
  const websiteId = `${siteUrl}/#website`
  const businessId = `${siteUrl}/#business`

  useHead({
    script: [
      {
        key: 'jsonld-sitewide',
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': organizationId,
              name: 'Mashawirk',
              alternateName: 'مشاويرك',
              url: siteUrl,
              logo: {
                '@type': 'ImageObject',
                url: `${siteUrl}/icons/icon-512.png`
              },
              image: `${siteUrl}/icons/icon-512.png`,
              telephone: phone,
              sameAs: [`https://wa.me/${whatsapp}`],
              areaServed: [
                { '@type': 'Country', name: 'United Arab Emirates' },
                { '@type': 'Country', name: 'Saudi Arabia' },
                { '@type': 'Country', name: 'Oman' },
                { '@type': 'Country', name: 'Qatar' }
              ]
            },
            {
              '@type': 'WebSite',
              '@id': websiteId,
              url: siteUrl,
              name: 'Mashawirk',
              alternateName: 'مشاويرك',
              inLanguage: ['ar-AE', 'en-AE'],
              publisher: { '@id': organizationId },
              about: { '@id': businessId }
            },
            {
              '@type': 'LocalBusiness',
              '@id': businessId,
              name: 'Mashawirk',
              alternateName: 'مشاويرك',
              url: siteUrl,
              image: `${siteUrl}/images/og-default.jpg`,
              logo: `${siteUrl}/icons/icon-512.png`,
              telephone: phone,
              parentOrganization: { '@id': organizationId },
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
            }
          ]
        })
      }
    ]
  })
})
