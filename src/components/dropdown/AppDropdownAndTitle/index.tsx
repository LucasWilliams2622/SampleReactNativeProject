import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {appStyle} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import AppDropdown from '../appDropdown';
import {AppDropdownProps} from '../appDropdown/type';

export type DropdownAndTitleProps = AppDropdownProps & {
  title: string;
  isPlus?: string;
  titleStyle?: StyleProp<TextStyle>;
  marginBottom?: number;
  marginVertical?: number;
  marginTop?: number;
  mainWidth?: any;
  mainStyle?: StyleProp<ViewStyle>;
  childRight?: React.ReactNode;
};

const AppDropdownAndTitle: React.FC<DropdownAndTitleProps> = props => {
  const {
    title,
    isPlus,
    titleStyle,
    marginTop = 0,
    marginBottom = 0,
    marginVertical = 0,
    mainWidth = '100%',
    mainStyle,
    childRight,
  } = props;
  return (
    <View
      style={[
        mainStyle,
        {
          marginTop: marginTop,
          marginVertical: marginVertical,
          marginBottom: marginBottom,
          width: mainWidth,
        },
      ]}>
      <Text style={[styles.title, appStyle.text14, titleStyle]}>
        {title}{' '}
        <Text style={[appStyle.text14, {color: colors.red}]}>
          {isPlus ? isPlus : ''}
        </Text>
      </Text>
      <View style={appStyle.rowBtw}>
        <AppDropdown {...props} width={childRight ? '90%' : '100%'} />
        {childRight}
      </View>
    </View>
  );
};

export default AppDropdownAndTitle;

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
  },
});
