import { configureStore } from '@reduxjs/toolkit'
import theme from './Theme'
import language from './Language'
export const store = configureStore({
  reducer: { theme, language },
})
