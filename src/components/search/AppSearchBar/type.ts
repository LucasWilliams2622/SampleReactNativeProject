import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type AppSearchBarProps = {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;

  placeholder?: string;
  placeholderColor?: string;
  backgroundColor?: string;
  paddingVertical?: any;
  borderColor?: string;
  borderRadius?: any;
  borderWidth?: any;

  icon?: any;
  width?: any;
  value?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
};
