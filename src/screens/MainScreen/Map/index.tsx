import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from 'src/components/Container';
import AppHeader from 'src/components/headers/AppHeader';
import AppButton from 'src/components/buttons/AppButton';
import { useNavigation } from '@react-navigation/native';

const Map = () => {
  const navigation = useNavigation()
  return (
    <Container>
      <AppHeader title="Map" />
      <AppButton title='Click' onPress={()=>navigation.navigate('LocationPicker')}/>
    </Container>
  );
};

export default Map;

const styles = StyleSheet.create({});
