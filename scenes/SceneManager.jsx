import React from 'react';
import SceneHome from './sceneHome';
import SceneGame from './sceneGame';
import SceneSplash from './sceneSplash';
import SceneLoading from './sceneLoading';
import sceneTransitionFade from '../lib/sceneTransitionsFade';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const stackOptions = { cardStyleInterpolator: sceneTransitionFade };

const SceneManager = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={SceneSplash} options={stackOptions} />
      <Stack.Screen name='Loading' component={SceneLoading} options={stackOptions} />
      <Stack.Screen name='Home' component={SceneHome} options={stackOptions} />
      <Stack.Screen name='Game' component={SceneGame} options={stackOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SceneManager;