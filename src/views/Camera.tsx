import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { RootStack, StackNavigationProps } from 'types';
import { Box } from 'components';

const Camera = ({ navigation }: StackNavigationProps<RootStack, 'Camera'>) => {
  const ref = useRef<RNCamera>(null);
  const { width, height } = Dimensions.get('window');

  const handleQrRead = async (e: BarCodeReadEvent) => {
    await AsyncStorage.setItem('trackingNumberFromQr', e.data, () => {
      navigation.replace('Root');
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} position="relative">
        <RNCamera
          {...{ ref }}
          style={{ flex: 1 }}
          type={RNCamera.Constants.Type.back}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
          onBarCodeRead={handleQrRead}
        />
        <Box
          justifyContent="center"
          alignItems="center"
          position="absolute"
          {...{ width, height }}>
          <Box width={width * 0.75} height={height * 0.375} position="relative">
            <Box
              width={50}
              height={50}
              position="absolute"
              top={0}
              left={0}
              borderTopLeftRadius="s"
              borderLeftWidth={2}
              borderTopWidth={2}
              borderLeftColor="white"
              borderTopColor="white"
            />
            <Box
              width={50}
              height={50}
              position="absolute"
              top={0}
              right={0}
              borderTopRightRadius="s"
              borderRightWidth={2}
              borderTopWidth={2}
              borderRightColor="white"
              borderTopColor="white"
            />
            <Box
              width={50}
              height={50}
              position="absolute"
              bottom={0}
              right={0}
              borderBottomRightRadius="s"
              borderRightWidth={2}
              borderBottomWidth={2}
              borderRightColor="white"
              borderBottomColor="white"
            />
            <Box
              width={50}
              height={50}
              position="absolute"
              bottom={0}
              left={0}
              borderBottomLeftRadius="s"
              borderLeftWidth={2}
              borderBottomWidth={2}
              borderLeftColor="white"
              borderBottomColor="white"
            />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Camera;
