interface ThemeState {
  theme: any
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
