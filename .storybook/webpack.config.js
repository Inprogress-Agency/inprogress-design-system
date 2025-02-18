const path = require('path')
const webpack = require('webpack')

module.exports = ({ config }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      'react-native-color-matrix-image-filters': 'react-native-web',
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    },
    extensions: ['.web.js', '.web.tsx', '.web.ts', '.web.jsx', '.js', '.jsx', '.tsx', '.ts'],
    fallback: {
      ...config.resolve.fallback,
      'react-native': 'react-native-web',
    },
  }

  config.module.rules.push({
    test: /\.(ts|tsx|js|jsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['@babel/preset-env', { targets: 'defaults' }],
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
        },
      },
    ],
  })

  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV !== 'production' || true,
    })
  )

  return config
}
