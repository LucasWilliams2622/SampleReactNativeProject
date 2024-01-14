import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from 'src/styles/colors';
import {AppButtonProps} from './type';
import {appStyle, windowHeight} from 'src/styles/appStyle';
import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const AppButton = ({
  containerStyle,
  titleStyle,
  title,
  backgroundColor,
  textColor,
  borderColor,
  width,
  onPress,
  alignSelf,
  disabled,
  fontSize,
  noShadow,
  borderRadius = 8,
  marginBottom,
  borderWidth = 1,
  marginTop,
}: AppButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        appStyle.button,
        {
          backgroundColor:
            backgroundColor == null ? colors.bgButton : backgroundColor,
          width: width == null ? '100%' : width,
          alignSelf: alignSelf == null ? 'center' : alignSelf,
          elevation: noShadow ? 0 : Platform.OS === 'ios' ? 7 : 3,
          shadowOpacity: noShadow ? 0 : 0.29,
          borderColor: borderColor == null ? colors.bgButton : borderColor,
          marginBottom: marginBottom,
          borderWidth: borderWidth,
          marginTop: marginTop,
          borderRadius: borderRadius,
          paddingVertical:
            Platform.OS === 'ios'
              ? RFValue(14, windowHeight)
              : RFValue(12, windowHeight),
        },
        containerStyle,
      ]}
      disabled={disabled == null ? false : disabled}
      onPress={onPress}>
      <Text
        style={[
          appStyle.titleButton,
          {
            color: textColor == null ? colors.titleButton : textColor,
            fontSize:
              fontSize == null
                ? RFValue(14, windowHeight)
                : RFValue(fontSize, windowHeight),
          },
          titleStyle,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({});
