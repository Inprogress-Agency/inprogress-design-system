import { TouchableOpacityProps } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface StyledKeyProps extends StyledComponentProps {
  height: number
}

export interface KeyProps extends TouchableOpacityProps {
  /**
   * The height of the parent container
   */
  height: number
}
