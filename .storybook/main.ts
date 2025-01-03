import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  stories: ["./stories/**/*.stories.?(ts|tsx|js|jsx)"],
  addons: ["@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native$": "react-native-web",
      };
    }
    if (config.output) {
      config.output.publicPath = "./";
    }
    return config;
  },
  staticDirs: ["../public"],
};

export default config;
