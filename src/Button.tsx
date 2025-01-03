import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary";
}

const styles = StyleSheet.create({
  button: {
    primary: {
      backgroundColor: "#007AFF",
      padding: 12,
      borderRadius: 8,
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      padding: 12,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: "#007AFF",
    },
  },
  text: {
    primary: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 16,
    },
    secondary: {
      color: "#007AFF",
      textAlign: "center",
      fontSize: 16,
    },
  },
});

const Button = ({ title, onPress, variant = "primary" }: ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button[variant]} onPress={onPress}>
      <Text style={styles.text[variant]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
