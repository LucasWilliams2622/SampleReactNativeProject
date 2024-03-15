import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type NumericStepperComponentProps = {
  containerStyle?: StyleProp<ViewStyle>;
  borderRadius?: number;
  borderWidth?: number;
  borderColor?: any;
  widthInput?: number;
  height?: number;
  isInput?: boolean;

  text?: number;
  textColor?: string;
  textStyle?: StyleProp<TextStyle>;

  iconSize?: any;
  buttonStyle?: StyleProp<ViewStyle>;
  onChangeText?: (text: string) => void;
};
