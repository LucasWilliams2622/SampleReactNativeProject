import {StyleSheet, TextInput, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {icons} from 'src/assets/icons/icons';
import {colors} from 'src/styles/colors';
import {AppSearchBarProps} from './type';
import {appStyle} from 'src/styles/appStyle';

const AppSearchBar = ({
  containerStyle,
  textInputStyle,
  placeholder,
  placeholderColor,
  backgroundColor = colors.background,

  paddingVertical = Platform.OS === 'ios' ? 10 : 8,
  borderColor = '#E4E4E4',
  borderRadius = 6,
  borderWidth = 1,

  icon,
  width = '100%',
  value,
  onChangeText,
  onBlur,
  editable = true,
}: AppSearchBarProps) => {
  return (
    <View
      style={[
        styles.boxSearch,
        {
          width: width,
          backgroundColor: backgroundColor,
          borderWidth: borderWidth,
          borderColor: borderColor,
          borderRadius: borderRadius,
          paddingVertical: paddingVertical,
        },
        containerStyle,
      ]}>
      <Image
        style={styles.iconSearch}
        source={icon == null ? icons.search : icon}
      />
      <TextInput
        onBlur={onBlur}
        value={value}
        cursorColor={colors.primary}
        enablesReturnKeyAutomatically
        style={[appStyle.text12, styles.textInput, textInputStyle]}
        onChangeText={onChangeText}
        spellCheck={true}
        returnKeyType={'default'}
        keyboardAppearance={'default'}
        placeholder={placeholder == null ? 'Tìm kiếm' : placeholder}
        placeholderTextColor={
          placeholderColor == null ? '#787878' : placeholderColor
        }
        editable={editable}
      />
    </View>
  );
};

export default AppSearchBar;

const styles = StyleSheet.create({
  boxSearch: {
    backgroundColor: '#F7F7F7',
    borderColor: '#E4E4E4',
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: Platform.OS === 'ios' ? 10 : 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  iconSearch: {
    width: 20,
    height: 20,
    tintColor: '#787878',
  },
  textInput: {
    fontStyle: 'normal',
    letterSpacing: 0.5,
    marginHorizontal: 12,
    width: '85%',
    paddingVertical: 0,
  },
});
