import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoadingDots from 'react-native-loading-dots';
import {appStyle, windowHeight} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import {fonts} from 'src/assets/fonts/fonts';

const PrimaryLoading = ({visible = false, color = colors.primary}) => {
  const colorArr = [color, color, color, color];
  return !visible ? (
    <></>
  ) : (
    <View
      style={{
        width: '100%',
        height: windowHeight,
        // flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
      }}>
      <View
        style={{
          width: '60%',
          paddingVertical: 30,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 10,
        }}>
        <View style={{width: 80, marginBottom: 20}}>
          <LoadingDots size={14} bounceHeight={10} colors={colorArr} />
        </View>
        <Text
          style={[
            appStyle.text18,
            {color: colors.primary, fontFamily: fonts.Medium, fontSize: 20},
          ]}>
          Loading
        </Text>
      </View>
    </View>
  );
};

export default PrimaryLoading;

const styles = StyleSheet.create({});
