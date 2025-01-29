import { IconComponent } from '../../types/Icon'
import { StyledComponentProps } from '../../types/StyledComponent'

interface Side {
  condition: string | number
  icon: IconComponent
  action: Function
}

export interface IconSwitchProps {
  value: string
  left: Side
  right: Side
}

export interface StyledIconProps extends StyledComponentProps {
  active: boolean
}
