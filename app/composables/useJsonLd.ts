/**
 * Inject one or more Schema.org JSON-LD graphs into the document head.
 * Pass plain objects (with or without @context); arrays become an @graph.
 */
export const useJsonLd = (
  schema: MaybeRefOrGetter<Record<string, unknown> | Record<string, unknown>[]>,
  key = 'jsonld'
) => {
  useHead(() => {
    const value = toValue(schema)
    if (!value) return {}

    const payload = Array.isArray(value)
      ? {
          '@context': 'https://schema.org',
          '@graph': value.map((item) => {
            const { '@context': _ctx, ...rest } = item
            return rest
          })
        }
      : {
          '@context': 'https://schema.org',
          ...(() => {
            const { '@context': _ctx, ...rest } = value
            return rest
          })()
        }

    return {
      script: [
        {
          key,
          type: 'application/ld+json',
          children: JSON.stringify(payload)
        }
      ]
    }
  })
}

export const useBreadcrumbJsonLd = (
  items: MaybeRefOrGetter<Array<{ name: string; path: string }>>,
  key = 'jsonld-breadcrumb'
) => {
  const config = useRuntimeConfig()
  const siteUrl = computed(() =>
    String(config.public.siteUrl || 'https://www.mashawirk.com').replace(/\/$/, '')
  )

  useJsonLd(
    computed(() => {
      const crumbs = toValue(items)
      return {
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `${siteUrl.value}${crumb.path === '/' ? '/' : crumb.path}`
        }))
      }
    }),
    key
  )
}
