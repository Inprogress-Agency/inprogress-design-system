import { ReactNode } from "react"
import { TouchableOpacityProps } from "react-native"
/**
 * Button with icon
 * @extends {TouchableOpacityProps}
 */
export interface IconButtonProps extends TouchableOpacityProps {
  /**The icon to display in the button */
  icon: ReactNode
  /**Color of the button */
  color: string
}

export interface StyledButtonProps {
  color: string
  theme: any // Idéalement, définissez un type plus précis pour votre thème
}