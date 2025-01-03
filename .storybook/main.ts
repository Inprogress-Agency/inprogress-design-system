import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["./stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-essentials",
    // "@storybook/addon-ondevice-controls",
    // "@storybook/addon-ondevice-actions",
    // "@storybook/addon-webpack5-compiler-babel",
    // "@chromatic-com/storybook",
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native$": "react-native-web",
      };
    }
    return config;
  },
};

export default config;
