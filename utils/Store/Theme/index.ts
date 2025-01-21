import theme, { darkColors, lightColors } from '../../Theme/Theme'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'theme',
  initialState: { theme, isDarkMode: false, isDeviceDarkMode: true },
  reducers: {
    setIsDarkMode(state, action) {
      const colors = action.payload ? darkColors : lightColors
      state.theme = { ...state.theme, colors }
      state.isDarkMode = action.payload
    },
    setIsDeviceDarkMode(state, action) {
      state.isDeviceDarkMode = action.payload
    },
  },
})

export const { setIsDarkMode, setIsDeviceDarkMode } = slice.actions

export default slice.reducer
