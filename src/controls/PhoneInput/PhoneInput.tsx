import { LineArrowBottom } from '../../icons'
import React, { useRef } from 'react'
import { StyledText } from './PhoneInput.styles'
import RNPhoneInput from 'react-native-phone-number-input'
import { PhoneInputProps } from './PhoneInput.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import { useTranslation } from 'react-i18next'
import { StyleSheet } from 'react-native'

const PhoneInput = ({
  label = 'phone_input.title',
  value = { number: '', code: ['FR', '+33'] },
  onChange,
  ...props
}: PhoneInputProps) => {
  const phoneInput = useRef<any>(null)
  const { theme } = useSelector((state: RootState) => state.theme)
  const { t } = useTranslation()
  const styles = StyleSheet.create({
    container: {
      height: 50,
      width: '100%',
      backgroundColor: theme.colors.grey1,
      borderTopLeftRadius: 24,
      borderBottomLeftRadius: 24,
      borderTopRightRadius: 24,
      borderBottomRightRadius: 24,
      padding: 0,
      margin: 0,
    },
    textContainer: {
      backgroundColor: 'transparent',
    },
    textInput: {
      color: theme.colors.black,
      height: 50,
      fontSize: 14,
    },
    codeText: {
      color: theme.colors.black,
      height: 18,
      fontSize: 14,
    },
  })

  return (
    <>
      <StyledText>{t(label)}</StyledText>
      <RNPhoneInput
        {...props}
        ref={phoneInput}
        defaultCode={value.code ? value.code[0] : 'FR'}
        defaultValue={value.number || ''}
        layout="first"
        onChangeText={(phoneNumber: string) => {
          onChange({ ...value, number: phoneNumber })
        }}
        onChangeCountry={(country: { cca2: string; callingCode: string[] }) => {
          onChange({
            ...value,
            code: [country.cca2, `+${country.callingCode[0]}`],
          })
        }}
        placeholder="0612345678"
        withDarkTheme
        withShadow={false}
        textInputProps={{ textAlign: 'right' }}
        renderDropdownImage={<LineArrowBottom color={theme.colors.black} />}
        containerStyle={styles.container}
        textContainerStyle={styles.textContainer}
        textInputStyle={styles.textInput}
        codeTextStyle={styles.codeText}
      />
    </>
  )
}

export default PhoneInput
