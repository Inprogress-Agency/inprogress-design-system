import { JSX } from 'react'

export type LanguageFlags = {
  en: JSX.Element
  fr: JSX.Element
  es: JSX.Element
}

export interface LanguageSelectProps {
  /**
   * Function called when the form is submitted
   */
  onSubmit: (language?: string) => void
}
