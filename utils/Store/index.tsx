import { configureStore } from '@reduxjs/toolkit'
import theme from './Theme/Theme'

export const store = configureStore({
  reducer: { theme },
})
