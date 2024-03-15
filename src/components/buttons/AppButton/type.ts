import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type AppButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title: string;
  title2?: string;

  backgroundColor?: any;
  textColor?: any;
  borderColor?: any;
  width?: any;
  fontSize?: number;
  marginBottom?: number;
  marginTop?: number;
  paddingVertical?: any;

  borderRadius?: number;
  borderWidth?: number;
  numberOfLines?: number;

  alignSelf?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'baseline'
    | 'stretch'
    | 'auto';
  disabled?: boolean;
  noShadow?: boolean;
  iconColor?: string;
  icon?: any;
  iconSize?: any;
  onPress: () => void;
};
