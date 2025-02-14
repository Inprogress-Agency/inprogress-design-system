import { ParamListBase, RouteProp } from '@react-navigation/native'
import { TabProps } from '../../types/Tab'
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'

export interface TabNavigatorProps {
  /**
   * The tabs to display in the tab navigator
   */
  tabs: TabProps[]
  /**
   * The route of the tab navigator
   */
  route: RouteProp<ParamListBase, string>
}

export interface CustomNavigationOptions extends BottomTabNavigationOptions {
  tab?: TabProps
}
