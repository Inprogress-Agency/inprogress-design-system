import { LineClose, LineTick, LineWarning } from '../../src/icons'
import { Text } from '../../src/texts'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import styled, { css } from 'styled-components'

export const getDefaultBorderRadius = size => {
  return `${parseInt(size, 10) * 0.47}px`
}

const Toast = styled(View)`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.l};
    padding: ${theme.space.std};
    flex-direction: row;
    align-items: center;
    border: 2px solid ${theme.colors.grey1};
  `}
`
const BubbleToast = styled(View)`
  ${({ theme, type }) => css`
    height: ${theme.size.std};
    width: ${theme.size.std};
    border-radius: ${getDefaultBorderRadius(theme.size.std)};
    align-items: center;
    justify-content: center;
    margin-right: ${theme.space.xs};

    ${type === 'success' && `background-color: ${theme.colors.success};`};
    ${type === 'error' && `background-color: ${theme.colors.red};`};
    ${type === 'warning' && `background-color: ${theme.colors.warning};`};
    ${type === 'info' && `background-color: ${theme.colors.info};`};
  `}
`
const ToastText = styled(Text)`
  ${({ theme }) => css`
    font-weight: 600;
    font-size: ${theme.fontSize.s};
    color: ${theme.colors.black};
  `}
`

const formatErrorMessage = (errorMessage = '') => {
  const regex = /\[.*\] (.*)/
  const match = errorMessage.match(regex)
  return match ? match[1] : errorMessage
}

const CustomToast = ({ children, width = '90%', ...toast }) => {
  const { theme } = useSelector(state => state.theme)
  if (!toast?.props) {
    return null
  }

  const { text1, text2, hide, type } = toast
  const { closable } = toast.props
  const { action } = toast.props
  const text = type === 'error' ? formatErrorMessage(text1) : text1

  return (
    <GestureHandlerRootView>
      <PanGestureHandler onGestureEvent={() => hide()}>
        <Toast type={type} width={width}>
          {children}
          <View className="flex-row flex-1 justify-between items-center shrink">
            <View className="shrink">
              <ToastText className="shrink" numberOfLines={3} ellipsizeMode="tail">
                {text}
              </ToastText>
              {text2 && <Text className="shrink text-xs font-poppinsRegular mt-0.5">{text2}</Text>}
              {action && (
                <TouchableOpacity className="shrink-0" onPress={action.onPress}>
                  <Text color={theme.colors.primary}>{action.label}</Text>
                </TouchableOpacity>
              )}
            </View>
            {closable && (
              <TouchableOpacity className="shrink-0 w-4" onPress={hide}>
                <LineClose color={theme.colors.black} />
              </TouchableOpacity>
            )}
          </View>
        </Toast>
      </PanGestureHandler>
    </GestureHandlerRootView>
  )
}

export const toastConfig = {
  success: props => (
    <CustomToast {...props}>
      <BubbleToast type={props.type}>
        <LineTick color="#FFF" />
      </BubbleToast>
    </CustomToast>
  ),
  error: props => (
    <CustomToast {...props}>
      <BubbleToast type={props.type}>
        <LineClose color="#FFF" />
      </BubbleToast>
    </CustomToast>
  ),
  info: props => (
    <CustomToast {...props}>
      <BubbleToast type={props.type}>
        <LineWarning color="#FFF" />
      </BubbleToast>
    </CustomToast>
  ),
  warning: props => (
    <CustomToast {...props}>
      <BubbleToast type={props.type}>
        <LineWarning color="#FFF" />
      </BubbleToast>
    </CustomToast>
  ),
}
