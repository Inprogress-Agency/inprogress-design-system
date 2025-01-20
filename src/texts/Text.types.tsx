import {TextProps as RNTextProps} from 'react-native'

/**
 * Custom text component
 * @extends {RNTextProps}
 */
export interface TextProps extends RNTextProps {
  /** If the text is bold or not
   * @default false
   */
  regular: boolean
  /** Color of the text if not defined, use theme.colors.black
   * @default null
   */
  color: string | null
  /** Size of the text
   * @default 14
   */
  fontSize: number
  /** Content of the text
   * @required
   */
  children: string
}

export interface StyledTextProps {
  theme: any
  regular: boolean
  color: string | null
  fontSize: number | null
}



