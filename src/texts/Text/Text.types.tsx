import { ColorValue, TextProps as RNTextProps } from 'react-native'
import { Theme } from '../../../src/types/Theme'

/**
 * Custom text component
 * @extends {RNTextProps}
 */
export interface TextProps extends RNTextProps {
  /** If the text is bold or not
   * @default false
   */
  regular?: boolean
  /** Color of the text if not defined, use theme.colors.black
   * @default null
   */
  color?: ColorValue | null
  /** Size of the text
   * @default 14
   */
  fontSize?: number
  /** Content of the text
   * @required
   */
  children: string
}

export interface StyledTextProps {
  theme: Theme
  regular: boolean
  color: ColorValue | null
  fontSize: number | null
}
