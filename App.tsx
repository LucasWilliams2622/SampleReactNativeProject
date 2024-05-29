// import React from 'react';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/es/integration/react';
// import store, {persitor} from './src/redux/store';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import Navigator from './src/navigation/Navigator';
// import {LogBox} from 'react-native';
// LogBox.ignoreLogs(['Require cycle:']);
// const App = () => {
//   return (
//     <GestureHandlerRootView style={{flex: 1}}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persitor}>
//           <Navigator />
//         </PersistGate>
//       </Provider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;
import React, {useEffect, useState} from 'react';
import {Button, View, Text} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

const rnBiometrics = new ReactNativeBiometrics();

const App = () => {
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    rnBiometrics
      .isSensorAvailable()
      .then(resultObject => {
        const {available, biometryType} = resultObject;

        if (available && biometryType) {
          setBiometryType(biometryType);
        } else {
          setBiometryType(null);
        }
      })
      .catch(() => {
        setBiometryType(null);
      });
  }, []);

  const authenticate = () => {
    rnBiometrics
      .simplePrompt({promptMessage: 'Confirm fingerprint'})
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log('successful biometrics provided');
        } else {
          console.log('user cancelled biometric prompt');
        }
      })
      .catch(() => {
        console.log('biometrics failed');
      });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        {biometryType
          ? `Biometric Authentication (${biometryType}) available`
          : 'Biometric Authentication not available'}
      </Text>
      {biometryType && <Button title="Authenticate" onPress={authenticate} />}
    </View>
  );
};

export default App;
