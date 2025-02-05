import styled, { css } from 'styled-components/native'
import { Text } from '../../texts'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.std};
    font-weight: 600;
    color: ${theme.colors.black};
  `}
`
export const StyledValue = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.std};
    font-weight: 600;
    color: ${theme.colors.grey2};
  `}
`

export const StyledTitleWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.space.xs};
  `}
`

export const StyledIconWrapper = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`

export const StyledIconContentWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    display: flex;
    flex-direction: row;
    border: 1px solid ${theme.colors.grey2};
    border-radius: ${theme.borderRadius.l};
    border: 1px solid ${theme.colors.grey2};
    padding: ${theme.space.std} ${theme.space.ml};
    margin-right: ${theme.space.xs};
    align-items: center;
  `}
`

export const StyledIconValue = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    margin-left: ${theme.space.xxs};
  `}
`
