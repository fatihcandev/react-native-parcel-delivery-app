import React, { useContext, useEffect } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing, useValue } from 'react-native-reanimated';
import { FirebaseMessagingTypes } from '@react-native-firebase/messaging';

import { AppContext, TAP_NOTIFICATION } from 'context';
import Box from './Box';
import AnimatedBox from './AnimatedBox';
import StyledText from './StyledText';

//TODO Enchane the notification UI

interface INotificationProps {
  notificationDetails: FirebaseMessagingTypes.Notification;
}

const Notification: React.FC<INotificationProps> = ({ notificationDetails }) => {
  const { dispatch } = useContext(AppContext);
  const { timing } = Animated;
  const top = useValue(-80);
  const opacity = useValue(1);

  const animConfig = {
    duration: 500,
    easing: Easing.inOut(Easing.ease),
  };

  const positionConfig: Animated.TimingConfig = {
    ...animConfig,
    toValue: 10,
  };

  const fadeAwayConfig: Animated.TimingConfig = {
    ...animConfig,
    toValue: 0,
  };

  useEffect(() => {
    timing(top, positionConfig).start();
  }, [positionConfig, top, timing]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      timing(opacity, fadeAwayConfig).start();
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [fadeAwayConfig, opacity, timing]);

  const handleTap = () => {
    dispatch({
      type: TAP_NOTIFICATION,
    });
  };

  return (
    <AnimatedBox
      position="absolute"
      left={10}
      right={10}
      height={80}
      backgroundColor="white"
      borderRadius="s"
      {...{ top, opacity }}>
      <TouchableWithoutFeedback onPress={handleTap}>
        <Box padding="m">
          <StyledText variant="bodyPrimaryBold" marginBottom="s">
            {notificationDetails.title}
          </StyledText>
          <StyledText variant="bodyPrimary">{notificationDetails.body}</StyledText>
        </Box>
      </TouchableWithoutFeedback>
    </AnimatedBox>
  );
};

export default Notification;
