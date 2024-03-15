import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {AppbarHeaderProps} from './type';
import {icons} from 'src/assets/icons/icons';
import {colors} from 'src/styles/colors';
import {appStyle, isTablet} from 'src/styles/appStyle';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {squareImageSize} from 'src/utils';

const AppHeader = ({
  title,
  onPressRight,
  onPressLeft,
  iconLeft,
  icon,
  noBackground,

  backgroundColor = noBackground ? null : colors.background,
  tintColor = '#424242',
  iconRightColor = '#424242',
  noIcon = false,
  rightChild,
  iconSize = isTablet ? squareImageSize(0.04) : squareImageSize(0.06),
}: AppbarHeaderProps) => {
  const navigation = useNavigation();

  const iconMap = {
    add: icons.add,
    dustBin: icons.delete,
    setting: icons.setting,
    cart: icons.cart,
    close: icons.close_header,
    download: icons.download,
    threeDot: icons.ic3dotVer,
    next: icons.next,
    pdf: icons.pdf,
    info: icons.info,
    history: icons.history,
    copy: icons.copy,
    menu: icons.menu,
    calendar: icons.calendar,
  };

  const getIcon = (icon, onPressRight) => {
    if (icon === '') {
      return <Text> </Text>;
    } else if (iconMap.hasOwnProperty(icon)) {
      return (
        <TouchableOpacity
          style={[styles.boxIcon, {alignItems: 'flex-end'}]}
          onPress={onPressRight}>
          <FastImage
            style={{width: iconSize, height: iconSize}}
            tintColor={icon === 'dustBin' ? 'red' : iconRightColor}
            source={iconMap[icon]}
          />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={[styles.boxIcon, {alignItems: 'flex-end'}]}
          onPress={onPressRight}>
          <FastImage style={{width: 24, height: 24}} source={icon} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View
      style={[
        styles.shadow,
        {
          backgroundColor: backgroundColor,
        },
      ]}>
      {!noIcon ? (
        <TouchableOpacity
          style={styles.boxIcon}
          onPress={() => {
            onPressLeft ? onPressLeft() : navigation.goBack();
          }}>
          {iconLeft == null ? (
            // <Icon name="left" size={18} color={tintColor} />
            <Icon
              name="chevron-left"
              type={IconType.Entypo}
              size={iconSize}
              color={tintColor}
            />
          ) : iconLeft === 'close' ? (
            <Icon
              name="close"
              type={IconType.Ionicons}
              size={iconSize}
              color={tintColor}
            />
          ) : iconLeft === 'copy' ? (
            <Icon
              name="copy"
              type={IconType.Ionicons}
              size={iconSize}
              color={tintColor}
            />
          ) : (
            <Icon
              name="chevron-left"
              type={IconType.Entypo}
              size={iconSize}
              color={tintColor}
            />
          )}
        </TouchableOpacity>
      ) : (
        <View />
      )}

      <Text
        style={[
          appStyle.text16SemiBold,
          {
            lineHeight: 55,
            color: tintColor,
          },
        ]}>
        {title}
      </Text>
      {rightChild != null ? (
        <TouchableOpacity onPress={onPressRight}>{rightChild}</TouchableOpacity>
      ) : !noIcon ? (
        getIcon(icon, onPressRight)
      ) : (
        <View />
      )}
      {}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  shadow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: isTablet ? 24 : 14,
    width: '100%',

    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3,
    // },
    // shadowOpacity: 0.17,
    // shadowRadius: 3.05,
    // elevation: 5,
  },
  boxIcon: {
    width: '10%',
    height: 50,
    justifyContent: 'center',
  },
});
