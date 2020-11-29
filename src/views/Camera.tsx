import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  PermissionsAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Box, Icon } from 'components';

const Camera = () => {
  const [cameraType, setCameraType] = useState<'back' | 'front'>('back');
  const [videoMode, setVideoMode] = useState<boolean>(false);
  const [hasSavePermission, setHasSavePermission] = useState<boolean>(false);
  const navigator = useNavigation();
  const ref = useRef<RNCamera>(null);
  const { width } = Dimensions.get('window');

  const handleQrRead = async (e: BarCodeReadEvent) => {
    const number = e.data;
    await AsyncStorage.setItem('trackingNumberFromQr', number, () => {
      navigator.navigate('MyParcels');
    });
  };

  useEffect(() => {
    async function getPermission() {
      const readPermission =
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
      const writePermission =
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
      const hasReadPermission = await PermissionsAndroid.check(readPermission);
      const hasWritePermission = await PermissionsAndroid.check(
        writePermission,
      );
      if (hasReadPermission && hasWritePermission) {
        setHasSavePermission(true);
      } else {
        const readStatus = await PermissionsAndroid.request(readPermission);
        const writeStatus = await PermissionsAndroid.request(writePermission);
        setHasSavePermission(
          readStatus === 'granted' && writeStatus === 'granted',
        );
      }
    }

    getPermission();
  }, []);

  const takePicture = async () => {
    const pic = await ref.current?.takePictureAsync({
      quality: 0.5,
      base64: false,
    });
    if (hasSavePermission && pic) {
      await CameraRoll.save(pic.uri);
    }
  };

  const toggleCameraMode = () => {
    setVideoMode(!videoMode);
  };

  const toggleCameraType = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} position="relative">
        <RNCamera
          {...{ ref }}
          style={{ flex: 1 }}
          type={cameraType}
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
          position="absolute"
          bottom={16}
          {...{ width }}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly">
          <TouchableWithoutFeedback onPress={toggleCameraMode}>
            <Icon
              name={videoMode ? 'camera' : 'videoCamera'}
              color="white"
              width="40"
              height="40"
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity onPress={takePicture}>
            <Box
              position="relative"
              width={75}
              height={75}
              backgroundColor="white"
              borderRadius="cameraShutter"
              justifyContent="center"
              alignItems="center">
              {videoMode && (
                <Box
                  position="absolute"
                  width={37.5}
                  height={37.5}
                  backgroundColor="red"
                  borderRadius="cameraShutterRedDot"
                />
              )}
            </Box>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={toggleCameraType}>
            <Icon name="turn" color="white" width="40" height="40" />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default Camera;
