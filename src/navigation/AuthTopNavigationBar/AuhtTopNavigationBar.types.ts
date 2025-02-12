import { ViewProps } from 'react-native'

export interface ButtonActionProps {
  action?: { title: string; onPress: () => void }
}

export interface AuthTopNavigationBarProps extends ViewProps {
  /**
   * Function called when the back button is pressed
   */
  onGoBack?: () => void
  /**
   * Function called to replace the default action button
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

export type RootStackParamList = {
  Main: undefined
  Login: undefined
}
