export interface SettingsFormProps {
  /**
   * Function called when the form is submitted
   */
  onSubmit?: (value?: string) => void
  /**
   * Label of the button
   */
  buttonLabel?: string
  /**
   * Children of the form
   */
  children: React.ReactNode
  /**
   * Used to render a custom button
   */
  renderCustomButton?: () => React.ReactNode
}
