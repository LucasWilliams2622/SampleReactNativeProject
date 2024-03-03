import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {appStyle} from 'src/styles/appStyle';
import AppButton from 'src/components/buttons/AppButton';
import {useAppDispatch} from 'src/redux/hook';
import {setIsSignIn} from 'src/redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    try {
      dispatch(setIsSignIn(true));
      navigation.navigate('TabNavigator')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={appStyle.container}>
      <AppButton title="Đăng nhập" onPress={() => handleLogin()} />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({});
