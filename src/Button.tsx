import { TouchableOpacity, Text } from "react-native";
import styled, { css } from "styled-components/native";

type ButtonVariant = "primary" | "secondary";
interface ButtonProps {
  /** Text à afficher sur le bouton */
  title: string;
  /** La fonction à appeler lors du clic sur le bouton */
  onPress?: () => void;
  /** Le style visuel du bouton
   * @default primary
   */
  variant: ButtonVariant;
}

// Définir le type pour les props du composant styled
interface StyledButtonProps {
  variant: ButtonVariant;
  theme: any; // Idéalement, définissez un type plus précis pour votre thème
}

const ButtonTouchableOpacity = styled(TouchableOpacity)<{
  variant: ButtonVariant;
}>`
  ${({ theme, variant }: StyledButtonProps) => css`
    background-color: ${variant === "primary"
      ? theme.colors.primary
      : theme.colors.white};
    padding: 12px;
    border-radius: 8px;
    border-width: 1px;
    border-color: ${theme.colors.primary};
  `}
`;

const ButtonText = styled(Text)<{ variant: ButtonVariant }>`
  ${({ theme, variant }: StyledButtonProps) => css`
    color: ${variant === "primary" ? theme.colors.white : theme.colors.primary};
    text-align: center;
    font-size: 16px;
  `}
`;

const Button = ({ title, onPress, variant = "primary" }: ButtonProps) => {
  return (
    <ButtonTouchableOpacity onPress={onPress} variant={variant}>
      <ButtonText variant={variant}>{title}</ButtonText>
    </ButtonTouchableOpacity>
  );
};

export default Button;
