import {StyleSheet} from 'react-native';
import React from 'react';
import {isTablet, windowHeight, windowWidth} from 'src/styles/appStyle';
import {Dropdown} from 'react-native-element-dropdown';
import {AppDropdownProps} from './type';
import {fonts} from 'src/assets/fonts/fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import {colors} from 'src/styles/colors';

const AppDropdown = ({
  containerStyle,
  selectedTextStyle,
  inputSearchStyle,
  placeholderStyle,
  iconStyle,
  placeholder,

  backgroundColor = '#ffffff',
  borderColor = '#E4E4E4',
  borderWidth = 0.5,
  borderRadius = 8,
  width = '100%',
  height = 46,
  maxHeight,

  paddingVertical = 10,
  paddingHorizontal,
  alignSelf = 'flex-start',

  mode = 'modal',
  search = false,
  searchPlaceholder = 'Tìm kiếm',
  placeholderTextColor = '#787878',
  data,
  labelField,
  valueField,
  value,
  onChange,
  onFocus,
  onBlur,
  textAlign = 'left',
  visible = true,
}: AppDropdownProps) => {
  return (
    <Dropdown
      data={data}
      style={[
        styles.dropdown,
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderRadius: borderRadius,
          width: width,
          height: height,
          maxHeight: maxHeight,

          paddingVertical: paddingVertical,
          paddingHorizontal: paddingHorizontal,
          alignSelf: alignSelf,
        },
        containerStyle,
      ]}
      placeholderStyle={[
        styles.placeholderStyle,
        placeholderStyle,
        {textAlign: textAlign},
      ]}
      selectedTextStyle={[
        styles.selectedTextStyle,
        selectedTextStyle,
        {textAlign: textAlign},
      ]}
      inputSearchStyle={[styles.inputSearchStyle, inputSearchStyle]}
      mode={isTablet ? 'default' : mode}
      iconStyle={[styles.icon, iconStyle]}
      search={isTablet ? false : search}
      searchPlaceholder={searchPlaceholder}
      maxHeight={isTablet ? windowHeight * 0.2 : 0}
      containerStyle={[isTablet ? null : styles.containerDropdown]}
      placeholder={placeholder}
      showsVerticalScrollIndicator={false}
      placeholderTextColor={placeholderTextColor}
      labelField={labelField}
      valueField={valueField}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default AppDropdown;

const styles = StyleSheet.create({
  dropdown: {
    paddingRight: 12,
    fontFamily: fonts.Medium,
    fontSize: RFValue(14, windowHeight),
    color: colors.text,
  },
  placeholderStyle: {
    fontSize: RFValue(14, windowHeight),
    color: colors.text,
    fontFamily: fonts.Regular,
    paddingLeft: 12,
  },
  selectedTextStyle: {
    fontSize: RFValue(14, windowHeight),
    color: colors.text,
    paddingLeft: 12,
    fontFamily: fonts.Medium,
    textAlign: 'center',
  },

  inputSearchStyle: {
    height: 40,
    borderColor: '#787878',
    marginHorizontal: 16,
    color: '#424242',
    borderRadius: 6,
    paddingHorizontal: 0,
  },
  icon: {},
  containerDropdown: {
    width: isTablet ? windowHeight : windowWidth,
    paddingVertical: 16,
    borderWidth: 2,
    height: isTablet ? windowWidth * 0.65 : windowHeight * 0.65,
    marginTop: isTablet ? windowHeight * 0.35 : windowHeight * 0.35,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
