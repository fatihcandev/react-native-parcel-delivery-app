module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@components': './src/components',
          '@icons': './src/components/assets/icons',
          '@brands': './src/components/assets/brands',
          '@illustrations': './src/components/assets/illustrations',
          '@views': './src/views',
        },
      },
    ],
  ],
};
