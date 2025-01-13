import React from "react";
import { View } from "react-native";
import theme from "./theme";

export const decorators = [
  (Story) => (
    <View style={{ padding: 16 }}>
      <Story />
    </View>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: theme,
  },
};
