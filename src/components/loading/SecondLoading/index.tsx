import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  SkypeIndicator,
} from 'react-native-indicators';
import {colors} from 'src/styles/colors';
import {appStyle, isTablet, windowHeight, windowWidth} from 'src/styles/appStyle';
import {fonts} from 'src/assets/fonts/fonts';
import {squareImageSize} from 'src/utils';
type LoadingProps = {
  type?:
    | 'BallIndicator'
    | 'BarIndicator'
    | 'MaterialIndicator'
    | 'SkypeIndicator';
  visible?: boolean;
  size?: number;
};
const SecondLoading = ({
  visible = false,
  size = isTablet ? squareImageSize(0.15) : squareImageSize(0.12),
  type = 'SkypeIndicator',
}: LoadingProps) => {
  const loading = {
    BallIndicator: <BallIndicator color={colors.primary} size={size} />,
    BarIndicator: <BarIndicator color={colors.primary} size={size} />,
    MaterialIndicator: <MaterialIndicator color={colors.primary} size={size} />,
    SkypeIndicator: <SkypeIndicator color={colors.primary} size={size} />,
  };

  return !visible ? (
    <></>
  ) : (
    <View style={styles.container}>
      <View style={styles.boxLoading}>
        <View
          style={{
            width: squareImageSize(0.2),
            height: squareImageSize(0.2),
          }}>
          {loading[type]}
        </View>
        <Text style={[appStyle.text18SemiBold, styles.textLoading]}>
          Vui lòng chờ ...
        </Text>
      </View>
    </View>
  );
};

export default SecondLoading;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  boxLoading: {
    width: isTablet ? '30%' : '60%',
    paddingVertical: isTablet ? windowHeight * 0.02 : windowHeight * 0.02,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 9,

    borderRadius: isTablet ? 24 : 16,
    ...{top: isTablet ? windowHeight / 5 : null},
  },
  textLoading: {
    color: colors.primary,
    marginTop: windowHeight * 0.01,
  },
});
