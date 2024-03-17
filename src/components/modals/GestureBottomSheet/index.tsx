import React, {
  forwardRef,
  useImperativeHandle,
  useCallback,
  useState,
  useEffect,
} from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  useWindowDimensions,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  interpolate,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {windowWidth} from 'src/styles/appStyle';

interface BottomSheetProps {
  activeHeight: number;
  children: any;
  backgroundColor?: string;
  backDropColor?: string;
  borderRadius?: number;
  hasExtra?: boolean;
  extraChildren?: any;
  extraHeight?: number;
}

interface BottomSheetRef {
  expand: () => void;
  close: () => void;
}

const BottomSheet = forwardRef<BottomSheetRef, BottomSheetProps>(
  (
    {
      activeHeight = windowWidth * 0.5,
      children,
      backgroundColor = 'white',
      backDropColor = 'gray',
      hasExtra = false,
      extraChildren,
      extraHeight = windowWidth * 0.7,
    },
    ref,
  ) => {
    const {height} = useWindowDimensions();
    const newActiveHeight = height - activeHeight;
    const topAnimation = useSharedValue(height);
    const [showExtra, setShowExtra] = useState(false);

    const expand = useCallback(() => {
      'worklet';
      topAnimation.value = withSpring(newActiveHeight, {
        damping: 100,
        stiffness: 400,
      });
    }, [setShowExtra]);

    const close = useCallback(() => {
      'worklet';
      topAnimation.value = withSpring(height, {
        damping: 100,
        stiffness: 400,
      });
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        expand,
        close,
      }),
      [expand, close],
    );

    useEffect(() => {
      setShowExtra(false); // Reset showExtra when closing BottomSheet
    }, [activeHeight]);
    const handleExtra = () => {
      console.log('UP');
      if (!showExtra) {
        setShowExtra(true);
        expand();
      } else {
        close();
      }
    };
    const animationStyle = useAnimatedStyle(() => {
      const top = topAnimation.value;
      return {
        top,
      };
    });

    const backDropAnimation = useAnimatedStyle(() => {
      const opacity = interpolate(
        topAnimation.value,
        [height, newActiveHeight],
        [0, 0.5],
      );
      const display = opacity === 0 ? 'none' : 'flex';
      return {
        opacity,
        display,
      };
    });

    const gestureHandler = useAnimatedGestureHandler({
      onStart: (_, ctx) => {
        ctx.startY = topAnimation.value;
      },
      onActive: (event, ctx) => {
        if (event.translationY < 0) {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
          });
          

          // setShowExtra(true); // Show extraChildren when BottomSheet is dragged upwards
        } else {
          topAnimation.value = withSpring(ctx?.startY + event.translationY, {
            damping: 100,
            stiffness: 400,
          });
        }
        // handleExtra()
      },
      onEnd: _ => {
        if (topAnimation.value > newActiveHeight + 50) {
          topAnimation.value = withSpring(height, {
            damping: 100,
            stiffness: 400,
          });
          console.log('DOWN');
        } else {
          topAnimation.value = withSpring(newActiveHeight, {
            damping: 100,
            stiffness: 400,
          });
        }
      },
    });

    return (
      <>
        <TouchableWithoutFeedback
          onPress={() => {
            close();
          }}>
          <Animated.View
            style={[
              styles.backDrop,
              backDropAnimation,
              {backgroundColor: backDropColor},
            ]}
          />
        </TouchableWithoutFeedback>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[
              styles.container,
              animationStyle,
              {
                height: showExtra ? extraHeight + activeHeight : activeHeight,
                backgroundColor: backgroundColor,
              },
            ]}>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            {showExtra && (
              <Animated.View
                style={[
                  styles.extraContainer,
                  {backgroundColor: backgroundColor},
                ]}>
                <Text>Extra</Text>
                {extraChildren}
              </Animated.View>
            )}
            {children}
          </Animated.View>
        </PanGestureHandler>
      </>
    );
  },
);

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    left: 0,
    alignSelf: 'flex-end',
    right: 0,
    top: 0,
    bottom: 0,
  },
  lineContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  line: {
    width: 50,
    height: 4,
    backgroundColor: 'black',
    borderRadius: 20,
  },
  extraContainer: {
    left: 0,
    alignSelf: 'flex-start',
    right: 0,
    bottom: 0,
  },
  backDrop: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'none',
  },
});
