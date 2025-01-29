import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { StyledComponentProps } from '../../types/StyledComponent'
import { StyledCountProps, StyledWrapperProps } from './TextArea.types'
import { Platform } from 'react-native'

export const StyledWrapper = styled.View`
  ${({ theme, bgWhite }: StyledWrapperProps) => css`
    padding: ${theme.space.std} ${theme.space.m};
    border: ${bgWhite ? `1px solid ${theme.colors.grey1}` : `1px solid ${theme.colors.white}`};
    background-color: ${bgWhite ? theme.colors.white : theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    min-height: ${theme.size.l2};
    justify-content: space-between;
  `}
`

export const StyledTextInput = styled.TextInput`
  ${({ theme }: StyledComponentProps) => css`
    ${Platform.OS === 'web' ? 'font-weight: 600' : 'font-family: Poppins-Medium'};
    width: ${theme.size.fill};
    padding: 0;
    margin-bottom: ${theme.space.xs};
    color: ${theme.colors.black};
  `}
`

export const StyledBottomSheetTextInput = styled(BottomSheetTextInput)`
  ${({ theme }: StyledComponentProps) => css`
    ${Platform.OS === 'web' ? 'font-weight: 600' : 'font-family: Poppins-Medium'};
    width: ${theme.size.fill};
    padding: 0;
    margin-bottom: ${theme.space.xs};
    color: ${theme.colors.black};
  `}
`
export const StyledFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledCount = styled(Text)`
  ${({ theme, copyable }: StyledCountProps) => css`
    text-align: ${copyable ? 'left' : 'right'};
    width: ${copyable ? 'auto' : theme.size.fill};
    color: ${theme.colors.grey2};
    font-size: ${theme.size.xxs};
  `}
`
