import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type AppBottomSheetProps = {
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  borderRadius?: number;
  child: React.ReactNode;
  visible: any;
  setVisible: any;
  height?: any;
  hasClose?: boolean;
};
