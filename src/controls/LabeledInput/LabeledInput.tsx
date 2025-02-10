import React from 'react'
import { StyledInputWrapper } from './LabeledInput.styles'
import { Label } from '../../texts'
import { LabeledInputProps } from './LabeledInput.types'
import InputAdornment from '../InputAdornment/InputAdornment'

const LabeledInput = ({ title, children, labelProps, inputProps }: LabeledInputProps) => {
  return (
    <>
      <Label {...labelProps}>{title}</Label>
      <StyledInputWrapper>
        <InputAdornment {...inputProps}>{children}</InputAdornment>
      </StyledInputWrapper>
    </>
  )
}

export default LabeledInput
