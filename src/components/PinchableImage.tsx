import React from 'react';
import { ImageSourcePropType, ImageStyle, StyleProp, StyleSheet } from 'react-native';
import Animated, { useValue } from 'react-native-reanimated';
import {
  PinchGestureHandler,
  PinchGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler';

interface IPinchableImageProps {
  source: ImageSourcePropType;
}

const PinchableImage = ({ source }: IPinchableImageProps) => {
  const baseScale = useValue(1);
  const pinchScale = useValue(1);
  const imageScale = Animated.multiply(baseScale, pinchScale);
  let lastScale: Animated.Adaptable<any> = 1;

  const transformStyles: StyleProp<Animated.AnimateStyle<ImageStyle>> = {
    transform: [
      {
        perspective: 200,
      },
      { scale: imageScale },
    ],
  };

  const onPinchGestureEvent = Animated.event([{ nativeEvent: { scale: pinchScale } }], {
    useNativeDriver: true,
  });

  const onPinchHandlerStateChange = ({ nativeEvent }: PinchGestureHandlerStateChangeEvent) => {
    const { oldState, scale } = nativeEvent;
    if (oldState === State.ACTIVE) {
      if (scale < 1) {
        lastScale = 1;
      } else {
        lastScale *= scale;
      }
      baseScale.setValue(lastScale);
      pinchScale.setValue(1);
    }
  };

  return (
    <PinchGestureHandler
      onGestureEvent={onPinchGestureEvent}
      onHandlerStateChange={onPinchHandlerStateChange}
    >
      <Animated.Image style={[styles.image, { ...transformStyles }]} {...{ source }} />
    </PinchGestureHandler>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default PinchableImage;
