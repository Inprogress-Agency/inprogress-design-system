import React, { memo, useMemo } from 'react'
import {
  StyledBottomSheetTextInput,
  StyledCount,
  StyledFooter,
  StyledTextInput,
  StyledWrapper,
} from './TextArea.styles'
import { useSelector } from 'react-redux'
import { StoreTheme } from '../../../utils/Store/Theme/Theme.types'
import { CopyButton } from '../../buttons'
import { TextAreaProps } from './TextArea.types'

const TextArea = ({
  value,
  inputRef = null,
  insideModal = false,
  copyable = false,
  bgWhite = false,
  maxLength = 0,
  ...props
}: TextAreaProps) => {
  const Input = useMemo(() => {
    if (insideModal) {
      return StyledBottomSheetTextInput
    }
    return StyledTextInput
  }, [insideModal])
  const { theme } = useSelector((state: StoreTheme) => state.theme)

  return (
    <StyledWrapper bgWhite={bgWhite}>
      <Input
        ref={inputRef}
        placeholderTextColor={theme.colors.grey2}
        selectionColor={theme.colors.black}
        scrollEnabled={false}
        multiline
        defaultValue={value}
        {...props}
      />
      <StyledFooter>
        {maxLength && (
          <StyledCount copyable={copyable}>
            {value.length}/{maxLength}
          </StyledCount>
        )}
        <CopyButton copyable={copyable} value={value} />
      </StyledFooter>
    </StyledWrapper>
  )
}

export default TextArea
