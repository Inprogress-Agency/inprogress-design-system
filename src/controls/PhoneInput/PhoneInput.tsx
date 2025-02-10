import { LineArrowBottom } from '@/Assets/Icons/components'
import { useTheme } from '@/Hooks'
import React, { useRef } from 'react'
import { StyledContainer, StyledRNPhoneInput, StyledText } from './PhoneInput.styles'
import { PhoneInputProps } from './PhoneInput.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'

const PhoneInput = ({
  label = 'Valeur',
  value = { number: '', code: ['FR', '+33'] },
  onChange,
  ...props
}:PhoneInputProps ) => {
  const phoneInput = useRef(null)
  const { theme } = useSelector((state: RootState) => state.theme)

  
  return (
    <>
      <StyledText>{label}</StyledText>
      <StyledContainer>
      <StyledRNPhoneInput
          {...props}
          ref={phoneInput}
          defaultCode={value?.code ? value.code[0] : 'FR'}
          defaultValue={value?.number || ''}
          layout="first"
          onChangeText={(number) => {
            onChange({ ...value, number });
          }}
          onChangeCountry={(country) =>
            onChange({
              ...value,
              code: [country.cca2, `+${country.callingCode}`],
            })
          }
          placeholder="0612345678"
          withDarkTheme
          withShadow={false}
          textInputProps={{ textAlign: 'right' }}
          renderDropdownImage={<LineArrowBottom color={theme.colors.black} />}
        />
      </StyledContainer>
    </>
  )
}

export default PhoneInput
