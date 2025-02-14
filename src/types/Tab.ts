import { FC, RefObject } from 'react'
import { IconComponent } from './Icon'
import { TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'

export interface TabProps {
  name: string
  title: string
  icon: IconComponent
  component: React.FC<any>
  params?: Record<string, any>
  formatButtonProps?: (props: {
    ref: RefObject<TouchableOpacity>
    index: number
    focused: boolean
  }) => TouchableOpacityProps
  overrideAnimatedStyle?: () => ViewStyle
  useDisplayBadge?: () => boolean
  isHideOnScrollEnabled?: boolean
}
