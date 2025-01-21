import i18n from '../../Translations'
import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'language',
  initialState: {
    lang: 'en',
  },
  reducers: {
    setLanguage(state, { payload }) {
      i18n.changeLanguage(payload)
      state.lang = payload
    },
  },
})

export const { setLanguage } = slice.actions

export default slice.reducer
