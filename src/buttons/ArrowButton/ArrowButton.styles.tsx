import { css } from 'styled-components'
import styled from 'styled-components/native'
import { StyledButtonProps, StyledTitleProps } from './ArrowButton.types'
import { Text } from '../../texts'

export const StyledButton = styled.TouchableOpacity<StyledButtonProps>`
  ${({ theme }: StyledButtonProps) => css`
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std} ${theme.space.l};
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`

export const StyledIconWrapper = styled.View<StyledButtonProps>`
  ${({ theme }: StyledButtonProps) => css`
    padding-right: ${theme.space.xs};
  `}
`

export const StyledContent = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledTitleProps) => css`
    font-size: ${theme.fontSize.std};
  `}
`
