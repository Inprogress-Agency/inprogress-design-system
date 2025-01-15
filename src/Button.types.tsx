export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps {
  /** Text à afficher sur le bouton */
  title: string
  /** La fonction à appeler lors du clic sur le bouton */
  onPress?: () => void
  /** Le style visuel du bouton
   * @default primary
   */
  variant: ButtonVariant
}

export interface StyledButtonProps {
  variant: ButtonVariant
  theme: any // Idéalement, définissez un type plus précis pour votre thème
}

export interface StyledTextProps {
  variant: ButtonVariant
  theme: any // Idéalement, définissez un type plus précis pour votre thème
}
