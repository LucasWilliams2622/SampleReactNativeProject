/* eslint-disable react-native/no-inline-styles */
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from 'styles/colors';
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconZocial from 'react-native-vector-icons/Zocial';
import FastImage from 'react-native-fast-image';
import {AppInputProps} from './type';
import {appStyle} from 'src/styles/appStyle';

const AppInput = ({
  containerStyle,
  textInputStyle,
  iconLeft,
  childRight,
  iconSize = 20,
  iconColor = colors.text,
  iconLibrary = 'entypo',

  borderWidth = 1.5,
  borderColor,
  borderRadius = 6,
  backgroundColor = colors.background,
  textColor = colors.text,

  paddingVertical = Platform.OS === 'ios' ? 12 : 8,
  paddingHorizontal = 12,
  placeholder = 'Nhập nội dung',
  placeholderTextColor = colors.placeholder,

  keyboardAppearance = 'light',
  returnKeyType = 'next',
  autoCapitalize = 'none',
  width = '100%',
  height,
  keyboardType,

  editable,
  autoCorrect,
  multiline = false,
  fontSize = 14,
  isPassword = false,
  maxLength = 99999,
  value,
  onSubmitEditing,
  onClear,
  onBlur,
  onChangeText,
  onPressIn,
  inputWidth = '80%',
  numberOfLines = 1,
  noPlaceholder = false,
  disable = false,
}: AppInputProps) => {
  const renderIconLeft = () => {
    if (typeof iconLeft === 'string') {
      switch (iconLibrary) {
        case 'antdesign':
          return (
            <IconAntDesign
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'entypo':
          return (
            <IconEntypo
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'evilicons':
          return (
            <IconEvilIcons
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'feather':
          return (
            <IconFeather
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'fontawesome':
          return (
            <IconFontAwesome
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'fontawesome5':
          return (
            <IconFontAwesome5
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'fontawesome6':
          return (
            <IconFontAwesome6
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'materialcommunityicons':
          return (
            <IconMaterialCommunityIcons
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'materialicons':
          return (
            <IconMaterialIcons
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'ionicons':
          return (
            <IconIonicons
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'fontisto':
          return (
            <IconFontisto
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'simplelineicons':
          return (
            <IconSimpleLineIcons
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        case 'zocial':
          return (
            <IconZocial
              name={iconLeft}
              size={iconSize}
              color={iconColor}
              style={{marginRight: 12}}
            />
          );
        default:
          return null;
      }
    } else if (typeof iconLeft === 'number') {
      return (
        <FastImage
          source={iconLeft}
          style={{width: iconSize, height: iconSize, marginRight: 12}}
          tintColor={iconColor}
        />
      );
    } else if (typeof iconLeft === 'object' && iconLeft.hasOwnProperty('uri')) {
      return (
        <FastImage
          source={iconLeft}
          style={{width: iconSize, height: iconSize, marginRight: 12}}
          tintColor={iconColor}
        />
      );
    } else {
      return null;
    }
  };
  //=====================| CHANGE BOORDER colors |================
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    onBlur;
    setIsFocused(false);
  };

  // =======================| SHOW HIDE PASSWORD |==================
  const [isHidden, setIsHidden] = useState(true);
  const [iconSource, setIconSource] = useState('eye-with-line');

  const handleToggleVisibility = () => {
    setIsHidden(!isHidden);
    setIconSource(isHidden ? 'eye' : 'eye-with-line');
  };

  return (
    <View
      style={[
        styles.boxInput,
        {
          width: width,
          height: height,
          backgroundColor: disable ? '#F5F5F5' : backgroundColor,
          borderWidth: borderWidth,
          borderColor: isFocused
            ? colors.primary
            : borderColor == null
            ? '#E4E4E4'
            : borderColor,
          borderRadius: borderRadius,
          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
        },
        containerStyle,
      ]}>
      {renderIconLeft()}
      <TextInput
        style={[
          appStyle.text12Medium,
          styles.textInput,
          {
            color: textColor,
            width: childRight ? inputWidth : !isPassword ? '100%' : inputWidth,
            fontSize: fontSize,
          },
          textInputStyle,
        ]}
        keyboardType={keyboardType}
        placeholder={noPlaceholder ? '' : placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardAppearance={keyboardAppearance}
        returnKeyType={returnKeyType}
        editable={disable ? false : editable}
        autoCorrect={autoCorrect}
        passwordRules={'string'}
        multiline={height > 65 ? true : multiline}
        secureTextEntry={isPassword ? isHidden : false}
        autoCapitalize={autoCapitalize}
        value={value}
        onSubmitEditing={onSubmitEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChangeText={onChangeText}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        onPressIn={onPressIn}
      />
      {!isPassword ? (
        <></>
      ) : (
        <TouchableOpacity style={{}} onPress={handleToggleVisibility}>
          <IconEntypo name={iconSource} color={'#787878'} size={iconSize} />
        </TouchableOpacity>
      )}
      {childRight}
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  boxInput: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textInput: {
    paddingVertical: 0,
    alignItems: 'flex-start',
    textAlign: 'left',
  },
});
