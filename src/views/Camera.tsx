import React, { useRef, useState } from 'react';
import { Dimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BarCodeReadEvent, RNCamera } from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Animated, { Easing, useValue } from 'react-native-reanimated';

import { RecordingStatus } from 'types';
import { AnimatedBox, Box, Icon, Loading, StyledText } from 'components';

const Camera = () => {
  const [cameraType, setCameraType] = useState<'back' | 'front'>('back');
  const [videoMode, setVideoMode] = useState<boolean>(false);
  const [recordingStatus, setRecordingStatus] = useState<RecordingStatus>(RecordingStatus.STOPPED);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFlashOpen, setIsFlashOpen] = useState<boolean>(false);
  const navigator = useNavigation();
  const ref = useRef<RNCamera>(null);
  const cameraRef = ref.current;
  const cameraShutterWidth = useValue(50);
  const { width, height } = Dimensions.get('window');
  const { timing } = Animated;
  const recording = recordingStatus === RecordingStatus.RECORDING;
  const recordingStopped = recordingStatus === RecordingStatus.STOPPED;
  const recordingPaused = recordingStatus === RecordingStatus.PAUSED;

  const cameraShutterAnimConfig = {
    duration: 300,
    easing: Easing.inOut(Easing.ease),
  };

  const handleQrRead = async (e: BarCodeReadEvent) => {
    const number = e.data;
    await AsyncStorage.setItem('trackingNumberFromQr', number, () => {
      navigator.navigate('MyParcels');
    });
  };

  const takePicture = async () => {
    setLoading(true);
    const pic = await cameraRef?.takePictureAsync({
      quality: 0.5,
      base64: false,
    });
    if (pic) {
      const res = await CameraRoll.save(pic.uri);
      if (res) {
        setLoading(false);
      }
    }
  };

  const recordVideo = () => {
    timing(cameraShutterWidth, { ...cameraShutterAnimConfig, toValue: 100 }).start(
      async ({ finished }) => {
        if (finished) {
          setRecordingStatus(RecordingStatus.RECORDING);
          const res = await cameraRef?.recordAsync();
          if (res) {
            CameraRoll.save(res.uri, {
              type: 'video',
            });
          }
        }
      },
    );
  };

  const handlePauseResume = () => {
    if (recording) {
      cameraRef?.pausePreview();
      setRecordingStatus(RecordingStatus.PAUSED);
    } else {
      cameraRef?.resumePreview();
      setRecordingStatus(RecordingStatus.RECORDING);
    }
  };

  const stopRecording = () => {
    cameraRef?.stopRecording();
    setRecordingStatus(RecordingStatus.STOPPED);
    timing(cameraShutterWidth, { ...cameraShutterAnimConfig, toValue: 50 }).start();
  };

  const toggleCameraMode = () => {
    setVideoMode(!videoMode);
  };

  const toggleCameraType = () => {
    setCameraType(cameraType === 'back' ? 'front' : 'back');
  };

  const toggleFlash = () => {
    setIsFlashOpen(s => !s);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box flex={1} position="relative" justifyContent="center" backgroundColor="black">
        <RNCamera
          {...{ ref }}
          style={{ height: height * 0.8 }}
          type={cameraType}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio
          onBarCodeRead={handleQrRead}
          flashMode={isFlashOpen ? 'on' : 'off'}
        />
        <Box
          flexDirection="row"
          justifyContent="center"
          position="absolute"
          top={0}
          left={0}
          right={0}
          paddingTop="m"
        >
          <StyledText variant="h3Light" color="white">
            00:
          </StyledText>
          <StyledText variant="h3Light" color="white">
            00:
          </StyledText>
          <StyledText variant="h3Light" color="white">
            00
          </StyledText>
        </Box>
        <Box position="absolute" top={0} right={0} paddingTop="m" paddingRight="m">
          <TouchableOpacity onPress={toggleFlash}>
            <Icon name={isFlashOpen ? 'flash' : 'flashOff'} color="white" />
          </TouchableOpacity>
        </Box>
        <Box
          position="absolute"
          bottom={16}
          {...{ width }}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <TouchableWithoutFeedback onPress={toggleCameraMode}>
            <Icon
              name={videoMode ? 'camera' : 'videoCamera'}
              color="white"
              width="40"
              height="40"
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity onPress={videoMode ? recordVideo : takePicture}>
            <AnimatedBox
              width={cameraShutterWidth}
              height={50}
              backgroundColor="white"
              flexDirection="row"
              justifyContent="space-around"
              alignItems="center"
              borderRadius="cameraShutter"
            >
              {videoMode && recordingStopped && (
                <Box
                  width={20}
                  height={20}
                  backgroundColor="red"
                  borderRadius="cameraShutterRedDot"
                />
              )}
              {(recording || recordingPaused) && (
                <>
                  <TouchableWithoutFeedback onPress={handlePauseResume}>
                    <Icon
                      name={recordingPaused ? 'play' : 'pause'}
                      color="black"
                      width={20}
                      height={20}
                    />
                  </TouchableWithoutFeedback>
                  <TouchableWithoutFeedback onPress={stopRecording}>
                    <Icon name="stop" color="black" width={20} height={20} />
                  </TouchableWithoutFeedback>
                </>
              )}
            </AnimatedBox>
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={toggleCameraType}>
            <Icon name="turn" color="white" width="40" height="40" />
          </TouchableWithoutFeedback>
        </Box>
      </Box>
      {loading && <Loading fullScreen />}
    </SafeAreaView>
  );
};

export default Camera;
