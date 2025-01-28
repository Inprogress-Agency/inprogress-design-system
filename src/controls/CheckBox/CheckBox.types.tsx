import { ColorValue, TouchableOpacityProps } from 'react-native'
import { Theme } from '../../types/Theme'

/**
 * Checkbox component
 */
export interface CheckBoxProps extends TouchableOpacityProps {
  /** Function called when value changes */
  onValueChange: Function
  /** Current state of the checkbox */
  value: boolean
  /** Color of the checkbox icon */
  color: ColorValue | null
  /** Color of the checkbox border */
  borderColor: ColorValue | null
  /** Background color when checkbox is not checked */
  notCheckedBackgroundColor: ColorValue | null
}

export interface StyledCheckBoxProps {
  theme: Theme
  checked: boolean
  borderColor: ColorValue | null
  notCheckedBackgroundColor: ColorValue | null
}
