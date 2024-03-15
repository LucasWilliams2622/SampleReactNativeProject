/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from 'src/styles/colors';
import {AppButtonProps} from './type';
import {appStyle, isTablet, windowHeight} from 'src/styles/appStyle';
import {Platform} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
const DISABLE_TITLE = '#787878';
const AppButton = ({
  containerStyle,
  titleStyle,
  title,
  title2,
  backgroundColor = colors.bgButton,
  textColor = colors.titleButton,
  borderColor = colors.bgButton,
  width = '100%',
  onPress,
  alignSelf = 'center',
  disabled = false,
  fontSize = isTablet && Platform.OS === 'ios'
    ? RFValue(16, windowHeight)
    : !isTablet && Platform.OS === 'ios'
    ? RFValue(14, windowHeight)
    : RFValue(14, windowHeight),
  noShadow,
  borderRadius = 8,
  marginBottom,
  borderWidth = 1,
  marginTop,
  numberOfLines = 1,
  paddingVertical,
  iconColor = 'white',
  icon,
  iconSize = 16,
}: AppButtonProps) => {
  if (Array.isArray(backgroundColor) && backgroundColor.length > 1) {
    return (
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        useAngle={true}
        angle={135}
        angleCenter={{x: 0.5, y: 0.5}}
        colors={backgroundColor}
        style={[
          appStyle.button,
          {
            width: width,
            alignSelf: alignSelf,
            elevation: noShadow ? 0 : Platform.OS === 'ios' ? 7 : 3,
            shadowOpacity: noShadow ? 0 : 0.29,
            // borderColor: borderColor,
            marginBottom: marginBottom,
            borderWidth: borderWidth,
            marginTop: marginTop,
            borderRadius: borderRadius,
            paddingVertical:
              Platform.OS === 'ios' && isTablet
                ? RFValue(14, windowHeight)
                : Platform.OS === 'ios' && !isTablet
                ? RFValue(14, windowHeight)
                : RFValue(12, windowHeight),
          },
          containerStyle,
        ]}>
        <TouchableOpacity disabled={disabled} onPress={onPress}>
          <Text
            style={[
              appStyle.titleButton,
              {
                color: textColor,
                fontSize: RFValue(fontSize, windowHeight),
              },
              titleStyle,
            ]}
            numberOfLines={numberOfLines}>
            {title}
          </Text>
          {title2 && (
            <Text
              style={[
                appStyle.titleButton,
                {
                  color: textColor,
                  fontSize: RFValue(fontSize, windowHeight),
                },
                titleStyle,
              ]}
              numberOfLines={numberOfLines}>
              {title2}
            </Text>
          )}
        </TouchableOpacity>
      </LinearGradient>
    );
  } else {
    // If backgroundColor is not an array, render the button with single background color
    return (
      <TouchableOpacity
        style={[
          appStyle.button,
          {
            backgroundColor: disabled ? '#bfbfbf' : backgroundColor,
            width: width,
            alignSelf: alignSelf,
            elevation: noShadow ? 0 : Platform.OS === 'ios' ? 7 : 3,
            shadowOpacity: noShadow ? 0 : 0.29,
            borderColor: disabled ? '#bfbfbf' : borderColor,
            marginBottom: marginBottom,
            borderWidth: borderWidth,
            marginTop: marginTop,
            borderRadius: borderRadius,
            paddingVertical: paddingVertical
              ? paddingVertical
              : Platform.OS === 'ios' && isTablet
              ? RFValue(14, windowHeight)
              : Platform.OS === 'ios' && !isTablet
              ? RFValue(14, windowHeight)
              : RFValue(12, windowHeight),
          },
          containerStyle,
        ]}
        disabled={disabled}
        onPress={onPress}>
        <View style={appStyle.rowCenter}>
          {icon && (
            <FastImage
              style={{
                width: iconSize,
                height: iconSize,
                marginRight: 8,
              }}
              resizeMode="stretch"
              source={icon}
              tintColor={iconColor}
            />
          )}
          <View>
            <Text
              style={[
                appStyle.titleButton,
                {
                  color: disabled ? DISABLE_TITLE : textColor,
                  fontSize: RFValue(fontSize, windowHeight),
                },
                titleStyle,
              ]}
              numberOfLines={numberOfLines}>
              {title}
            </Text>

            {title2 && (
              <Text
                style={[
                  appStyle.titleButton,
                  {
                    color: disabled ? DISABLE_TITLE : textColor,
                    fontSize: RFValue(fontSize, windowHeight),
                  },
                  titleStyle,
                ]}
                numberOfLines={numberOfLines}>
                {title2}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
};

export default AppButton;
