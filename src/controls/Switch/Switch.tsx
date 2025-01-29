import React from 'react'
import { Switch as RNSwitch } from 'react-native'
import { useSelector } from 'react-redux'
import { StyledSwitch } from './Switch.styles'
import { SwitchProps } from './Switch.types'
import { RootState } from '../../types/RootState'

const Switch = (props: SwitchProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
    <StyledSwitch checked={props.value}>
      <RNSwitch
        trackColor={{ false: theme.colors.grey2, true: theme.colors.primary }}
        thumbColor="#FFFFFF"
        activeThumbColor="#FFFFFF"
        ios_backgroundColor={theme.colors.grey2}
        {...props}
      />
    </StyledSwitch>
  )
}

export default Switch
