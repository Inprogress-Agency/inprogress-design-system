import React from 'react'
import { LineTick } from '../../icons'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { useSelector } from 'react-redux'
import { StyledCheckBox } from './CheckBox.styles'
import { CheckBoxProps } from './CheckBox.types'

const CheckBox = ({
  onValueChange,
  value,
  color = null,
  borderColor = null,
  notCheckedBackgroundColor = null,
  ...props
}: CheckBoxProps) => {
  const { theme } = useSelector((state: { theme: StoreTheme }) => state.theme)
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
