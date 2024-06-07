import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'src/redux/hook';
import {setIsSignIn} from 'src/redux/slices/authSlice';

const Profile = () => {
  const navigation = useNavigation();
  const isSignIn = useAppSelector(state => state.auth.isSignIn);
  console.log(isSignIn);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(setIsSignIn(false));
    navigation.navigate('Login');
  };
  return (
    <View>
      <AppButton
        title="Detail"
        onPress={() => {
          navigation.navigate('DetailProfile');
        }}
      />
      <AppButton
        title="Logout"
        onPress={() => {
          handleLogout();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
