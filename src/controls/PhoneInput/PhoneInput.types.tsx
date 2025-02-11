import { StyledComponentProps } from '../../types/StyledComponent'
import { CountryCode, CallingCode } from 'react-native-country-picker-modal'
export interface PhoneInputProps extends StyledComponentProps {
  label: string
  value: {
    number: string
    code: [CountryCode, CallingCode]
  }
  onChange: (val: { number: string; code: [CountryCode, CallingCode] }) => void
}
