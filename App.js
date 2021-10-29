import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store, { persistor } from './store';
import SceneManager from './scenes/SceneManager';
import SceneLoading from './scenes/sceneLoading';
import { enableScreens } from 'react-native-screens';
import { PersistGate } from 'redux-persist/integration/react';

enableScreens();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<SceneLoading />} persistor={persistor}>
      <StatusBar hidden />
      <SceneManager />
    </PersistGate>
  </Provider>
);

export default App;