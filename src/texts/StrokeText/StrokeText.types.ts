import { Color } from '../../types/Color'
import { StyledComponentProps } from '../../types/StyledComponent'

export interface StrokeTextProps {
  /**
   * The size of the text
   * @default 14
   */
  fontSize?: number
  /**
   * The color of the text
   * @default theme.colors.white
   */
  color?: Color
  /**
   * The color of the stroke
   * @default theme.colors.primary
   */
  strokeColor?: Color
  /**
   * The width of the stroke
   * @default fontSize / 8
   */
  strokeWidth?: number
  /**
   * The font family of the text
   * @default 'Poppins-SemiBold'
   */
  fontFamily?: string
  /**
   * The text to be displayed
   */
  children: string
}

export interface StyledWebStrokeTextProps extends StyledComponentProps {
  color: Color
  strokeColor: Color
  fontSize: number
  strokeWidth: number
}
