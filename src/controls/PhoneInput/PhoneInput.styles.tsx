import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Text } from '../../texts'
import RNPhoneInput from 'react-native-phone-number-input'

export const StyledText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-weight: medium;
    color: ${theme.colors.black};
    margin-bottom: ${theme.space.std}
  `}
`

export const StyledContainer = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    height: 50px;
    width: 100%;
    background-color: ${theme.colors.grey1};
    border-radius: 24px;
    padding: 0;
    margin: 0;
  `}
`;

export const StyledRNPhoneInput = styled(RNPhoneInput)`
  ${({ theme }: StyledComponentProps) => css`
    height: 50px;
    font-size: ${theme.fontSize.s};
    color: ${theme.colors.black};
  `}
`