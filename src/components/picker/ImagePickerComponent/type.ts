import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ImagePickerComponentProps = {
  containerStyle?: StyleProp<ViewStyle>;
  outsideStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  title?: string;

  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: any;

  width?: any;
  height?: any;

  widthPicker?: any;
  heightPicker?: any;

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

  cropEnabled?: boolean;
  multiple?: boolean;
};
