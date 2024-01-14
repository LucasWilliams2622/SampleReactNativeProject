import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';
import HomeScreen from 'src/screens/MainScreen/HomeScreen';
import Login from 'src/screens/AuthScreen/Login';
import {authRoutes, linkRoutes, mainRoutes} from './routes';
import {useAppSelector} from 'src/redux/hook';

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
      initialRouteName={
        isSignIn
          ? userInfo.role === 'user'
            ? 'HomeLink'
            : 'HomeScreen'
          : 'Login'
      }>
      <>
        {/* {!isSignIn ? (
          <> */}
        <Stack.Screen name="Login" component={Login} />
        {Object.entries(authRoutes).map(([name, component], index) => {
          return <Stack.Screen name={name} component={component} key={name} />;
        })}
        {/* {Object.entries(linkRoutes).map(([name, component], index) => {
          return <Stack.Screen name={name} component={component} key={name} />;
        })} */}
        {/* </>
        ) : (
          <> */}
        {/* {userInfo.role !== 'user' ? ( */}
        <Stack.Group>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          {Object.entries(mainRoutes).map(([name, component], index) => {
            return (
              <Stack.Screen name={name} component={component} key={name} />
            );
          })}
        </Stack.Group>
        {/* // ) : ( */}
        {/* <Stack.Group>
          {Object.entries(linkRoutes).map(([name, component], index) => {
            return (
              <Stack.Screen name={name} component={component} key={name} />
            );
          })}
        </Stack.Group> */}
        {/* // )} */}
        {/* // </> */}
        {/* // )} */}
      </>
    </Stack.Navigator>
  );
}
