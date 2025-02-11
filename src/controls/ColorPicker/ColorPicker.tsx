import React from 'react'
import { StyledColor, StyledTextInput, StyledTitle, StyledTopItem, StyledViewColor } from './ColorPicker.styles'
import { ColorPickerProps } from './ColorPicker.types'

const ColorPicker = ({ title, editable = true,value, children, ...props  }: ColorPickerProps) => {
  const checkHexadecimalValue = '^#([A-Fa-f0-9]{6})$'
  return (
    <>
      <StyledTopItem>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </StyledTopItem>
      <StyledColor>
        <StyledViewColor
          {...props}
          editable={editable}
          selectedColor={
            value.match(checkHexadecimalValue) && value
          }
          value={value}
        />
        <StyledTextInput {...props} value={value}/>
      </StyledColor>
    </>
  )
}

export default ColorPicker
