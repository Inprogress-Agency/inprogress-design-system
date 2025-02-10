import { TextProps as RNTextProps } from 'react-native'
import { Color } from '../../types/Color'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface TextProps extends RNTextProps {
  /** If the text is bold or not
   * @default false
   */
  regular?: boolean
  /** Color of the text if not defined, use theme.colors.black
   * @default null
   */
  color?: Color
  /** Size of the text
   * @default 14
   */
  fontSize?: number
  /** Content of the text
   * @required
   */
  children: string
}

export interface StyledTextProps extends StyledComponentProps {
  regular: boolean
  color: Color | null
  fontSize: number | null
}
