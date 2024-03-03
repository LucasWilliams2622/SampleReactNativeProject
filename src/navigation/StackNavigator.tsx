import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import Login from 'src/screens/AuthScreen/Login';
import {authRoutes, linkRoutes, mainRoutes} from './routes';
import {useAppSelector} from 'src/redux/hook';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();
export default function StackNavigator() {
  // const { t } = useTranslation();
  // if (isLoading) {
  //     return <SplashScreen />;
  // }
  const {isSignIn} = useAppSelector(state => state.auth);
  const {userInfo} = useAppSelector(state => state.user);

  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerShadowVisible: false,
        headerTitleAlign: 'center',
        headerShown: false,
      }}
      initialRouteName={isSignIn ? 'TabNavigator' : 'Login'}>
      <>
        <Stack.Screen name="Login" component={Login} />
        {Object.entries(authRoutes).map(([name, component], index) => {
          return <Stack.Screen name={name} component={component} key={name} />;
        })}

        <Stack.Group>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          {Object.entries(mainRoutes).map(([name, component], index) => {
            return (
              <Stack.Screen name={name} component={component} key={name} />
            );
          })}
        </Stack.Group>
      </>
    </Stack.Navigator>
  );
}
