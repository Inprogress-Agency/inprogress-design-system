import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { generateArgTypes } from '../../../utils/generateMeta/generateArgTypes'
import { generateParameters } from '../../../utils/generateMeta/generateParameters'
import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { ScrollToTopProvider } from '../../../src/contexts'
import { LineHome, LineSearch, LineUser } from '../../../src/icons'
import { TabNavigator } from '../../../src/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../../src/types/RootState'
import { Text } from '../../../src/texts'

const meta: Meta<typeof TabNavigator> = {
  title: 'Navigation/TabNavigator',
  component: TabNavigator,
  argTypes: generateArgTypes(TabNavigator),
  parameters: generateParameters(TabNavigator),
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

const Container = ({ title }: { title: string }) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  return (
    <View style={{ flex: 1, paddingHorizontal: 24, backgroundColor: theme.colors.white }}>
      <Text>{title}</Text>
    </View>
  )
}

export const Overview: StoryObj<typeof TabNavigator> = {
  args: {
    tabs: [
      {
        name: 'Home',
        title: 'Home',
        icon: LineHome,
        component: () => <Container title="Home Screen" />,
      },
      {
        name: 'Search',
        title: 'Search',
        icon: LineSearch,
        component: () => <Container title="Search Screen" />,
      },
      {
        name: 'Profile',
        title: 'Profile',
        icon: LineUser,
        component: () => <Container title="Profile Screen" />,
      },
    ],
    route: {
      name: 'Home',
      params: {},
      key: '1',
    },
  },
}
