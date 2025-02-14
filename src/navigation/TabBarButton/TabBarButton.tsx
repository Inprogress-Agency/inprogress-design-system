import React, { memo, useEffect, useMemo, useRef } from 'react'
import { TabBarButtonProps } from './TabBarButton.types'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import {
  StyledRedBadge,
  StyledTabTitle,
  StyledTouchableOpacity,
  StyledWrapperIcon,
} from './TabBarButton.styles'
import { TouchableOpacity, GestureResponderEvent } from 'react-native'
import { ViewStyle } from 'react-native'
import { useScrollToTopContext } from '../../contexts'
import { NavigationProp, useNavigation } from '@react-navigation/native'

const TabBarButton = memo(({ tab, focused, index }: TabBarButtonProps) => {
  const { theme } = useSelector((state: RootState) => state.theme)
  const ref = useRef<TouchableOpacity>(null) as React.RefObject<TouchableOpacity>
  const height = useSharedValue(0)
  const opacity = useSharedValue(0)
  const { scrollToTop } = useScrollToTopContext()
  const { navigate } = useNavigation<NavigationProp<any>>()
  const animatedStyle = useAnimatedStyle((): ViewStyle => {
    if (tab.overrideAnimatedStyle) {
      return tab.overrideAnimatedStyle()
    }
    return {
      height: withTiming(height.value, { duration: 500 }),
      opacity: withTiming(opacity.value, { duration: 500 }),
    }
  })

  const formattedButtonProps = useMemo(() => {
    let tempButtonProps =
      tab.formatButtonProps?.({
        ref,
        index,
        focused,
      }) || {}
    const onPress = tempButtonProps.onPress || (() => null)
    tempButtonProps.onPress = (event: GestureResponderEvent) => {
      onPress(event)
      if (focused) {
        return scrollToTop(tab.name)
      }
      navigate(tab.name, { screen: tab.name, ...(tab.params || {}) })
    }
    return tempButtonProps
  }, [index, ref, tab.formatButtonProps, scrollToTop, focused, tab.name, navigate])

  useEffect(() => {
    height.value = focused ? 20 : 0
    opacity.value = focused ? 1 : 0
  }, [focused])

  return (
    <StyledTouchableOpacity ref={ref} {...formattedButtonProps}>
      <StyledRedBadge config={tab}>
        <StyledWrapperIcon>
          <tab.icon size={22} color={focused ? theme.colors.primary : theme.colors.black} />
        </StyledWrapperIcon>
        <Animated.View style={[animatedStyle]}>
          <StyledTabTitle focused={focused}>{tab.title}</StyledTabTitle>
        </Animated.View>
      </StyledRedBadge>
    </StyledTouchableOpacity>
  )
})

export default TabBarButton
