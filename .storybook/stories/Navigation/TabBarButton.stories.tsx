import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import TabBarButton from '../../../src/navigation/TabBarButton/TabBarButton'
import { LineHome } from '../../../src/icons'
import { View } from 'react-native'
import React from 'react'
import { ScrollToTopProvider } from '../../../src/contexts'
import { NavigationContainer } from '@react-navigation/native'

const meta: Meta<typeof TabBarButton> = {
  title: 'Navigation/TabBarButton',
  component: TabBarButton,
  argTypes: generateArgTypes(TabBarButton),
  parameters: generateParameters(TabBarButton),
  decorators: [
    Story => (
      <ScrollToTopProvider>
        <NavigationContainer>
          <View style={{ width: '100%', height: 72 }}>
            <Story />
          </View>
        </NavigationContainer>
      </ScrollToTopProvider>
    ),
  ],
}

export default meta

export const Overview: StoryObj<typeof TabBarButton> = {
  args: {
    focused: true,
    index: 1,
    tab: {
      name: 'Home',
      title: 'Home',
      icon: LineHome,
      component: () => null,
    },
  },
}
