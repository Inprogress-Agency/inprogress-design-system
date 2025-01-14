import { StyledButton, StyledText } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = ({ title, onPress, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton onPress={onPress} variant={variant}>
      <StyledText variant={variant}>{title}</StyledText>
    </StyledButton>
  );
};

export default Button;
