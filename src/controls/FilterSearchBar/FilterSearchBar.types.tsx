import { TouchableOpacityProps } from 'react-native'

export interface FilterSearchBarProps extends TouchableOpacityProps {
  /**
   * Value of the filter search bar
   */
  value: string
  /**
   * Function to call when the value changes
   */
  onChange: (value: string) => void
}
