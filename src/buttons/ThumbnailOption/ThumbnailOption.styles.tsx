import styled, { css } from 'styled-components/native'
import { ThumbnailOptionProps } from './ThumbnailOption.types'
import { Text } from '../../texts'

export const StyledOption = styled.TouchableOpacity`
   ${({ theme }: ThumbnailOptionProps) => css`
    background: ${theme.colors.grey1};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std} ${theme.space.m};

    flex-direction: row;
    align-items: center;
    margin-top: ${theme.space.std};
  `}
`
export const StyledThumbnail = styled.View`
   ${({ theme }: ThumbnailOptionProps) => css`
    width: ${theme.size.s2};
    height: ${theme.size.s2};
    background: ${theme.colors.grey1};
  `}
`
export const StyledTitle = styled(Text)`
  ${({ theme }: ThumbnailOptionProps) => css`
    font-weight: 500;
    font-size: ${theme.fontSize.s};
    color: ${theme.colors.black};
  `}
`
export const StyledSubTitle = styled(Text)`
  ${({ theme }: ThumbnailOptionProps) => css`
    font-weight: 400;
    font-size: ${theme.fontSize.xs};
    color: ${theme.colors.grey2};
    margin-top: ${theme.space.xxs};
  `}
`