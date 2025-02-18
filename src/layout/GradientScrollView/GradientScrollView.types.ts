import { NativeScrollEvent, NativeSyntheticEvent, ScrollViewProps } from 'react-native'

export interface StyledWrapperProps {
  horizontal: boolean
}

export interface GradienScrollViewProps extends ScrollViewProps {
  /**
   * The content of the scroll view
   */
  children: React.ReactNode
  /**
   * Whether to show the vertical scroll indicator
   */
  showsVerticalScrollIndicator?: boolean
  /**
   * Whether to show the horizontal scroll indicator
   */
  showsHorizontalScrollIndicator?: boolean
  /**
   * Whether to show the gradient on the edges of the scroll view
   */
  fade?: boolean
  /**
   * Whether to scroll horizontally
   */
  horizontal?: boolean
  /**
   * The callback function that is called when the scroll view is scrolled
   */
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void
}
