import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from 'src/components/headers/AppHeader';
import {appStyle} from 'src/styles/appStyle';
const Home = () => {
  return (
    <SafeAreaView style={appStyle.container}>
      <AppHeader />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
