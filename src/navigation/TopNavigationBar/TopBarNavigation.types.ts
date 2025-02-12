import { ViewProps } from 'react-native'

export interface ButtonActionProps {
  action?: { title: string; onPress: () => void }
}

export interface TopNavigationBarProps extends ViewProps {
  /**
   * Function called when the back button is pressed
   */
  onGoBack?: () => void
  /**
   * Function called to override the default behavior of the back button
   */
  goBackOverride?: () => void
  /**
   * Function called to render a custom action button on the right side of the bar
   */
  renderCustomAction?: (props: {
    button: React.ComponentType<ButtonActionProps>
  }) => React.ReactNode
  /**
   * Options for the top navigation bar
   */
  options?: {
    backButtonVisible?: boolean
    content?: React.ReactNode
    title?: string
    action?: { title: string; onPress: () => void }
  }
}
