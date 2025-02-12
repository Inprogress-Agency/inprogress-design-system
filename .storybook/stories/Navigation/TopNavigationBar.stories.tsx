import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { TopNavigationBar } from '../../../src/navigation'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

const meta: Meta<typeof TopNavigationBar> = {
  title: 'Navigation/TopNavigationBar',
  component: TopNavigationBar,
  argTypes: generateArgTypes(TopNavigationBar),
  parameters: generateParameters(TopNavigationBar),
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

export const Overview: StoryObj<typeof TopNavigationBar> = {
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
