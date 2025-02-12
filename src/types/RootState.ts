import { Theme } from './Theme'

interface ThemeState {
  theme: Theme
  isDarkMode: boolean
  isDeviceDarkMode: boolean
}

interface LanguageState {
  lang: string
}

interface UserState {
  currentUser: { uid: string } | null
}

export interface RootState {
  theme: ThemeState
  language: LanguageState
  user: UserState
}
