import React, { useCallback, useContext, useEffect } from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, { Easing, useValue } from 'react-native-reanimated';

import { AppContext } from 'context';
import Box from './Box';
import Icon from './Icon';
import StyledText from './StyledText';
import MyParcelCard from './MyParcelCard';
import Asset from './Asset';
import ParcelStatusStep from './ParcelStatusStep';
import AnimatedBox from './AnimatedBox';
import Loading from './Loading';

interface IActionSheetProps {
  onClosePress: () => void;
}

const ActionSheet: React.FC<IActionSheetProps> = ({ onClosePress }) => {
  const { state } = useContext(AppContext);
  const { width, height } = Dimensions.get('window');
  const { timing } = Animated;
  const HEIGHT = height * 0.85;
  const bottom = useValue(-HEIGHT);
  const { parcelDetails } = state;

  const animConfig = {
    duration: 350,
    easing: Easing.inOut(Easing.ease),
  };

  const handleOpen = useCallback(() => {
    timing(bottom, { ...animConfig, toValue: 0 }).start();
  }, [animConfig, bottom, timing]);

  const handleClose = () => {
    timing(bottom, { ...animConfig, toValue: -HEIGHT }).start();
    setTimeout(() => {
      onClosePress();
    }, 500);
  };

  useEffect(() => {
    handleOpen();
  }, [handleOpen]);

  return (
    <AnimatedBox
      {...{ width, bottom }}
      height={HEIGHT}
      position="absolute"
      backgroundColor="white"
      paddingHorizontal="l"
      borderTopLeftRadius="l"
      borderTopRightRadius="l">
      {!parcelDetails ? (
        <Loading />
      ) : (
        <>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            paddingVertical="xl">
            <StyledText variant="h2">Details</StyledText>
            <TouchableOpacity onPress={handleClose}>
              <Icon name="close" color="black" />
            </TouchableOpacity>
          </Box>
          <ScrollView style={{ flex: 1 }}>
            <Box flex={1} paddingBottom="xl">
              <MyParcelCard {...{ parcelDetails }} isDetailsSheet />
              <Box marginBottom="m">
                <Asset name="mapRoute" height={265} />
              </Box>
              <Box>
                {parcelDetails.status.map(({ icon, label, date }, index) => (
                  <ParcelStatusStep
                    key={index}
                    {...{ icon, label, date }}
                    last={index === parcelDetails.status.length - 1}
                  />
                ))}
              </Box>
            </Box>
          </ScrollView>
        </>
      )}
    </AnimatedBox>
  );
};

export default ActionSheet;
