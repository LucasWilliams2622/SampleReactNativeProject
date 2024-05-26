import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppDateTimePicker from 'src/components/picker/AppDatePicker';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RTNMyBiometric from 'rtn-my-biometric/js/NativeMyBiometric';
import {SafeAreaView} from 'react-native';

const Notification = () => {
  const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';

  const [biometric, setBiometric] = useState('');

  const backgroundStyle = {
    backgroundColor: !isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <Text>Notification</Text>
      <AppDateTimePicker />
      <AppButton
        title="Range Slider"
        onPress={() => navigation.navigate('RangeSliderScreen')}
      />
      <AppButton
        title="CountDown"
        onPress={() => navigation.navigate('CountDown')}
      />
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <TouchableOpacity
        onPress={async () => {
          try {
            const data = await RTNMyBiometric?.getAvailableBiometric()!;
            console.log(data);
            setBiometric(data ?? '');
          } catch (e) {
            console.log(e);
          }
        }}>
        <Text>Get available biometricss</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={async () => {
          try {
            const isAuthenticated = await RTNMyBiometric?.authenticate();
            console.log('ISAuthenticated', isAuthenticated);
          } catch (e) {
            console.log(e);
          }
        }}>
        <Text>Authenticate Locally using biometric</Text>
      </TouchableOpacity>
      <Text>Biometrics are: {biometric}</Text>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({});
