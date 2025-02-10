import { TouchableOpacityProps } from 'react-native'
import { Color } from '../../types/Color'
import { StyledComponentProps } from '../../types/StyledComponent'

/**
 * @see {@link TouchableOpacityProps} from react-native
 */
export interface CheckBoxProps extends TouchableOpacityProps {
  /** Function called when value changes */
  onValueChange: (value: boolean) => void
  /** Current state of the checkbox */
  value: boolean
  /** Color of the checkbox icon */
  color?: Color
  /** Color of the checkbox border */
  borderColor?: Color
  /** Background color when checkbox is not checked */
  notCheckedBackgroundColor?: Color
}

export interface StyledCheckBoxProps extends StyledComponentProps {
  checked: boolean
  borderColor: Color | null
  notCheckedBackgroundColor: Color | null
}
