export type PwaInstallState =
  | 'idle'
  | 'available'
  | 'ios-manual'
  | 'installed'
  | 'unsupported'

export type PwaDevicePlatform =
  | 'android'
  | 'ios'
  | 'mac'
  | 'windows'
  | 'other'

export interface PwaInstallButtonProps {
  labelKey?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'secondary' | 'ghost'
  block?: boolean
}

export interface PwaInstallSectionProps {
  titleKey?: string
  descriptionKey?: string
}

export interface PwaInstallGuideStep {
  textKey: string
}

export interface PwaInstallGuideContent {
  platform: PwaDevicePlatform
  titleKey: string
  hintKey: string
  image: string
  imageAltKey: string
  steps: PwaInstallGuideStep[]
}
