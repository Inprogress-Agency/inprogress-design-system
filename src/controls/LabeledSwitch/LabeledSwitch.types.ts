export interface LabeledSwitchProps {
  /**
   * The title of the switch
   */
  title: string
  /**
   * The subtitle of the switch
   */
  subtitle: string
  /**
   * The value of the switch
   */
  value: boolean
  /**
   * The function to call when the switch is toggled
   */
  onChange: (value: boolean) => void
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean
}
