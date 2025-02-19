import React, { useMemo } from 'react'
import { Platform } from 'react-native'
import { StyledBottomSheetTextInput, StyledTextInput } from './TextInput.styles'
import { useSelector } from 'react-redux'
import { TextInputProps } from './TextInput.types'
import { RootState } from '../../types/RootState'

const TextInput = ({
  value = '',
  insideModal = false,
  disabled = false,
  error = false,
  ...props
}: TextInputProps) => {
  const Input = useMemo(() => {
    if (insideModal) {
      return StyledBottomSheetTextInput
    }
    return StyledTextInput
  }, [insideModal])
  const { theme } = useSelector((state: RootState) => state.theme)
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
