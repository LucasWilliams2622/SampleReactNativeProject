import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {ModalCenterProps} from './type';
import {appStyle, isTablet} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import AppButton from 'src/components/buttons/AppButton';
import {TextViewBold} from 'src/components/texts/TextViewBold';

const ModalCenter = ({
  containerStyle,
  backgroundColor = 'white',
  borderRadius = 20,
  child,
  visible,
  setVisible,
  animationIn = 'fadeIn',
  animationInTiming = 300,
  animationOut = 'fadeOut',
  animationOutTiming = 300,
  width = isTablet ? '60%' : '100%',
  onBackdropPress,
  onBackButtonPress,

  typeOption = 'none',
  title,
  titleStyle,
  content,
  content2,
  boldContent,
  contentStyle,
  textBtnLeft = typeOption === 'confirm' ? 'Hủy bỏ' : 'Hủy',
  textBtnRight = typeOption === 'confirm' ? 'Đồng ý' : 'Lưu',
  bgBtnLeft = '#EAEAEA',
  bgBtnRight = typeOption === 'confirm' ? '#ffffff' : colors.bgButton,
  btnBorderRadius = typeOption === 'confirm' ? 50 : 8,
  textColorLeft = '#787878',
  textColorRight = colors.white,
  onPressLeft,
  onPressRight,
  btnContainerStyle,
}: ModalCenterProps) => {
  const backdropPress = () => {
    (onBackdropPress ?? handleClose)();
    setVisible(!visible);
  };

  const handlePressLeft = () => {
    (onPressLeft ?? handleClose)();
    setVisible(!visible);
  };
  const handleClose = () => {
    setVisible(!visible);
  };
  return (
    <Modal
      onBackdropPress={() => {
        (onBackdropPress ?? backdropPress)();
      }}
      onBackButtonPress={() => {
        (onBackButtonPress ?? backdropPress)();
      }}
      isVisible={visible}
      // avoidKeyboard
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      coverScreen
      backdropOpacity={0.6}>
      <View
        style={[
          styles.container,
          {
            width: width,
            borderRadius: borderRadius,
            backgroundColor: backgroundColor,
            height: 'auto',
            alignItems: 'center',
          },
          containerStyle,
        ]}>
        {title && (
          <Text
            style={[appStyle.text16SemiBold, {marginBottom: 8}, titleStyle]}>
            {title}
          </Text>
        )}

        {content && (
          <TextViewBold
            boldTexts={boldContent}
            text={content}
            textStyle={contentStyle}
          />
        )}

        {child}
        {typeOption !== 'none' && (
          <View style={[appStyle.rowBtw, styles.boxButton, btnContainerStyle]}>
            <AppButton
              title={textBtnLeft}
              onPress={handlePressLeft}
              width={'48%'}
              backgroundColor={bgBtnLeft}
              borderColor={bgBtnLeft}
              textColor={textColorLeft}
              borderRadius={btnBorderRadius}
              noShadow
            />
            <AppButton
              title={textBtnRight}
              onPress={onPressRight}
              width={'48%'}
              backgroundColor={bgBtnRight}
              borderColor={bgBtnRight}
              textColor={textColorRight}
              borderRadius={btnBorderRadius}
              noShadow
            />
          </View>
        )}
      </View>
    </Modal>
  );
};

export default ModalCenter;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingVertical: isTablet ? 32 : 24,
    paddingHorizontal: isTablet ? 24 : 16,
    alignSelf: 'center',
    height: 'auto',
  },
  boxButton: {
    marginTop: 24,
  },
});
