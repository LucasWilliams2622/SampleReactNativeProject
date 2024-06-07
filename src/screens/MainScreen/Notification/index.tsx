import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppButton from 'src/components/buttons/AppButton';
import {useNavigation} from '@react-navigation/native';
import AppDateTimePicker from 'src/components/picker/AppDatePicker';

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View>
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
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({});
