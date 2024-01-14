module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ['.'],
        alias: {
          src: './src',
          assets: './src/assets',
          api: './src/api',
          screens: './src/screens',
          components: './src/components',
          navigation: './src/navigation',
          styles: './src/styles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
