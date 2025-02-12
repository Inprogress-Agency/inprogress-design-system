import { configureStore } from '@reduxjs/toolkit'
import theme from './Theme'
import language from './Language'
import user from './User'

export const store = configureStore({
  reducer: { theme, language, user },
})
