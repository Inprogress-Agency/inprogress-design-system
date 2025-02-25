import { TouchableOpacityProps } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { DefaultTheme } from 'styled-components'

export interface SettingOptionProps {
  text: string
  subText?: string
  icon?: React.ReactNode
  onPress?: (ref?: any) => void
  toggle?: React.ReactNode
  iconArrow?: boolean
  lastChild?: boolean
  disabled?: boolean
  label?: string
}

export interface SettingButtonOptionProps extends SettingOptionProps {
  parent?: React.ComponentType<{ uri?: string; children: (ref: any) => React.ReactNode }>
  uri?: string
}


export interface SettingButtonProps {
  title?: string
  options: SettingButtonOptionProps[]
  informationText?: string
  bgDisabled?: boolean
}



export interface DefaultWrapperProps {
  children: (ref: any) => React.ReactNode
}


export interface StyledSettingsProps extends StyledComponentProps {
  marginBottom?: boolean
}

export interface StyledOptionProps extends StyledComponentProps {
  lastChild?: boolean
  disabled?: boolean
  bgDisabled?: boolean
}
