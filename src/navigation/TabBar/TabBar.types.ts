import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs'
import { ParamListBase, RouteProp, TabNavigationState } from '@react-navigation/native'
import { TabProps } from '../../types/Tab'

export interface CustomTabBarProps {
  /**
   * The state of the tab navigator
   */
  state: TabNavigationState<ParamListBase>
  /**
   * The descriptors of the tab navigator
   */
  descriptors: {
    [key: string]: {
      options: BottomTabNavigationOptions & {
        tab?: TabProps
      }
    }
  }
}
