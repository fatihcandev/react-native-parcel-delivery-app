import React, { useEffect, useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackScreenProps } from '@react-navigation/stack';
import Animated, { Easing, interpolate, useValue } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStack } from 'types';
import myParcelsData from 'data/myParcelsData';
import {
  Box,
  Icon,
  StyledText,
  StyledInput,
  Avatar,
  IconButton,
  StyledButton,
  MyParcelCard,
  Layout,
  ActionSheet,
  AnimatedBox,
} from 'components';

const MyParcels = ({ navigation }: StackScreenProps<RootStack, 'Root'>) => {
  const [trackingNumber, setTrackingNumber] = useState<string>('');
  const [topBarExpanded, setTopBarExpanded] = useState<boolean>(false);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const topBarHeightValue = useValue(120);
  const arrowRotateValue = useValue(0);

  useEffect(() => {
    async function getTrackingNumberFromQr() {
      const trackingNumberFromQr = await AsyncStorage.getItem('trackingNumberFromQr');
      if (trackingNumberFromQr !== null) {
        setTrackingNumber(trackingNumberFromQr);
      }
    }

    getTrackingNumberFromQr();
  }, []);

  const { timing } = Animated;

  const animConfig = {
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  };

  const topBarAnim: Animated.TimingConfig = {
    ...animConfig,
    toValue: topBarExpanded ? 120 : 350,
  };

  const arrowIconAnim: Animated.TimingConfig = {
    ...animConfig,
    toValue: topBarExpanded ? 0 : 1,
  };

  const arrowRotationDeg = interpolate(arrowRotateValue, {
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleExpandShrink = () => {
    timing(topBarHeightValue, topBarAnim).start();
    timing(arrowRotateValue, arrowIconAnim).start();
    setTopBarExpanded(s => !s);
  };

  const toggleDetails = () => setOpenDetails(s => !s);

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <AnimatedBox
        height={topBarHeightValue}
        padding="l"
        justifyContent="space-between"
        backgroundColor="yellow"
        borderBottomLeftRadius="l"
        borderBottomRightRadius="l"
        overflow="hidden">
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="xl"
          marginTop="xl">
          <Box flexDirection="row" alignItems="center">
            <StyledText variant="h1">Track parcel</StyledText>
            <TouchableWithoutFeedback onPress={handleExpandShrink}>
              <Box padding="s">
                <Animated.View
                  style={{
                    transform: [
                      {
                        rotate: arrowRotationDeg,
                      },
                    ],
                  }}>
                  <Icon name="arrowDown" color="black" />
                </Animated.View>
              </Box>
            </TouchableWithoutFeedback>
          </Box>
          <Avatar src={require('assets/images/avatar.png')} />
        </Box>
        <Box>
          <Box marginBottom="xl">
            <StyledText variant="bodyPrimary" marginBottom="s">
              Enter parcel number or scan QR code
            </StyledText>
            <Box flexDirection="row">
              <Box flex={1} marginRight="s">
                <StyledInput
                  label=""
                  type="search"
                  placeholder="tracking number"
                  value={trackingNumber}
                  onChangeText={v => setTrackingNumber(v)}
                />
              </Box>
              <IconButton icon="qrCode" onPress={() => navigation.navigate('Camera')} />
            </Box>
          </Box>
          <Box>
            <StyledButton label="Track parcel" onPress={() => true} />
          </Box>
        </Box>
      </AnimatedBox>
      <Layout headingSmall="My parcels">
        {myParcelsData.map(parcelDetails => (
          <MyParcelCard
            key={parcelDetails.id}
            {...{ parcelDetails }}
            onDetailsPress={toggleDetails}
          />
        ))}
      </Layout>
      {openDetails && <ActionSheet onClosePress={toggleDetails} />}
    </SafeAreaView>
  );
};

export default MyParcels;
