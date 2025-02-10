import { StyledComponentProps } from "../../types/StyledComponent";

export interface StyledText extends StyledComponentProps{
  label: string
}

export interface PhoneInputProps {
  label: string,
  value: (number: '', code: '') => void,
  onChange: (value: string) => void
}

