import React, {ReactNode} from 'react';
import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export type AppInputProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<TextStyle>;
  iconLeft?: any;
  childRight?: React.ReactNode;
  iconSize?: number;
  iconColor?: string | any;
  iconLibrary?:
    | 'antdesign'
    | 'entypo'
    | 'evilicons'
    | 'feather'
    | 'fontawesome'
    | 'fontawesome5'
    | 'fontawesome6'
    | 'materialcommunityicons'
    | 'materialicons'
    | 'ionicons'
    | 'fontisto'
    | 'simplelineicons'
    | 'zocial';

  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  backgroundColor?: any;
  textColor?: string;

  paddingVertical?: number;
  paddingHorizontal?: number;
  placeholder?: string;
  placeholderTextColor?: string;

  keyboardAppearance?: 'default' | 'light' | 'dark';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  width?: any;
  height?: any;

  inputWidth?: any;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad';
  maxLength?: number | any;

  editable?: boolean;
  autoCorrect?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  fontSize?: number;
  isPassword?: boolean;
  noPlaceholder?: boolean;
  disable?: boolean;

  value?: string;
  onSubmitEditing?: () => void;
  onClear?: () => void;
  onBlur?: any;
  onChangeText?: (text: string) => void;
};
