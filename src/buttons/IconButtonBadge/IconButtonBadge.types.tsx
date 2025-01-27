import { Theme } from '../../types/Theme'
import { IconButtonProps } from '../IconButton/IconButton.types'

export interface IconButtonBadgeProps extends IconButtonProps {
  /**
   * Number to display in the badge
   */
  number?: number
}

export interface StyledBadgeProps {
  theme: Theme
}

export interface StyledTextProps {
  theme: Theme
}

export interface StyledWrapperProps {
  theme: Theme
}
