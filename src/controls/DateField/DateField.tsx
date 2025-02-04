import RNDateTimePicker from '@react-native-community/datetimepicker'
import dateFormat from 'dateformat'
import React, { ReactNode, RefObject, useCallback, useEffect, useRef } from 'react'
import { useState } from 'react'
import { Platform, TextInput, TouchableOpacity } from 'react-native'
import { MaskedTextInput } from 'react-native-mask-text'
import { useSelector } from 'react-redux'
import { ButtonWrapperProps, DateFieldProps, DatePickerButtonProps } from './DateField.types'
import { RootState } from '../../types/RootState'
import { StyledIcon, StyledTouchableOpacity, StyledWrapper } from './DateField.styles'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { DateTimePickerEvent } from '@react-native-community/datetimepicker'
import ModalDatePicker from '../../modals/ModalDatePicker/ModalDatePicker'
import { Text } from '../../texts'
import Label from '../../texts/Label/Label'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'

const WebField = ({
  ref,
  ...props
}: { ref: RefObject<HTMLInputElement | null> } & DateFieldProps) => {
  const { t } = useTranslation()
  const { theme } = useSelector((state: RootState) => state.theme)

  return (
    <>
      <Label {...props}>{t(props.title)}</Label>
      <input
        style={{
          marginTop: 8,
          backgroundColor: theme.colors.grey1,
          borderRadius: theme.borderRadius.l,
          minHeight: theme.size.m,
          display: 'flex',
          flexDirection: 'row',
          overflow: 'hidden',
          alignItems: 'center',
          border: props.value.isError ? `1px solid ${theme.colors.red}` : '1px solid transparent',
          paddingLeft: theme.space.s,
          paddingRight: '30px',
          color: theme.colors.black,
          width: '100%',
        }}
        ref={ref}
        type="date"
        min={format(minDate, 'yyyy-MM-dd')}
        max={maxDate ? format(maxDate, 'yyyy-MM-dd') : undefined}
        onChange={e =>
          props.onChangeText?.({ value: new Date(e.target.value).getTime(), isError: false })
        }
      />
    </>
  )
}

const ButtonWrapper = ({
  children,
  renderPicker,
  ...props
}: ButtonWrapperProps & {
  children: (ref: RefObject<BottomSheetModal> | null) => ReactNode
  renderPicker: () => ReactNode
}) =>
  Platform.OS === 'ios' ? (
    <ModalDatePicker renderPicker={renderPicker} {...props}>
      {children}
    </ModalDatePicker>
  ) : (
    <>{children(null)}</>
  )

const DatePickerButton = ({
  title,
  value,
  onChangeDate,
  isPickerOpen,
  children: button,
}: DatePickerButtonProps) => {
  const { lang } = useSelector((state: RootState) => state.language)
  const { theme } = useSelector((state: RootState) => state.theme)

  const renderPicker = useCallback(() => {
    if (!isPickerOpen && Platform.OS !== 'ios') {
      return null
    }

    return (
      <RNDateTimePicker
        display="spinner"
        value={value?.value ? new Date(value.value) : new Date()}
        onChange={onChangeDate}
        themeVariant="light"
        textColor={theme.colors.black}
        mode="date"
        locale={lang}
      />
    )
  }, [isPickerOpen, value, onChangeDate, lang])

  return (
    <ButtonWrapper title={title} renderPicker={renderPicker}>
      {ref => (
        <>
          {button(ref)}
          {Platform.OS === 'ios' ? null : renderPicker()}
        </>
      )}
    </ButtonWrapper>
  )
}

const minDate = new Date(1900, 0, 1)
const maxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 50))
const DateField = ({
  value,
  onChangeText = () => {},
  adornment,
  title = 'onboarding.birth_date',
  ...props
}: DateFieldProps) => {
  const { t } = useTranslation()
  const { theme } = useSelector((state: RootState) => state.theme)
  const [isPickerOpen, setIsPickerOpen] = useState(false)
  const [invalidDate, setInvalidDate] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeDate = (_: DateTimePickerEvent, date?: Date) => {
    if (date) {
      setInvalidDate('')
      onChangeText({ isError: false, value: date.getTime() })
    }

    if (Platform.OS !== 'ios') {
      setIsPickerOpen(false)
    }
  }

  if (Platform.OS === 'web') {
    return <WebField ref={inputRef} title={title} value={value} onChangeText={onChangeText} />
  }

  return (
    <>
      <Label {...props}>{t(title)}</Label>
      <StyledWrapper adornment={adornment} error={value.isError}>
        {Boolean(adornment) && <StyledIcon>{adornment}</StyledIcon>}
        <MaskedTextInput
          placeholder="DD/MM/YYYY"
          mask="99/99/9999"
          value={invalidDate || (value.value ? dateFormat(value.value, 'ddmmyyyy') : '')}
          type="date"
          options={{
            dateFormat: 'DD/MM/YYYY',
          }}
          onChangeText={(_: any, rawText: string) => {
            if (rawText.length > 8) {
              return
            }
            if (rawText.length === 8) {
              setInvalidDate('')
              const year = parseInt(rawText.slice(4), 10)
              const monthIndex = parseInt(rawText.slice(2, 4), 10) - 1
              const day = parseInt(rawText.slice(0, 2), 10)
              const newDate = new Date(year, monthIndex, day)
              return onChangeText({ value: newDate.getTime(), isError: false })
            }
            setInvalidDate(rawText)
            onChangeText({ value: '', isError: true })
          }}
          keyboardType="numeric"
          placeholderTextColor={theme.colors.grey2}
        />
        <DatePickerButton
          value={value}
          title={title}
          onChangeDate={onChangeDate}
          isPickerOpen={isPickerOpen}
        >
          {(ref: React.RefObject<BottomSheetModal> | null) => (
            <StyledTouchableOpacity
              onPress={() => (ref ? ref.current?.present() : setIsPickerOpen(!isPickerOpen))}
            >
              <Text regular color={theme.colors.primary}>
                Calendar
              </Text>
            </StyledTouchableOpacity>
          )}
        </DatePickerButton>
      </StyledWrapper>
    </>
  )
}

export default DateField
