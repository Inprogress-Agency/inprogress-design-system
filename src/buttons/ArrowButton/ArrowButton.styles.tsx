import { css } from 'styled-components'
import styled from 'styled-components/native'
import { Text } from '../../texts'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledButton = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    background-color: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std} ${theme.space.l};
    display: flex;
    flex-direction: row;
    align-items: center;
  `}
`

export const StyledIconWrapper = styled.View`
  ${({ theme }: StyledComponentProps) => css`
    padding-right: ${theme.space.xs};
  `}
`

export const StyledContent = styled.View`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const StyledTitle = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    font-size: ${theme.fontSize.std};
  `}
`
