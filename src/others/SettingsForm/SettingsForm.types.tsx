export interface SettingsFormProps {
  onSubmit?: () => void
  buttonLabel?: string
  children: React.ReactNode
  renderCustomButton?: () => React.ReactNode
}
