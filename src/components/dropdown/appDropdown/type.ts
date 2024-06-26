import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type AppDropdownProps = {
  containerStyle?: StyleProp<ViewStyle>;
  selectedTextStyle?: StyleProp<TextStyle>;
  inputSearchStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<ViewStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  dropdownStyle?: StyleProp<ViewStyle>;
  placeholder?: string;

  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;
  borderRadius?: number;

  width?: any;
  height?: any;
  maxHeight?: number;
  // renderItem?: React.ReactNode;
  paddingVertical?: number;
  paddingHorizontal?: number;
  mode?: 'auto' | 'default' | 'modal';
  alignSelf?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'baseline'
    | 'stretch'
    | 'auto';
  textAlign?: 'auto' | 'left' | 'center' | 'right' | 'justify';
  search?: boolean;
  searchPlaceholder?: string;
  placeholderTextColor?: string;
  data: Array<any>;
  labelField: string | any;
  valueField: string;
  value: any;
  visible?: boolean;
  onChange: (value: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};
