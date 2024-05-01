import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from 'src/redux/hook';
import {setIsSignIn} from 'src/redux/slices/authSlice';
import {observer} from 'mobx-react';
import {observable, reaction} from 'mobx';
import {Button} from 'react-native';

// Tạo một biến observable sử dụng MobX
const appState = observable({
  count: 0,
});

// Tạo một phản ứng để hiển thị thông báo khi giá trị count thay đổi
reaction(
  () => appState.count,
  (count, reaction) => {
    alert(`Giá trị của biến count là: ${count}`);
  },
);

const Profile = () => {
  const navigation = useNavigation();
  const isSignIn = useAppSelector(state => state.auth.isSignIn);
  console.log(isSignIn);
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    appState.count = count + 1;
  };
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
      <Text>Số lần nhấn: {count}</Text>
      <Button title="Tăng số lần nhấn" onPress={increaseCount} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
