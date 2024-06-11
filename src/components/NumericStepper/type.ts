import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type NumericStepperComponentProps = {
  containerStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: any;
  widthInput?: number;
  height?: number;
  isInput?: boolean;
  width?: any;
  text?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;

  iconSize?: any;
  buttonStyle?: StyleProp<ViewStyle>;
  onChangeText?: any;
  type?: 'basic' | 'hasBackground';
  value?: any;
  onDecrement?: any;
  onIncrement?: any;
  onValueChange?: any;
};
