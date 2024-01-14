import {StyleSheet, TextInput, View, Image, Platform} from 'react-native';
import React from 'react';
import {icons} from 'src/assets/icons';
import {colors} from 'src/styles/colors';
import {AppSearchBarProps} from './type';
import {appStyle} from 'src/styles/appStyle';

const AppSearchBar = ({
  containerStyle,
  textInputStyle,
  placeholder,
  placeholderColor,
  backgroundColor,

  paddingVertical = Platform.OS === 'ios' ? 12 : 8,
  borderColor,
  borderRadius,
  borderWidth,

  icon,
  width,
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
          width: width == null ? '100%' : width,
          backgroundColor:
            backgroundColor == null ? '#F7F7F7' : backgroundColor,
          borderWidth: borderWidth == null ? 1 : borderWidth,
          borderColor: borderColor == null ? '#E4E4E4' : borderColor,
          borderRadius: borderRadius == null ? 6 : borderRadius,
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
        style={[appStyle.text14, styles.textInput, textInputStyle]}
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
    fontSize: 14,
    color: colors.text,
    fontWeight: '400',
    fontStyle: 'normal',
    letterSpacing: 0.5,
    marginHorizontal: 12,
    width: '85%',
    paddingVertical: 0,
  },
});
