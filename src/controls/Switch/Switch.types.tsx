import { Theme } from '../../types/Theme'
import { ColorValue, SwitchProps as RNSwitchProps } from 'react-native'

export interface SwitchProps extends RNSwitchProps {
  /**
   * Color of the foreground switch grip when active ( used only by react-native web).
   */
  activeThumbColor?: ColorValue
}

export interface StyledSwitchProps {
  checked: boolean
  theme: Theme
}
