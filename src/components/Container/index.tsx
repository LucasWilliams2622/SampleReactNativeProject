import React, {ReactNode} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {appStyle} from 'src/styles/appStyle';

interface Props {
  children: ReactNode;
  isScroll?: boolean;
}

const Container = (props: Props) => {
  const {children, isScroll} = props;

  return (
    <SafeAreaView style={[appStyle.container]}>
      {isScroll ? (
        <ScrollView style={{flex: 1}}>{children}</ScrollView>
      ) : (
        <View style={{flex: 1}}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default Container;
