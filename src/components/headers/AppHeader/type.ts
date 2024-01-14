import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type AppbarHeaderProps = {
  containerStyle?: StyleProp<ViewStyle>;
  icon?: any;
  iconLeft?: any;
  onPressRight?: () => void;
  onPressLeft?: () => void;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  textLeftStyle?: StyleProp<TextStyle>;
  tintColor?: string;
  backgroundColor?: any;
  iconRightColor?: string;
  noIcon?: boolean;
  rightChild?: React.ReactNode;
  noBackground?: boolean;
};
