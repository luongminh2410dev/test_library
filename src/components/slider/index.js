import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { Extrapolation, interpolate, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const extrapolation = {
  extrapolateLeft: Extrapolation.CLAMP,
  extrapolateRight: Extrapolation.CLAMP
}

const DOT_RADIUS = 4;
const SLIDER_HEIGHT = 3;

const Slider = (props) => {
  const { progress, onSliding, onSlideEnded } = props;
  const translateX = useSharedValue(0);
  const dotScale = useSharedValue(1);
  const refSliderWidth = useRef(0);

  useEffect(() => {
    translateX.value = refSliderWidth.current * progress;
  }, [progress])

  const animatedSliderStyles = useAnimatedStyle(() => {
    const width = interpolate(translateX.value, [0, refSliderWidth.current], [0, refSliderWidth.current], extrapolation)
    return { width }
  })

  const animatedDotStyles = useAnimatedStyle(() => {
    const left = interpolate(
      translateX.value,
      [0, refSliderWidth.current],
      [- DOT_RADIUS, refSliderWidth.current - DOT_RADIUS],
      extrapolation
    );
    return {
      left,
      transform: [{ scale: dotScale.value }]
    }
  })

  const onLayout = event => {
    refSliderWidth.current = event.nativeEvent.layout.width;
  }

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.offsetX = translateX.value;
      dotScale.value = withTiming(2);
    },
    onActive: (event, context) => {
      translateX.value = context.offsetX + event.translationX;
    },
    onEnd: (event, context) => {
      dotScale.value = withTiming(1);
    }
  })

  const _onSlideEnded = () => {
    onSlideEnded(translateX.value / refSliderWidth.current)
  }

  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <View style={styles.slider_layout} onLayout={onLayout}>
          <Animated.View style={[styles.slider, animatedSliderStyles]} />
          <PanGestureHandler
            onBegan={onSliding}
            onEnded={_onSlideEnded}
            onGestureEvent={onGestureEvent}>
            <Animated.View style={[styles.dot, animatedDotStyles]} />
          </PanGestureHandler>
        </View>
      </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 8,
  },
  slider_layout: {
    width: '100%',
    position: 'relative',
    backgroundColor: 'lightgray',
    height: SLIDER_HEIGHT,
    justifyContent: 'center',
    borderRadius: 2,
  },
  slider: {
    width: 0,
    height: SLIDER_HEIGHT,
    borderRadius: 2,
    backgroundColor: 'black',
    zIndex: 1,
  },
  dot: {
    position: 'absolute',
    width: DOT_RADIUS * 2,
    height: DOT_RADIUS * 2,
    borderRadius: DOT_RADIUS,
    backgroundColor: 'black',
    overflow: 'hidden',
    zIndex: 2
  }
})

export default Slider