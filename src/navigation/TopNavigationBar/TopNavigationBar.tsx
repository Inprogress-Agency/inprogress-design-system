import { useNavigation } from '@react-navigation/native'
import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../../types/RootState'
import {
  StyledBackButton,
  StyledTitle,
  StyledTitleWrapper,
  StyledTopNavigationBar,
} from './TopNavigationBar.styles'
import { ButtonActionProps, TopNavigationBarProps } from './TopBarNavigation.types'
import { LineArrowLeft } from '../../icons'
import { Text } from '../../texts'

export const ButtonAction = ({ action }: ButtonActionProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  if (!action) {
    return null
  }
  return (
    <TouchableOpacity onPress={action.onPress}>
      <Text color={theme.colors.primary}>{action.title}</Text>
    </TouchableOpacity>
  )
}

const TopNavigationBar = ({
  onGoBack,
  goBackOverride,
  renderCustomAction,
  options: { backButtonVisible = true, ...options } = {},
  ...props
}: TopNavigationBarProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const navigation = useNavigation()

  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack()
    }
    if (goBackOverride) {
      return goBackOverride()
    }
    navigation.goBack()
  }

  const renderButton = useCallback(() => {
    if (renderCustomAction) {
      return renderCustomAction({ button: ButtonAction })
    }

    if (!options.action) {
      return null
    }
    return <ButtonAction action={options.action} />
  }, [options.action, renderCustomAction])

  return (
    <StyledTopNavigationBar {...props}>
      {backButtonVisible && (
        <StyledBackButton
          icon={() => LineArrowLeft({ color: theme.colors.black })}
          onPress={handleGoBack}
        />
      )}
      {options.content && options.content}
      {options.title && (
        <StyledTitleWrapper>
          <StyledTitle color={theme.colors.black} numberOfLines={1} ellipsizeMode="tail">
            {options.title}
          </StyledTitle>
        </StyledTitleWrapper>
      )}
      {renderButton()}
    </StyledTopNavigationBar>
  )
}

export default TopNavigationBar
