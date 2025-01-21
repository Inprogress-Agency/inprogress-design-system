import React, { ComponentType } from 'react'
import storybookTheme from './storybookTheme'
import { Provider } from 'react-redux'
import { store } from '../utils/Store'
import { StyleSheet, View } from 'react-native'
import Toast from 'react-native-toast-message'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import PhoneMockup from '../utils/Components/PhoneMockup'
import ThemeProvider from '../utils/Components/ThemeProvider'
import Settings from '../utils/Components/Settings'
import { toastConfig } from '../utils/Config/toastConfig'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 24,
  },
})

export const decorators = [
  (Story: ComponentType) => (
    <View>
      <Provider store={store}>
        <ThemeProvider>
          <View style={styles.container}>
            <PhoneMockup>
              <GestureHandlerRootView>
                <Story />
                <Toast config={toastConfig} />
              </GestureHandlerRootView>
            </PhoneMockup>
            <Settings />
          </View>
        </ThemeProvider>
      </Provider>
    </View>
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
