import styled, { css } from 'styled-components/native'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyledComponentProps } from '../../types/StyledComponent'

import {
  SettingsStyleProps,
  OptionStyleProps
} from './SettingBloc.types'




export const StyledSettings = styled.View`
  ${({ theme, marginBottom }: SettingsStyleProps) => css`
    margin-bottom: ${marginBottom ? theme.space.xs : theme.space.l};
  `}
`


export const StyledTitle = styled(Text)`
  ${({ theme }:StyledComponentProps) => css`
    color: ${theme.colors.grey2};
    margin-left: ${theme.space.xs};
    margin-bottom: ${theme.space.s};
    height: ${theme.size.xs};
    font-weight: 500;
    font-size: ${theme.fontSize.s};
    line-height: ${theme.fontSize.std};
    letter-spacing: 1px;
  `}
`


export const StyledOptions = styled.View`
  ${({ theme, bgDisabled }:OptionStyleProps) => css`
    background: ${!bgDisabled ? theme.colors.secondary : theme.colors.white};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.none} ${theme.space.std};
  `}
`


export const StyledWrapperInformation = styled.View`
  ${({ theme }:StyledComponentProps ) => css`
    margin-top: 10px;
    padding: 0px 16px;
  `}
`


export const StyledInformation = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.s};
    font-weight: 400;
    line-height: ${theme.space.m};
  `}
`


export const StyledIcon = styled(View)`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.space.xxl};
    height: ${theme.space.xxl};
    margin-right: ${theme.space.xs};
    align-items: center;
    justify-content: center;
  `}
`


export const StyledWrapperTextIcon = styled(View)`
  ${({ theme }: StyledComponentProps ) => css`
    height: ${theme.space.xxl};
    flex-direction: row;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  `}
`


export const StyledWrapperArrowIcon = styled(View)`
  ${({ theme }: StyledComponentProps) => css`
    height: ${theme.space.l};
    width: ${theme.space.l};
    align-items: center;
    justify-content: center;
  `}
`


export const StyledOptionText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-weight: 400;
    font-size: ${theme.fontSize.s};
    color: ${theme.colors.black};
  `}
`


export const StyledOptionSubText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-weight: 400;
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.grey2};
  `}
`


export const StyledOption = styled(TouchableOpacity)`
  ${({ theme, lastChild, disabled }: OptionStyleProps) => css`
    border-bottom-color: rgba(142, 142, 149, 0.1);
    border-bottom-width: ${lastChild ? '0px' : '1px'};
    height: ${theme.space.xxl3};
    justify-content: center;
    flex-direction: row;
    align-items: center;
    opacity: ${disabled ? 0.5 : 1};
  `}
`


export const StyledLabel = styled(Text)`
  color: #8e8e95;
`
