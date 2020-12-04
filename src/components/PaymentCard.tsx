import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { Easing, interpolate, useValue } from 'react-native-reanimated';
import AnimatedBox from './AnimatedBox';

import Asset from './Asset';
import Box from './Box';
import StyledText from './StyledText';

interface IPaymentCardProps {
  cardNo?: string;
  name?: string;
  expDate?: string;
  cvc?: string;
  cvcFocused?: boolean;
}

const PaymentCard: React.FC<IPaymentCardProps> = ({ cardNo, name, expDate, cvc, cvcFocused }) => {
  const expDateSplitted = expDate?.split('/') || [];
  const expDateMonth = expDateSplitted[0] || '';
  const expDateYear = expDateSplitted[1] || '';
  const cardRotationValue = useValue(0);
  const { timing } = Animated;

  const cardRotation = interpolate(cardRotationValue, {
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const animConfig = {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  };

  useEffect(() => {
    if (cvcFocused) {
      timing(cardRotationValue, { ...animConfig, toValue: 1 }).start();
    } else {
      timing(cardRotationValue, { ...animConfig, toValue: 0 }).start();
    }
  }, [animConfig, cardRotationValue, cvcFocused, timing]);

  return (
    <AnimatedBox
      width="100%"
      height={206}
      justifyContent={cvcFocused ? 'center' : 'space-between'}
      padding="m"
      backgroundColor="yellow"
      borderRadius="s"
      position="relative"
      overflow="hidden"
      style={{
        transform: [{ rotateY: cardRotation }],
      }}
    >
      <Box position="absolute" top={-50} left={-50}>
        <Asset name="paymentCardBgShapeTopLeft" />
      </Box>
      <Box position="absolute" bottom={-25} left={0}>
        <Asset name="paymentCardBgShapeBottom" />
      </Box>
      <Box position="absolute" top={-50} right={-50}>
        <Asset name="paymentCardBgShapeTopRight" />
      </Box>
      <Box flexDirection="row" justifyContent="flex-end">
        <Asset name="visa" width={60} height={40} />
      </Box>
      <Box>
        <StyledText variant="h2" color="white" fontSize={20}>
          {cardNo}
        </StyledText>
      </Box>
      <Box flexDirection="row" justifyContent="space-between">
        <StyledText variant="h3Light" color="white">
          {name?.toUpperCase()}
        </StyledText>
        <StyledText variant="h3Light" color="white">
          {expDateMonth}
          {expDateMonth && '/'}
          {expDateYear}
        </StyledText>
      </Box>
      {cvcFocused && <Box style={StyleSheet.absoluteFill} backgroundColor="yellow" />}
      {cvcFocused && (
        <Box
          position="absolute"
          top={103}
          paddingHorizontal="m"
          flexDirection="row"
          justifyContent="flex-end"
          style={{ transform: [{ rotateY: '180deg' }] }}
        >
          <StyledText variant="h3Light" color="white">
            {cvc}
          </StyledText>
        </Box>
      )}
    </AnimatedBox>
  );
};

export default PaymentCard;
