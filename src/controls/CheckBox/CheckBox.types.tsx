import { TouchableOpacityProps } from 'react-native'
import { Color } from '../../types/Color'
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
  color: Color | null
  /** Color of the checkbox border */
  borderColor: Color | null
  /** Background color when checkbox is not checked */
  notCheckedBackgroundColor: Color | null
}

export interface StyledCheckBoxProps {
  theme: Theme
  checked: boolean
  borderColor: Color | null
  notCheckedBackgroundColor: Color | null
}
