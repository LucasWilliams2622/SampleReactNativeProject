import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type AppButtonProps = {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  width?: any;
  fontSize?: number;
  marginBottom?: number;
  marginTop?: number;

  borderRadius?: number;
  borderWidth?: number;

  alignSelf?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'baseline'
    | 'stretch'
    | 'auto';
  disabled?: boolean;
  noShadow?: boolean;
  onPress?: () => void;
};
