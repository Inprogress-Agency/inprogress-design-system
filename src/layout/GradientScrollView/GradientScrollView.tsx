import React, { ForwardedRef, forwardRef, useCallback, useState } from 'react'
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import { ScrollView as NativeScrollView } from 'react-native-gesture-handler'
import { RootState } from '../../types/RootState'
import { useSelector } from 'react-redux'
import {
  StyledBottomGradient,
  StyledLeftGradient,
  StyledRightGradient,
  StyledTopGradient,
  StyledWrapper,
} from './GradientScrollView.styles'
import { GradienScrollViewProps } from './GradientScrollView.types'

const ScrollView = forwardRef(
  (
    {
      children,
      showsVerticalScrollIndicator = false,
      showsHorizontalScrollIndicator = false,
      fade = true,
      horizontal = false,
      onScroll = () => null,
      ...props
    }: GradienScrollViewProps,
    ref: ForwardedRef<NativeScrollView>
  ) => {
    const { theme } = useSelector((state: RootState) => state.theme)
    const [showLeftGradient, setShowLeftGradient] = useState(false)
    const [showRightGradient, setShowRightGradient] = useState(horizontal)
    const [showTopGradient, setShowTopGradient] = useState(false)
    const [showBottomGradient, setShowBottomGradient] = useState(!horizontal)

    const handleScroll = useCallback(
      (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        onScroll(event)
        if (!fade) {
          return
        }
        if (!horizontal) {
          const scrollPosition = event.nativeEvent.contentOffset.y
          const contentHeight = event.nativeEvent.contentSize.height
          const scrollViewHeight = event.nativeEvent.layoutMeasurement.height

          setShowTopGradient(scrollPosition > 0)
          setShowBottomGradient(scrollPosition < contentHeight - scrollViewHeight)
          return
        }

        const scrollPosition = event.nativeEvent.contentOffset.x
        const contentWidth = event.nativeEvent.contentSize.width
        const scrollViewWidth = event.nativeEvent.layoutMeasurement.width
        setShowLeftGradient(scrollPosition > 0)
        setShowRightGradient(scrollPosition < contentWidth - scrollViewWidth)
      },
      [fade, horizontal, onScroll]
    )
    return (
      <StyledWrapper horizontal={horizontal}>
        <NativeScrollView
          ref={ref}
          {...props}
          horizontal={horizontal}
          nestedScrollEnabled
          showsHorizontalScrollIndicator={showsVerticalScrollIndicator}
          showsVerticalScrollIndicator={showsHorizontalScrollIndicator}
          onScroll={handleScroll}
          scrollEventThrottle={50}
        >
          {children}
        </NativeScrollView>
        {fade && (
          <>
            {showLeftGradient && (
              <StyledLeftGradient
                colors={[theme.colors.white, theme.colors.white + '00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            )}
            {showRightGradient && (
              <StyledRightGradient
                colors={[theme.colors.white + '00', theme.colors.white]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
              />
            )}
            {showTopGradient && (
              <StyledTopGradient
                colors={[theme.colors.white, theme.colors.white + '00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              />
            )}
            {showBottomGradient && (
              <StyledBottomGradient
                colors={[theme.colors.white + '00', theme.colors.white]}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              />
            )}
          </>
        )}
      </StyledWrapper>
    )
  }
)

export default ScrollView
