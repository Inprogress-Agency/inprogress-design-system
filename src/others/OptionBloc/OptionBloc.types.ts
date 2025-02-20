import { ViewProps } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { IconComponent } from '../../types/Icon'

export interface OptionBlocProps {
  icon: IconComponent
  title: string
  subTitle?: string
  checked: boolean
  onValueChange: (value: boolean) => void
  disabled?: boolean
}

export interface StyledOptionProps extends StyledComponentProps {
  disabled?: boolean
}
