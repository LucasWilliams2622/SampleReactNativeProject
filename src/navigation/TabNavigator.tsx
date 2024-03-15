import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Text, View } from 'react-native';
import { icons } from 'src/assets/icons/icons';
import { colors } from 'src/styles/colors';
import * as Animatable from 'react-native-animatable';
import Home from 'src/screens/MainScreen/Home';
import Profile from 'src/screens/MainScreen/Profile';
import Notification from 'src/screens/MainScreen/Notification';
import { fonts } from 'src/assets/fonts/fonts';
import Map from 'src/screens/MainScreen/Map';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let label = '';
          if (route.name === 'Home') {
            iconName = focused ? icons.home : icons.homeo;
            label = 'Home';
          } else if (route.name === 'Notification') {
            iconName = focused ? icons.notification : icons.notificationo;
            label = 'Notification';
          } else if (route.name === 'Profile') {
            iconName = focused ? icons.user : icons.usero;
            label = 'Profile';
          }else if (route.name === 'Map') {
            iconName = focused ? icons.map : icons.map;
            label = 'Map';
          }
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
              }}>
              <Animatable.View animation="zoomIn" duration={2000}>
                <Image
                  source={iconName}
                  style={{
                    width: focused ? 28 : 24,
                    height: focused ? 28 : 24,
                    resizeMode: 'stretch',
                    tintColor: focused ? colors.active : colors.inactive,
                  }}
                />
              </Animatable.View>
              <Text
                style={{
                  fontSize: focused ? 10 : 10,
                  fontFamily: focused ? fonts.SemiBold : fonts.Medium,
                  marginTop: 4,
                  color: focused ? colors.active : colors.inactive,
                }}>
                {label}
              </Text>
            </View>
          );
        },

        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 65,
          position: 'absolute',
          backgroundColor: colors.background,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Map" component={Map} />

    </Tab.Navigator>
  );
}
