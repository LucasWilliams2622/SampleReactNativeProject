import {
  StyleSheet,
  Text,
  Animated,
  View,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {appStyle, windowHeight, windowWidth} from 'src/styles/appStyle';
import {TouchableOpacity} from 'react-native';
import {colors} from 'src/styles/colors';
import {fonts} from 'src/assets/fonts/fonts';
import {TextInput} from 'react-native';

const CountDown = () => {
  const timers = [...Array(13).keys()].map(i => (i === 0 ? 1 : i * 5));
  const ITEM_SIZE = windowWidth * 0.38;
  const ITEM_SPACING = (windowWidth - ITEM_SIZE) / 2;
  const inputRef = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [duration, setDuration] = useState(timers[0]);
  const timerAnimation = React.useRef(new Animated.Value(windowHeight)).current;

  const buttonAnimation = React.useRef(new Animated.Value(0)).current;
  const animation = React.useCallback(() => {
    Animated.sequence([
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(timerAnimation, {
        toValue: windowHeight,
        duration: duration * 1000,
        useNativeDriver: true,
      }),
    ]).start(() => {
      Animated.timing(buttonAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  }, [duration]);

  const opacity = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const translateY = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200],
  });
  return (
    <View style={[styles.container, {backgroundColor: colors.black}]}>
      <StatusBar hidden />
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            height: windowHeight,
            width: windowWidth,
            backgroundColor: colors.lime,
            transform: [
              {
                translateY: timerAnimation,
              },
            ],
          },
        ]}></Animated.View>
      <Animated.View
        style={[
          StyleSheet.absoluteFillObject,
          {
            justifyContent: 'flex-end',
            alignItems: 'center',
            paddingBottom: 100,
            opacity,
            transform: [
              {
                translateY,
              },
            ],
          },
        ]}>
        <TouchableOpacity onPress={animation}>
          <View style={styles.roundButton} />
        </TouchableOpacity>
      </Animated.View>

      <Animated.View
        style={{
          position: 'absolute',
          width: ITEM_SIZE,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <TextInput
          ref={inputRef}
          style={styles.text}
          defaultValue={duration.toString()}
        />
      </Animated.View>
      <View
        style={{
          position: 'absolute',
          top: windowHeight / 3,
          left: 0,
          right: 0,
          flex: 1,
        }}>
        <Animated.FlatList
          data={timers}
          horizontal
          bounces={false}
          snapToInterval={ITEM_SIZE}
          onScroll={Animated.event([
            {nativeEvent: {contentOffset: {x: scrollX}}},
            // {useNativeDriver: true},
          ])}
          onMomentumScrollEnd={ev => {
            const index = Math.round(
              ev.nativeEvent.contentOffset.x / ITEM_SIZE,
            );
            setDuration(timers[index]);
          }}
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          keyExtractor={item => item.toString()}
          contentContainerStyle={{paddingHorizontal: ITEM_SPACING}}
          style={{flexGrow: 0}}
          renderItem={({item, index}) => {
            const inputRange = [
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
              (index + 1) * ITEM_SIZE,
            ];

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange: [0.4, 1, 0.4],
            });
            const scale = scrollX.interpolate({
              inputRange,
              outputRange: [0.7, 1, 0.7],
            });
            return (
              <View
                style={{
                  width: ITEM_SIZE,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Animated.Text
                  style={[
                    styles.text,
                    {
                      opacity,
                      transform: [
                        {
                          scale,
                        },
                      ],
                    },
                  ]}>
                  {item}
                </Animated.Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CountDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  roundButton: {
    backgroundColor: colors.amber,
    width: 200,
    height: 200,
    borderRadius: 99,
  },
  text: {
    fontSize: 100,
    fontFamily: fonts.Bold,
    color: colors.white,
  },
});
