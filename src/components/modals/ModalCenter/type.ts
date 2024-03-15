import React from 'react';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ModalProps} from 'react-native-modal';

export type ModalCenterProps = {
  containerStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  borderRadius?: number;
  child?: React.ReactNode;

  width?: any;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  onBackdropPress?: () => void;
  onBackButtonPress?: () => void;

  title?: string;
  titleStyle?: StyleProp<TextStyle>;
  content?: string;
  content2?: string;
  boldContent?: string[];
  contentStyle?: StyleProp<TextStyle>;
  typeOption?: 'confirm' | 'form' | 'none';

  btnContainerStyle?: StyleProp<ViewStyle>;
  textBtnLeft?: string;
  textBtnRight?: string;
  textColorLeft?: string;
  textColorRight?: string;
  bgBtnLeft?: string;
  bgBtnRight?: string;
  btnBorderRadius?: number;
  onPressLeft?: any;
  onPressRight?: any;

  animationIn?:
    | 'bounce'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceInUp'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'bounceOutUp'
    | 'fadeIn'
    | 'fadeOut'
    | 'flash'
    | 'shake'
    | 'jello'
    | 'flash'
    | 'tada'
    | 'rotate'
    | 'pulse'
    | 'wobble'
    | 'zoomIn'
    | 'zoomOut';
  animationInTiming?: number;
  animationOut?:
    | 'bounce'
    | 'bounceIn'
    | 'bounceInDown'
    | 'bounceInLeft'
    | 'bounceInRight'
    | 'bounceInUp'
    | 'bounceOut'
    | 'bounceOutDown'
    | 'bounceOutLeft'
    | 'bounceOutRight'
    | 'bounceOutUp'
    | 'fadeIn'
    | 'fadeOut'
    | 'flash'
    | 'shake'
    | 'jello'
    | 'flash'
    | 'tada'
    | 'rotate'
    | 'pulse'
    | 'wobble'
    | 'zoomIn'
    | 'zoomOut';
  animationOutTiming?: number;
};
