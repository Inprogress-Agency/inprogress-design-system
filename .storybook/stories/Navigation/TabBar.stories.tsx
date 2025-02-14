import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { TabBar } from '../../../src/navigation'
import { ScrollToTopProvider } from '../../../src/contexts/ScrollToTopContext/ScrollToTopContext'
import { LineHome, LineSearch, LineUser } from '../../../src/icons'

const meta: Meta<typeof TabBar> = {
  title: 'Navigation/TabBar',
  component: TabBar,
  argTypes: generateArgTypes(TabBar),
  parameters: generateParameters(TabBar),
  decorators: [
    Story => (
      <ScrollToTopProvider>
        <NavigationContainer>
          <View style={{ flex: 1, marginHorizontal: -24 }}>
            <Story />
          </View>
        </NavigationContainer>
      </ScrollToTopProvider>
    ),
  ],
}

export default meta

export const Overview: StoryObj<typeof TabBar> = {
  args: {
    state: {
      key: 'tab-navigator',
      index: 1,
      routeNames: ['Home', 'Search', 'Profile'],
      type: 'tab',
      stale: false,
      history: [{ type: 'route', key: '1' }],
      routes: [
        { key: '1', name: 'Home' },
        { key: '2', name: 'Search' },
        { key: '3', name: 'Profile' },
      ],
    },
    descriptors: {
      '1': {
        options: {
          tab: {
            name: 'Home',
            title: 'Home',
            icon: LineHome,
            component: () => null,
          },
        },
      },
      '2': {
        options: {
          tab: {
            name: 'Search',
            title: 'Search',
            icon: LineSearch,
            component: () => null,
          },
        },
      },
      '3': {
        options: {
          tab: {
            name: 'Profile',
            title: 'Profile',
            icon: LineUser,
            component: () => null,
          },
        },
      },
    },
  },
}
