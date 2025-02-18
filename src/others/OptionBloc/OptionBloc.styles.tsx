import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { StyledOptionProps } from './OptionBloc.types'
import { Text } from '../../texts'

export const StyledOption = styled.TouchableOpacity`
  ${({ theme, disabled }: StyledOptionProps) => css`
    width: 100%;
    height: 56px;
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std} ${theme.space.m};
    background-color: ${theme.colors.grey1};
    opacity: ${disabled ? 0.5 : 1};
  `}
`

export const StyledOptionWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const StyledTitleAndIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.std};
    font-weight: 400;
  `}
`

export const StyledSubTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.xs};
    font-weight: 400;
    color: ${theme.colors.grey2};
  `}
`

export const StyledTitleWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    margin-left: ${theme.space.xs};
    font-size: ${theme.fontSize.std};
    font-weight: 400;
    justify-content: space-around;
  `}
`

export const StyledCheckboxWrapper = styled.View`
  display: flex;
  justify-content: center;
`
