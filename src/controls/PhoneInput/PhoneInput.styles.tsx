import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { Text } from '../../texts'

export const StyledText = styled(Text)`
  ${({ theme }: StyledComponentProps) => css`
    margin-bottom: ${theme.space.std};
  `}
`
