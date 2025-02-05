import React, { useCallback } from 'react'
import TextInput from '../TextInput/TextInput'
import { StyledIcon, StyledInputAdornment } from './InputAdornment.styles'
import { InputAdornmentProps } from './InputAdornment.types'

const InputAdornment = ({
  adornment,
  childrenClassName,
  children,
  error,
  ...props
}: InputAdornmentProps) => {
  const renderAdornment = useCallback(() => {
    if (!adornment) {
      return null
    }
    const Adornment = adornment
    return (
      <StyledIcon>
        <Adornment />
      </StyledIcon>
    )
  }, [adornment])

  return (
    <StyledInputAdornment error={error} adornment={adornment} className={childrenClassName}>
      {renderAdornment()}
      <TextInput {...props} error={error} />
      {children}
    </StyledInputAdornment>
  )
}

export default InputAdornment
