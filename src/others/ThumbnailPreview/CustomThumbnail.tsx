import styled, { css } from 'styled-components/native'
import { StyledComponentProps } from '../../types/StyledComponent'


const CustomThumbnail = styled.Image`
  ${({ theme }: StyledComponentProps) => css`
    width: ${theme.size.s2};
    aspect-ratio: 1;
    border-radius: ${theme.borderRadius.xs};
  `}
`
export default CustomThumbnail
