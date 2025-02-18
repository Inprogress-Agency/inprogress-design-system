import { JSX } from 'react'

export type LanguageFlags = {
  en: JSX.Element
  fr: JSX.Element
  es: JSX.Element
}

export interface LanguageSelectProps {
  onSubmit: (language?: string) => void
}
