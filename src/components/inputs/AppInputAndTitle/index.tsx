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
import {AppInputProps} from '../AppInput/type';
import AppInput from '../AppInput';

export type InputAndTitleProps = AppInputProps & {
  title: string;
  mainStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  isPlus?: string;
  marginBottom?: number;
  marginVertical?: number;
  marginTop?: number;
  mainWidth?: any;
};

const AppInputAndTitle: React.FC<InputAndTitleProps> = props => {
  const {
    title,
    mainStyle,
    titleStyle,
    isPlus,
    marginTop = 0,
    marginBottom = 0,
    marginVertical = 0,
    mainWidth = '100%',
  } = props;
  return (
    <View
      style={[
        styles.container,
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
      <AppInput {...props} />
    </View>
  );
};

export default AppInputAndTitle;

const styles = StyleSheet.create({
  container: {},
  title: {
    marginBottom: 4,
  },
});
