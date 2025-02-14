import styled, { css } from 'styled-components/native'
import { StyledTabTitleProps } from './TabBarButton.types'
import { StyledComponentProps } from '../../types/StyledComponent'
import { RedBadge } from '../../others'
import { Text } from '../../texts'

export const StyledTabTitle = styled(Text)`
  ${({ theme, focused }: StyledTabTitleProps) => css`
    color: ${focused ? theme.colors.primary : theme.colors.black};
    font-size: 14px;
  `}
`

export const StyledWrapperIcon = styled.View`
  padding: ${({ theme }: StyledComponentProps) => theme.space.xxs};
`

export const StyledTouchableOpacity = styled.TouchableOpacity`
  height: 72px;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const StyledRedBadge = styled(RedBadge)`
  height: 52px;
  width: 52px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
