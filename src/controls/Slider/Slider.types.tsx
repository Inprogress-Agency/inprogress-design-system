import { IconComponent } from '../../types/Icon'
import { SliderProps as RNSliderProps } from '@miblanchard/react-native-slider'

export interface SliderProps extends RNSliderProps {
  /**
   * Used to display an icon and the value on top of the slider
   */
  icon?: IconComponent
  /**
   * Used to display a title and theon top of the slider
   */
  title?: string
  /**
   * The value of the slider
   */
  value: number
  /**
   * Used to styling parts of the slider
   */
  styles?: any
}
