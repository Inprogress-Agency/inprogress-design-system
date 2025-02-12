import { css } from 'styled-components'
import styled from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'

export const StyledRedBadge = styled.View`
  ${({ theme }: StyledComponentProps) => css`
  width: ${theme.size.xxs};
    aspect-ratio: 1;
    border-radius: ${theme.size.xxs};
    border: 1px solid ${theme.colors.white};
    background-color: ${theme.colors.red};
    position: absolute;
    top: -1;
    right: -1;
  `}
`
