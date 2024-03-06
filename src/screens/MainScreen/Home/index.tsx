import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppHeader from 'src/components/headers/AppHeader';
import {appStyle} from 'src/styles/appStyle';
import { SVGS } from 'src/assets/svgs';
const Home = () => {
  return (
    <SafeAreaView style={appStyle.container}>
      <Image
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
        }}
        style={{width: 100, height: 100}}
      />
      <SVGS.HouseMoney width={200} height={200} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
