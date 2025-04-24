const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname)

module.exports = withNativeWind(config, { input: './app/global.css' })
// metro.config.js
module.exports = {
    resolver: {
      sourceExts: ['js', 'jsx', 'ts', 'tsx', 'cjs'],
    },
  };