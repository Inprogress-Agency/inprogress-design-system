import { Theme } from '../../types/Theme'
import { IconButtonProps } from '../IconButton/IconButton.types'

export interface IconButtonBadgeProps extends IconButtonProps {
  /**
   * Number to display in the badge
   */
  number: number
}
