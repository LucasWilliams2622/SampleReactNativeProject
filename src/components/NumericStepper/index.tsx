import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NumericStepperComponentProps} from './type';
import Icon, {IconType} from 'react-native-dynamic-vector-icons';
import {TextInput} from 'react-native';
import {colors} from 'src/styles/colors';
import {fonts} from 'src/assets/fonts/fonts';
const NumericStepper = ({
  containerStyle,
  borderRadius = 2,
  borderColor = '#bfbfbf',
  borderWidth = 1,
  widthInput = 24 * 2,
  height = 26,
  isInput = true,

  text = 1,
  textColor = colors.primary,
  textStyle,
  iconSize = 24,
  buttonStyle,
  onChangeText,
}: NumericStepperComponentProps) => {
  const [input, setInput] = useState(text);
  useEffect(() => {
    if (onChangeText) {
      onChangeText(input);
    }
  }, [input, onChangeText]);

  const decrement = () => {
    if (input > 1) {
      setInput(prevInput => prevInput - 1);
    }
  };

  const increment = () => {
    if (input < 99999) {
      setInput(prevInput => prevInput + 1);
    }
  };

  const handleInputChange = (text: string) => {
    if (text === '') {
      setInput(1);
    } else {
      const inputValue = parseInt(text);
      if (isNaN(inputValue) || inputValue <= 0) {
        setInput(1);
      } else if (inputValue > 99999) {
        setInput(99999);
      } else {
        setInput(inputValue);
      }
    }
  };
  return (
    <View style={[styles.container, {}, containerStyle]}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderTopLeftRadius: borderRadius,
            borderBottomLeftRadius: borderRadius,
            height: height,
          },
          buttonStyle,
        ]}
        disabled={input === 1 ? true : false}
        onPress={decrement}>
        <Icon
          name="minus"
          type={IconType.Entypo}
          size={iconSize}
          color={input === 1 ? colors.gray : 'black'}
        />
      </TouchableOpacity>
      <TextInput
        editable={isInput}
        defaultValue={String(input)}
        style={[
          styles.input,
          {
            width: widthInput,
            borderColor: borderColor,
            borderTopWidth: borderWidth,
            borderBottomWidth: borderWidth,
            color: textColor,
            height: height,
          },
          textStyle,
        ]}
        keyboardType="number-pad"
        onChangeText={handleInputChange}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {
            borderWidth: borderWidth,
            borderColor: borderColor,
            borderTopRightRadius: borderRadius,
            borderBottomRightRadius: borderRadius,
            height: height,
          },
          buttonStyle,
        ]}
        disabled={input === 99999 ? true : false}
        onPress={increment}>
        <Icon
          name="plus"
          type={IconType.Entypo}
          size={iconSize}
          color={input === 99999 ? colors.gray : 'black'}
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
  },
  input: {
    textAlign: 'center',
    fontFamily: fonts.SemiBold,
    paddingVertical: 0,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
