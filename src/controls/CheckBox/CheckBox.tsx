import React from 'react'
import { LineTick } from '../../icons'
import { useSelector } from 'react-redux'
import { StyledCheckBox } from './CheckBox.styles'
import { CheckBoxProps } from './CheckBox.types'
import { RootState } from '../../types/RootState'

const CheckBox = ({
  onValueChange,
  value,
  color = null,
  borderColor = null,
  notCheckedBackgroundColor = null,
  ...props
}: CheckBoxProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  return (
    <StyledCheckBox
      checked={value}
      onPress={() => {
        onValueChange(!value)
      }}
      borderColor={borderColor}
      notCheckedBackgroundColor={notCheckedBackgroundColor}
      {...props}
    >
      {value && <LineTick color={color || theme.colors.white} />}
    </StyledCheckBox>
  )
}

export default CheckBox
