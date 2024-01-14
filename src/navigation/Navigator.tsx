import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {navigationRef} from './RootNavigagtion';
import Toast from 'react-native-toast-message';
import {toastConfig} from 'src/configs/ToastConfig';

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
      <Toast
        ref={ref => Toast.setRef(ref)}
        config={toastConfig}
        position="top"
      />
    </NavigationContainer>
  );
}
