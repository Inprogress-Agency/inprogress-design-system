import { StyledComponentProps } from '../../types/StyledComponent'
import { IconComponent } from '../../types/Icon'

export interface SettingOptionProps {
  text: string
  subText: string
  icon: IconComponent
  onPress?: (ref?: any) => void
  toggle?: React.ReactNode
  iconArrow?: boolean
  lastChild?: boolean
  disabled?: boolean
  label?: string
}

interface ParentProps {
  uri?:string
  children: (ref: any) => React.ReactNode
}

export interface Option extends SettingOptionProps{
  parent?: React.FC<ParentProps>
  uri?: string
}


export interface SettingButtonProps  {
  title?: string
  options: Option[]
  informationText?: string
  bgDisabled?: boolean
}


export interface DefaultWrapperProps {
  children: (ref: any) => React.ReactNode
}

export interface StyledSettingsProps extends StyledComponentProps {
  marginBottom?: boolean
}

export interface StyledOptionProps extends StyledComponentProps  {
  bgDisabled?: boolean
  lastChild?: boolean
  disabled?: boolean
}
export interface StyledOptionsProps extends StyledComponentProps  {
  bgDisabled?: boolean
}
