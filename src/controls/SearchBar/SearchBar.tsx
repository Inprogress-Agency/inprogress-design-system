import React, { memo } from 'react'
import {
  StyledButton,
  StyledFakeTextInput,
  StyledSearch,
  StyledTextInput,
} from './SearchBar.styles'
import { LineClose, Search } from '../../icons'
import { ButtonCloseProps, SearchBarProps } from './SearchBar.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'

export const FakeSearchBar = memo(({ placeholder }: { placeholder: string }) => {
  return (
    <StyledSearch>
      <Search />
      <StyledFakeTextInput className="pl-2 grow">{placeholder}</StyledFakeTextInput>
    </StyledSearch>
  )
})

const ResetButton = memo(({ value, onChange }: ButtonCloseProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)

  if (!value) {
    return null
  }

  return (
    <StyledButton onPress={() => onChange('')}>
      <LineClose color={theme.colors.grey2} />
    </StyledButton>
  )
})

const SearchBar = ({
  placeholder,
  value,
  onChange,
  autoFocus = false,
  insideModal = false,
}: SearchBarProps) => {
  return (
    <StyledSearch>
      <Search />
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        autoFocus={autoFocus}
        insideModal={insideModal}
      />
      <ResetButton value={value} onChange={onChange} />
    </StyledSearch>
  )
}

export default SearchBar
