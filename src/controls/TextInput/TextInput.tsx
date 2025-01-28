import React, { useMemo } from 'react'
import { Platform } from 'react-native'
import { StyledBottomSheetTextInput, StyledTextInput } from './TextInput.styles'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { useSelector } from 'react-redux'
import { TextInputProps } from './TextInput.types'

const TextInput = ({
  value,
  insideModal = false,
  disabled = false,
  error = null,
  ...props
}: TextInputProps) => {
  const Input = useMemo(() => {
    if (insideModal) {
      return StyledBottomSheetTextInput
    }
    return StyledTextInput
  }, [insideModal])
  const { theme } = useSelector((state: { theme: StoreTheme }) => state.theme)
  return (
    <Input
      defaultValue={value}
      returnKeyType="done"
      placeholderTextColor={theme.colors.grey2}
      editable={!disabled}
      selectionColor={Platform.OS === 'ios' ? theme.colors.primary : undefined}
      {...props}
    />
  )
}

export default TextInput
