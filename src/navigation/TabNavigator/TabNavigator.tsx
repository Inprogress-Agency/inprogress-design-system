import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CustomNavigationOptions, TabNavigatorProps } from './TabNavigator.types'
import { useTranslation } from 'react-i18next'
import { Host } from 'react-native-portalize'
import TabBar from '../TabBar/TabBar'

const Tab = createBottomTabNavigator()

const TabNavigator = ({ tabs, route }: TabNavigatorProps) => {
  const { t } = useTranslation()
  return (
    <Host>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <TabBar {...props} />}
      >
        {tabs.map(tab => {
          const title = tab.title ? t(tab.title) : null
          return (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={
                {
                  tab: { ...tab, title },
                } as CustomNavigationOptions
              }
              initialParams={route.params}
            />
          )
        })}
      </Tab.Navigator>
    </Host>
  )
}

export default TabNavigator
