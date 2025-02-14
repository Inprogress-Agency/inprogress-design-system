import React, { createContext, useCallback, useContext, useMemo, useRef } from 'react'
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated'
import { ScrollToTopContextType } from './ScrollToTopContext.types'

const ScrollToTopContext = createContext<ScrollToTopContextType>(null)

export const ScrollToTopProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollY = useSharedValue(0)
  const bottomOpacity = useSharedValue(1)
  const scrollRef = useRef<Record<string, any>>({})
  const lastScrollY = useSharedValue(0)
  const startDownScrollY = useSharedValue<number | null>(null)

  const onScroll = useAnimatedScrollHandler({
    onScroll: event => {
      const newScrollY = event.contentOffset.y
      const isScrollingDown = newScrollY > lastScrollY.value
      if (newScrollY === lastScrollY.value) {
        scrollY.value = 0
        return
      }
      if (isScrollingDown) {
        if (startDownScrollY.value === null) {
          startDownScrollY.value = newScrollY
        } else if (newScrollY >= startDownScrollY.value + 100) {
          bottomOpacity.value = 0.75
        }
      } else {
        startDownScrollY.value = null
        bottomOpacity.value = 1
      }
      scrollY.value = newScrollY
      lastScrollY.value = newScrollY
    },
  })

  const setScrollViewRef = useCallback((ref: any, tabName: string) => {
    scrollRef.current[tabName] = ref
  }, [])

  const scrollToTop = useCallback(async (tabName: string) => {
    const scrollRefName = scrollRef.current[tabName]
    if (!scrollRefName) {
      return
    }
    if (scrollRefName.scrollToOffset) {
      return scrollRefName.scrollToOffset?.({ y: 0, animated: true })
    }
    scrollRefName.scrollTo?.({ y: 0, animated: true })
  }, [])

  const value = useMemo(() => {
    return {
      scrollRef,
      bottomOpacity,
      onScroll,
      scrollToTop,
      setScrollViewRef,
      scrollY,
    }
  }, [bottomOpacity, onScroll, scrollToTop, setScrollViewRef, scrollY])

  return <ScrollToTopContext.Provider value={value}>{children}</ScrollToTopContext.Provider>
}

export const useScrollToTopContext = () => {
  const context = useContext(ScrollToTopContext)
  if (!context) {
    throw new Error('useScrollToTopContext must be used within a ScrollToTopProvider')
  }
  return context
}
