import {StyleProp, TextProps, TextStyle, ViewStyle} from 'react-native';

export type ImagePickerComponentProps = {
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: any;
  width?: number;
  height?: number;
  widthIcon?: number;
  heightIcon?: number;

  fontSize?: number;
  alignSelf?:
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'baseline'
    | 'stretch'
    | 'auto';
  disabled?: boolean;
  onImageSelected?: any;
  setImg?: any;
  imageUrl?: any;
  imageDefault?: any;
};
