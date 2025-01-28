import { Color } from '../../types/Color'
import { Theme } from '../../types/Theme'
import { SwitchProps as RNSwitchProps } from 'react-native'

export interface SwitchProps extends RNSwitchProps {
  /**
   * Color of the foreground switch grip when active ( used only by react-native web).
   */
  activeThumbColor?: Color
}

export interface StyledSwitchProps {
  checked: boolean
  theme: Theme
}
