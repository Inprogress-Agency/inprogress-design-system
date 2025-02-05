import { t } from 'i18next'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import { StyledButton, StyledSettingsInput } from './FilterSearchBar.styles'
import { FilterSearchBarProps } from './FilterSearchBar.types'
import { LineFilter } from '../../icons'
import SearchBar from '../SearchBar/SearchBar'
import { TouchableOpacityProps } from 'react-native'

const Button = ({ ...props }: TouchableOpacityProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  return (
    <StyledButton {...props}>
      <LineFilter color={theme.colors.grey2} />
    </StyledButton>
  )
}

const FilterSearchBar = ({ value, onChange, ...props }: FilterSearchBarProps) => {
  return (
    <StyledSettingsInput>
      <SearchBar
        placeholder={t('benefitspage.input.search')}
        value={value}
        onChange={(inputValue: string) => onChange(inputValue)}
        renderCustomButton={() => <Button {...props} />}
      />
    </StyledSettingsInput>
  )
}
export default FilterSearchBar
