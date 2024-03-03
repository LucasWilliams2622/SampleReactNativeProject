import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from 'src/redux/hook';

const Profile = () => {
  const navigation = useNavigation();
  const isSignIn = useAppSelector(state => state.auth.isSignIn);
  console.log(isSignIn);

  return (
    <View>
      <AppButton
        onPress={() => {
          navigation.navigate('DetailProfile');
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
