import styled, { css } from 'styled-components/native'
import { StyledTextInputProps } from './TextInput.types'
import { TextInput } from 'react-native'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'

export const StyledTextInput = styled(TextInput)`
  ${({ theme, disabled, error }: StyledTextInputProps) => css`
    font-family: 'Poppins-Medium';
    color: ${theme.colors.black};
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    border: ${error ? `1px solid ${theme.colors.red}` : '1px solid transparent'};
    padding: ${theme.space.std} ${theme.space.m};
    min-height: ${theme.size.m};
    opacity: ${disabled ? 0.5 : 1};
  `}
`

export const StyledBottomSheetTextInput = styled(BottomSheetTextInput)`
  ${({ theme, disabled, error }: StyledTextInputProps) => css`
    font-family: 'Poppins-Medium';
    color: ${theme.colors.black};
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    border: ${error ? `1px solid ${theme.colors.red}` : '1px solid transparent'};
    padding: ${theme.space.std} ${theme.space.m};
    min-height: ${theme.size.m};
    opacity: ${disabled ? 0.5 : 1};
  `}
`
