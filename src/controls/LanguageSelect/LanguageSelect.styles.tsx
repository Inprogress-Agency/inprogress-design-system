import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'
import { LineArrowBottom } from '../../icons'

export const StyledSelector = styled.TouchableOpacity`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.l};
    height: ${theme.size.std};
    border-radius: ${theme.borderRadius.l};
    padding: 4px 8px 4px 4px;
    background: ${theme.colors.white};
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}
`

export const StyledLineArrowBottom = styled(LineArrowBottom)`
  ${({ theme }: StyledComponentProps) => css`
    margin-left: ${theme.space.xxs};
  `}
`
