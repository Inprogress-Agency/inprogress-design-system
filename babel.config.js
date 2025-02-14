module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-reanimated/plugin',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
}
