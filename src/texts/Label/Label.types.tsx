import { ViewProps } from 'react-native'
import { Color } from '../../types/Color'

export interface LabelProps {
  /**
   * The color of the text
   */
  color?: Color | null
  /**
   * The text displayed in the label
   */
  children: string
  /**
   * The props of the container
   * @example
   * <Label containerProps={{ className: 'bg-red-500' }}>
   *   Hello
   * </Label>
   */
  containerProps?: ViewProps | {}
  /**
   * Wether the content which is labeled is optional
   */
  optional?: boolean
}
