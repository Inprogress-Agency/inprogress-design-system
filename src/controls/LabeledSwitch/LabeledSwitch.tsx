import React from 'react'
import { StyledHeading, StyledOptions, StyledSubTitle, StyledTitle } from './LabeledSwitch.styles'
import Switch from '../Switch/Switch'
import { LabeledSwitchProps } from './LabeledSwitch.types'

const LabeledSwitch = ({
  title,
  subtitle,
  value,
  onChange,
  disabled = false,
  ...props
}: LabeledSwitchProps) => {
  return (
    <StyledOptions {...props}>
      <StyledHeading>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </StyledHeading>
      <Switch value={value} onValueChange={onChange} disabled={disabled} />
    </StyledOptions>
  )
}

export default LabeledSwitch
