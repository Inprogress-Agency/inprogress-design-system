import React, { memo } from 'react'
import { Switch as RNSwitch } from 'react-native'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { useSelector } from 'react-redux'
import { StyledSwitch } from './Switch.styles'
import { SwitchProps } from './Switch.types'

const Switch = (props: SwitchProps) => {
  const { theme } = useSelector((state: { theme: StoreTheme }) => state.theme)

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
