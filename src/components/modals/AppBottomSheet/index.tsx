/* eslint-disable react-native/no-inline-styles */
import {Keyboard, Platform, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {BottomSheet} from 'react-native-btr';
import {isTablet, windowWidth} from 'src/styles/appStyle';
import {AppBottomSheetProps} from './type';
import {useAppDispatch} from 'src/redux/hook';
import {setKeyboardHeight} from 'src/redux/slices/keyboardSlice';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {TouchableOpacity} from 'react-native';
const AppBottomSheet = ({
  containerStyle,
  backgroundColor = 'white',
  borderRadius,
  child,
  visible,
  setVisible,
  height,
  hasClose = false,
}: AppBottomSheetProps) => {
  const closeBottomSheet = () => {
    setHeightKeyboard(0);
  };
  const dispatch = useAppDispatch();
  const [heightKeyboard, setHeightKeyboard] = useState(0);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      async event => {
        console.log('Keyboard height is: ', event.endCoordinates.height);
        setHeightKeyboard(event.endCoordinates.height);
        dispatch(setKeyboardHeight(event.endCoordinates.height));
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        console.log('Keyboard is hidden');
        setHeightKeyboard(0);
        dispatch(setKeyboardHeight(0));
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <BottomSheet
      visible={visible}
      onBackButtonPress={() => {
        closeBottomSheet();
        setVisible(false);
      }}
      onBackdropPress={() => {
        closeBottomSheet();
        setVisible(false);
      }}>
      <View
        style={[
          styles.modalContentAdd,
          {
            marginBottom: Platform.OS === 'ios' ? heightKeyboard : 0,
            backgroundColor: backgroundColor,
            borderRadius: borderRadius,
            height: height,
          },
          containerStyle,
        ]}>
        {hasClose && (
          <TouchableOpacity
            style={{alignSelf: 'flex-end'}}
            onPress={() => {
              setVisible(false);
            }}>
            <Icon
              name="window-close"
              type={IconType.FontAwesome}
              size={isTablet ? 42 : 26}
              color="#e30000"
            />
          </TouchableOpacity>
        )}
        <View style={styles.lineContainer}>
          <View style={styles.line} />
        </View>
        {child}
      </View>
    </BottomSheet>
  );
};

export default AppBottomSheet;

const styles = StyleSheet.create({
  modalContentAdd: {
    backgroundColor: 'white',
    paddingHorizontal: isTablet ? '20%' : 16,
    paddingVertical: 24,
    paddingBottom: 16,
    width: windowWidth,
    alignItems: 'flex-start',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  lineContainer: {
    alignItems: 'center',
    alignSelf:'center'
  },
  line: {
    width: 70,
    height: 4,
    backgroundColor: 'black',
    borderRadius: 20,
  },
});
