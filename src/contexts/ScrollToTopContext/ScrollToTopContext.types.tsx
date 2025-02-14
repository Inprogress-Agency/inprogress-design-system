export type ScrollToTopContextType = {
  scrollRef: React.MutableRefObject<Record<string, any>>
  bottomOpacity: any
  onScroll: any
  scrollToTop: (tabName: string) => void
  setScrollViewRef: (ref: any, tabName: string) => void
  scrollY: any
} | null
