export interface HomeHighlightItem {
  id: string
  number: string
  titleKey: string
  subtitleKey: string
}

export interface HomeFeatureItem {
  id: string
  titleKey: string
  descriptionKey: string
  icon: string
}

export interface HomeStepItem {
  id: string
  step: string
  titleKey: string
  descriptionKey: string
}

export interface HomeHeroProps {
  showInstallButton?: boolean
}
