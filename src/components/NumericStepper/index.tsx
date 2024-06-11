import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {NumericStepperComponentProps} from './type';
import {TextInput} from 'react-native';
import {colors} from 'src/styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {appStyle} from 'src/styles/appStyle';

const MAX_VALUE = 999;

const NumericStepper = ({
  containerStyle,
  borderRadius = 4,
  borderColor = '#bfbfbf',
  type = 'hasBackground',
  borderWidth = 0,
  isInput = false,
  width = '100%',
  text = 0,
  textColor = colors.text,
  textStyle,
  iconSize = 16,
  buttonStyle,
  onChangeText,
  value,
  onDecrement,
  onIncrement,
  onValueChange,
}: NumericStepperComponentProps) => {
  // const handleInputChange = (text: string) => {
  //   let inputValue = parseInt(text, 10);
  //   if (isNaN(inputValue) || inputValue <= 0) {
  //     inputValue = 1;
  //   } else if (inputValue > MAX_VALUE) {
  //     inputValue = MAX_VALUE;
  //   }
  //   onValueChange(inputValue);
  // };

  return (
    <View style={[styles.container, {width: width}, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius,
            backgroundColor:
              type === 'basic'
                ? 'transparent'
                : value === 0
                ? colors.bgComponent
                : colors.primary,
          },
          buttonStyle,
        ]}
        disabled={value === 0}
        onPress={onDecrement}>
        <AntDesign
          name="minus"
          size={iconSize}
          color={
            value === 0
              ? colors.gray
              : type === 'basic'
              ? colors.primary
              : colors.white
          }
        />
      </TouchableOpacity>
      <TextInput
        editable={isInput}
        value={String(value)}
        style={[
          appStyle.text16Medium,
          {
            paddingVertical: 0,
            paddingHorizontal: 16,
            textAlign: 'center',
            textAlignVertical: 'center',
            color: textColor,
          },
          textStyle,
        ]}
        maxLength={5}
        keyboardType="number-pad"
        // onChangeText={handleInputChange}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderRadius,
            backgroundColor:
              type === 'basic'
                ? 'transparent'
                : value < MAX_VALUE
                ? colors.primary
                : colors.bgComponent,
          },
          buttonStyle,
        ]}
        disabled={value === MAX_VALUE}
        onPress={onIncrement}>
        <AntDesign
          name="plus"
          size={iconSize}
          color={
            type === 'basic' && value < MAX_VALUE
              ? colors.primary
              : value < MAX_VALUE
              ? colors.white
              : colors.gray
          }
        />
      </TouchableOpacity>
    </View>
  );
};

export default NumericStepper;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bgComponent,
  },
});
