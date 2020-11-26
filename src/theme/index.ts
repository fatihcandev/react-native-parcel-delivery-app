import { createTheme } from '@shopify/restyle';

const theme = createTheme({
  colors: {
    transparent: 'transparent',
    black: '#111111',
    white: '#FFFFFF',
    yellow: '#FFD64D',
    yellowDark: '#FDAD27',
    grey: '#C4C4C4',
    greyLight: '#D5D5D5',
    greyLighter: '#F8F8F8',
    tabBarIconInactive: 'rgba(17, 17, 17, 0.3)',
    shadow: 'rgba(230, 230, 230, 0.5)',
  },
  spacing: {
    s: 8,
    button: 13,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 85,
  },
  textVariants: {
    h1: {
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
      lineHeight: 30,
      color: 'black',
    },
    h2: {
      fontFamily: 'Poppins-SemiBold',
      fontSize: 24,
      lineHeight: 36,
      color: 'black',
    },
    h3: {
      fontFamily: 'Poppins-Bold',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
    bodyPrimary: {
      fontFamily: 'Poppins-Medium',
      fontSize: 12,
      lineHeight: 18,
      color: 'black',
    },
    bodyPrimaryBold: {
      fontFamily: 'Poppins-Bold',
      fontSize: 12,
      lineHeight: 18,
      color: 'black',
    },
    bodySecondary: {
      fontFamily: 'Poppins-Medium',
      fontSize: 10,
      lineHeight: 15,
      color: 'black',
    },
    link: {
      fontFamily: 'Poppins-Bold',
      fontSize: 9,
      lineHeight: 13.5,
      color: 'black',
    },
    button: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      lineHeight: 24,
      color: 'black',
    },
  },
  borderRadii: {
    xs: 2.5,
    s: 4,
    l: 16,
    cameraShutter: 37.5,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;

export default theme;
