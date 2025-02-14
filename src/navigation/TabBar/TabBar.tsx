import React, { memo, useMemo } from 'react'
import { ViewProps } from 'react-native'
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated'
import { StyledBottomBar, StyledFakeBottomBar } from './TabBar.styles'
import { CustomTabBarProps } from './TabBar.types'
import { useScrollToTopContext } from '../../contexts'
import TabBarButton from '../TabBarButton/TabBarButton'

const AnimatedBottomBar = Animated.createAnimatedComponent(StyledBottomBar) as React.ComponentType<
  ViewProps & { children?: React.ReactNode }
>

const TabBar = memo(({ state, descriptors }: CustomTabBarProps) => {
  const { bottomOpacity } = useScrollToTopContext()

  const tabBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(bottomOpacity.value),
    }
  })

  const shouldHideOnScroll = useMemo(() => {
    const route = state.routes[state.index]
    const { options } = descriptors[route.key]
    return options.tab?.isHideOnScrollEnabled ?? false
  }, [descriptors, state.index, state.routes])

  return (
    <>
      <AnimatedBottomBar style={[tabBarAnimatedStyle]}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key]
          const { tab } = options
          const focused = state.index === index
          if (tab) {
            return <TabBarButton key={route.key} tab={tab} focused={focused} index={index + 1} />
          }
          return null
        })}
      </AnimatedBottomBar>
      {!shouldHideOnScroll && <StyledFakeBottomBar />}
    </>
  )
})

export default TabBar
