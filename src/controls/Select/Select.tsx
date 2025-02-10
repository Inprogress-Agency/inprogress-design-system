import deepEqual from 'deep-equal'
import { t } from 'i18next'
import React, { forwardRef, RefObject, useMemo } from 'react'
import { useState } from 'react'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import { StyledText, StyledTouchableOpacity } from './Select.styles'
import { DefaultButtonProps, DefaultSelectProps, SelectProps } from './Select.types'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import ModalSelect from '../../modals/ModalSelect/ModalSelect'
import { LineArrowBottom } from '../../icons'

const Select = ({
  initialValue,
  title = 'select_value',
  options,
  onChange,
  children,
  ...props
}: SelectProps) => {
  const [selected, setSelected] = useState<any>(
    options.find(option => deepEqual(option.value, initialValue)) || null
  )

  return (
    <ModalSelect
      title={t(title)}
      options={options}
      onChange={onChange}
      selected={selected}
      setSelected={setSelected}
      {...props}
    >
      {(ref: RefObject<BottomSheetModal>) => children?.({ ref, selected })}
    </ModalSelect>
  )
}

export const DefaultSelect = ({
  title = 'select_value',
  placeholder,
  variant = 'primary',
  ...props
}: DefaultSelectProps) => {
  return (
    <Select title={t(title)} {...props}>
      {({
        ref,
        selected,
      }: {
        ref: RefObject<BottomSheetModal>
        selected: { label: string; value: any }
      }) => (
        <DefaultButton
          ref={ref}
          selected={selected}
          placeholder={placeholder}
          variant={variant}
          disabled={false}
          value=""
          {...props}
        />
      )}
    </Select>
  )
}

const DefaultButton = forwardRef(
  (
    { disabled = false, selected, placeholder, value = '', variant, ...props }: DefaultButtonProps,
    ref
  ) => {
    const { theme } = useSelector((state: RootState) => state.theme)
    const selectedBorderColor = useMemo(
      () => (selected?.value ? theme.colors.primary : theme.colors.grey2),
      [selected, theme.colors.primary, theme.colors.grey2]
    )
    const selectedColor = useMemo(
      () => (variant === 'primary' ? theme.colors.black : theme.colors.primary),
      [variant, theme.colors.black, theme.colors.primary]
    )
    return (
      <StyledTouchableOpacity
        onPress={() => {
          console.log(ref)
          disabled ? null : (ref as React.RefObject<BottomSheetModal>).current?.present()
        }}
        variant={variant}
        selectedBorderColor={selectedBorderColor}
        {...props}
      >
        <StyledText
          variant={variant}
          value={value}
          disabled={disabled}
          selectedColor={selectedColor}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {selected?.value ? selected.label : placeholder}
        </StyledText>
        <LineArrowBottom color={theme.colors.grey2} />
      </StyledTouchableOpacity>
    )
  }
)

export default Select
