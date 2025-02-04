import { Theme } from './Theme'

interface ThemeState {
  theme: Theme
  isDarkMode: boolean
  isDeviceDarkMode: boolean
}

interface LanguageState {
  lang: string
}

export interface RootState {
  theme: ThemeState
  language: LanguageState
}
