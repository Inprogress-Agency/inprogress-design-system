import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { AuthTopNavigationBar } from '../../../src/navigation'

const meta: Meta<typeof AuthTopNavigationBar> = {
  title: 'Navigation/AuthTopNavigationBar',
  component: AuthTopNavigationBar,
  argTypes: generateArgTypes(AuthTopNavigationBar),
  parameters: generateParameters(AuthTopNavigationBar),
  decorators: [
    Story => (
      <NavigationContainer>
        <View style={{ flex: 1, margin: -24 }}>
          <Story />
        </View>
      </NavigationContainer>
    ),
  ],
}

export default meta

export const Overview: StoryObj<typeof AuthTopNavigationBar> = {
  args: {
    options: {
      title: 'Title',
      action: {
        title: 'Action',
        onPress: () => {},
      },
    },
  },
}
