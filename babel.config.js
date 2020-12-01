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
          '@data': './src/data',
          '@context': './src/context',
          '@utils': './src/utils',
          '@components': './src/components',
          '@views': './src/views',
          '@icons': './src/components/assets/icons',
          '@brands': './src/components/assets/brands',
          '@illustrations': './src/components/assets/illustrations',
        },
      },
    ],
  ],
};
