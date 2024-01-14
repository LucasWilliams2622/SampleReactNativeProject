import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SlashScreen = () => {
  return (
    <View>
      <Text>SlashScreen</Text>
    </View>
  )
}

export default SlashScreen

const styles = StyleSheet.create({})
// import React, {useState, useEffect} from 'react';
// import {Image, StyleSheet, View, Animated, Easing} from 'react-native';
// import {appStyle, windowHeight, windowWidth} from 'src/styles/appStyle';
// import {images} from 'src/assets/images/images';
// import {squareImageSize} from 'src/utils';
// import {colors} from 'src/styles/colors';

// const SlashScreen = () => {
//   const [logoPosition] = useState(new Animated.Value(-windowHeight / 2));
//   const [backgroundColor] = useState(new Animated.Value(0));
//   const [animationComplete, setAnimationComplete] = useState(false);

//   useEffect(() => {
//     Animated.timing(logoPosition, {
//       toValue: windowWidth / 2 - windowWidth * 0.5,
//       duration: 500,
//       easing: Easing.linear,
//       useNativeDriver: false,
//     }).start(() => {
//       // Animation kết thúc, thực hiện đổi màu nền
//       Animated.timing(backgroundColor, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: false,
//       }).start();
//     });
//   }, []);

//   const interpolatedColor = backgroundColor.interpolate({
//     inputRange: [0, 1],
//     outputRange: ['transparent', colors.primary], // Thay đổi màu từ transparent sang blue
//   });

//   return (
//     <Animated.View
//       style={[appStyle.container, {backgroundColor: interpolatedColor}]}>
//       <Animated.Image
//         source={images.isLogoSlashPrimary}
//         style={[styles.logo, {marginLeft: logoPosition}]}
//       />
//     </Animated.View>
//   );
// };

// export default SlashScreen;

// const styles = StyleSheet.create({
//   logo: {
//     width: squareImageSize(0.32),
//     height: squareImageSize(0.32),
//     alignSelf: 'center',
//     marginTop: windowHeight / 2 - windowHeight * 0.1,
//     borderRadius: 999,
//     backgroundColor: 'white',
//   },
// });
