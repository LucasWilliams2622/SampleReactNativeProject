import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type AppSearchBarProps = {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;

  placeholder?: string;
  placeholderColor?: string;
  backgroundColor?: string;
  paddingVertical?: number;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: any;

  icon?: any;
  width?: string;
  value?: string;
  editable?: boolean;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
};
