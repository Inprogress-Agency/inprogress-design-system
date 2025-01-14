import React, { ComponentType, ReactNode } from 'react'
import storybookTheme from './storybookTheme'
import { ThemeProvider } from 'styled-components/native'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from '../utils/Store'
import { StoreTheme } from '../utils/Store/Theme/theme.types'
import { StyleSheet, Switch, Text } from 'react-native'
import { View } from 'react-native'
import { setIsDarkMode } from '../utils/Store/Theme/Theme'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  text: {
    marginRight: 8,
    fontWeight: '600',
  },
})

const ThemeDecorator = ({ children }: { children: ReactNode }) => {
  const { theme, isDarkMode } = useSelector((state: StoreTheme) => state.theme)
  const dispatch = useDispatch()

  const handleChangeIsDarkMode = (value: boolean) => {
    dispatch(setIsDarkMode(value))
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Dark mode :</Text>
        <Switch value={isDarkMode} onValueChange={handleChangeIsDarkMode} />
      </View>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export const decorators = [
  (Story: ComponentType) => (
    <Provider store={store}>
      <ThemeDecorator>
        <Story />
      </ThemeDecorator>
    </Provider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: storybookTheme,
  },
}
