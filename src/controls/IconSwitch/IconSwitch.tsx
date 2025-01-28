import React from 'react'
import { StyledIcon, StyledSwitch } from './IconSwitch.styles'
import { IconSwitchProps } from './IconSwitch.types'

const IconSwitch = ({ value, left, right }: IconSwitchProps) => {
  return (
    <StyledSwitch>
      <StyledIcon
        activeOpacity={value === left.condition && 1}
        active={value === left.condition}
        onPress={left.action}
      >
        <left.icon />
      </StyledIcon>
      <StyledIcon
        activeOpacity={value === right.condition && 1}
        active={value === right.condition}
        onPress={right.action}
      >
        <right.icon />
      </StyledIcon>
    </StyledSwitch>
  )
}

export default IconSwitch
