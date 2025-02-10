import { ReactNode } from 'react'
import { ButtonProps } from '../../buttons/Button/Button.types'

export interface HeaderProps {
  header: ReactNode | null
  onDismiss: () => void
}

interface CustomAction {
  custom: ReactNode
}

export interface ModalProps {
  /**
   * If true, the modal will have a close button
   */
  closable?: boolean
  /**
   * Custom header component
   */
  header?: ReactNode
  /**
   * Title of the modal
   */
  title?: string
  /**
   * Subtitle of the modal
   */
  subtitle?: string
  /**
   * Actions of the modal
   */
  actions?: Array<ButtonProps | CustomAction>
  /**
   * If true, the modal will be fullscreen
   */
  fullscreen?: boolean
  /**
   * If true, the modal will be loading
   */
  loading?: boolean
  /**
   * Content of the modal
   */
  children?: ReactNode | null
  /**
   * If true, the modal will be able to be closed by panning down
   */
  enablePanDownToClose?: boolean
  /**
   * If true, the modal will be able to be closed by clicking on the backdrop
   */
  enableBackdropClose?: boolean
  /**
   * If true, the modal will be scrollable
   */
  scrollEnabled?: boolean
  /**
   * Style of the children
   */
  childrenStyle?: any
  /**
   * If true, the modal will be able to be closed by clicking on the backdrop
   */
  keyboardShouldPersistTaps?: 'never' | 'always' | 'handled'
  /**
   * Used to render a custom footer which replaces actions
   */
  footer?: ReactNode | null
  /**
   * Used to render a custom footer in addition to actions
   */
  renderCustomFooter?: () => null
  /**
   * Function to be called when the modal is dismissed
   */
  onDismiss?: () => void
}
