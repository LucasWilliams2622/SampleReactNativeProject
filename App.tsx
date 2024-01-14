import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import store, {persitor} from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Navigator from './src/navigation/Navigator';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Require cycle:']);
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persitor}>
          <Navigator />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
