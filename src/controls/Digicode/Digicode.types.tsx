import { StyledComponentProps } from '../../types/StyledComponent'

export interface StyledTextProps extends StyledComponentProps {
  keyHeight: number
}

export interface StyledCodeProps extends StyledComponentProps {
  height: number
}

export interface StyledCodeElementProps extends StyledComponentProps {
  height: number
  full: boolean
}

export interface KeyProps {
  value: string | React.ReactNode

  onPress: (value: string) => void
  disabled: boolean
  height: number
}

export interface DigicodeProps {
  /**
   * Wether a code exists or not
   */
  haveCode?: boolean
  /**
   * Function called when user press the reset button
   */
  onPressReset?: () => Promise<void>
  /**
   * Function called when the code is submitted
   */
  onSubmit: (value: string) => void
  /**
   * Whether the digicode is disabled or not
   */
  disabled?: boolean
  /**
   * Additional keys to display
   */
  additionalOptions?: any[]
}
