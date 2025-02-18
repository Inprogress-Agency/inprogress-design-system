import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'path'

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: ['./docs/introduction.mdx', './stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: ['@storybook/addon-essentials'],
  webpackFinal: async config => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        'react-native$': 'react-native-web',
        'react-native-svg': 'react-native-svg-web',
      }
      config.resolve.extensions = [
        '*',
        '.tsx',
        '.ts',
        '.web.js',
        '.js',
        '.jsx',
        '.json',
        '.web.tsx',
        '.web.ts',
      ]
    }

    if (config.module?.rules) {
      config.module.rules = config.module.rules.filter(
        rule => rule.test?.toString() !== '/\\.jsx?$/'
      )

      config.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              [
                '@babel/plugin-transform-react-jsx',
                {
                  runtime: 'automatic',
                },
              ],
            ],
          },
        },
      })
    }

    if (process.env.NODE_ENV === 'production') {
      config.output = {
        ...config.output,
        publicPath: './',
        assetModuleFilename: 'assets/[name][ext]',
      }
    }

    return config
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen',
  },
}

export default config
