export interface SeoRelatedLink {
  to: string
  labelKey: string
}

export interface SeoLandingDefinition {
  slug: string
  kind: 'service' | 'city'
  image: string
  imageAltKey: string
  i18nPrefix: string
  whatsappMessageKey: string
  related: SeoRelatedLink[]
  pointKeys: string[]
}

export interface SeoLandingViewProps {
  landing: SeoLandingDefinition
}
