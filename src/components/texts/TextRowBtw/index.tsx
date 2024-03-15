import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React from 'react';
import {appStyle} from 'src/styles/appStyle';
import {colors} from 'src/styles/colors';
import {TextViewBold} from '../TextViewBold';

type TextColumnBtwProps = {
  titleLeft: string;
  textRight: string;
  styleTextLeft?: StyleProp<TextStyle>;
  styleTextRight?: StyleProp<TextStyle>;
  marginVertical?: number;
  colorLeft?: string;
  colorRight?: string;
  textRightBold?: string[];
};

const TextRowBtw: React.FC<TextColumnBtwProps> = props => {
  const {
    titleLeft,
    textRight,
    styleTextLeft,
    styleTextRight,
    marginVertical = 7,
    colorLeft = colors.text3,
    colorRight = colors.gray2,
    textRightBold,
  } = props;

  return (
    <View style={[styles.container, {marginVertical: marginVertical}]}>
      <Text
        style={[
          appStyle.text14,
          styles.textLeft,
          {color: colorLeft},
          styleTextLeft,
        ]}>
        {titleLeft}
      </Text>

      {textRightBold ? (
        <View>
          <Text
            style={[
              appStyle.text14,
              styles.textRight,
              {color: colorRight},
              styleTextRight,
            ]}>
            <TextViewBold boldTexts={textRightBold} text={textRight} />
          </Text>
        </View>
      ) : (
        <Text
          style={[
            appStyle.text14,
            styles.textRight,
            {color: colorRight},
            styleTextRight,
          ]}>
          {textRight}
        </Text>
      )}
    </View>
  );
};

export default TextRowBtw;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textLeft: {},
  textRight: {},
});
