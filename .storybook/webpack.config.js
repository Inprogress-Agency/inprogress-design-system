const path = require('path')

module.exports = ({ config }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'react-native$': 'react-native-web',
      'react/jsx-runtime': require.resolve('react/jsx-runtime'),
    },
    extensions: ['.web.js', '.js', '.tsx', '.ts'],
  }

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
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

  return config
}
