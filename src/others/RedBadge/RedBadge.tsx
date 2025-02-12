import React from 'react'
import { View } from 'react-native'
import { StyledRedBadge } from './RedBadge.style'
import { RedBadgeProps } from './RedBadge.type'


const RedBadge = ({ config, children, ...props }: RedBadgeProps) => {
  const { useDisplayBadge = () => false } = config
  const visible = useDisplayBadge()

  if (!visible) {
    return children
  }

  return (
    <View {...props}>
      {children}
      <StyledRedBadge pointerEvents="none" />
    </View>
  )
}

export default RedBadge
