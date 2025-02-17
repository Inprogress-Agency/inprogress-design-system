const { getDefaultConfig } = require('@react-native/metro-config')

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname)

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      assetExts: [...defaultConfig.resolver.assetExts],
      sourceExts: [
        ...defaultConfig.resolver.sourceExts,
        'jsx',
        'js',
        'ts',
        'tsx',
        'json',
        'web.js',
        'web.jsx',
        'web.ts',
        'web.tsx',
      ],
    },
  }
})()
