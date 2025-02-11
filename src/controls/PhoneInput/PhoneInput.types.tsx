import { StyledComponentProps } from '../../types/StyledComponent'

export interface PhoneInputProps extends StyledComponentProps {
  label: string
  value: {
    number: string
    code: [string, string]
  }
  onChange: (val: { number: string; code: [string, string] }) => void
}
