import React from 'react';
import SCENES from '../lib/Scenes';
import sceneTransitionFade from '../lib/sceneTransitionsFade';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const stackOptions = { cardStyleInterpolator: sceneTransitionFade };

const SceneManager = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={SCENES[0].name} screenOptions={{ headerShown: false }}>
      {SCENES.map(({ name, component }) => (
        <Stack.Screen key={`scene-${name}-key`} name={name} component={component} options={stackOptions} />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default SceneManager;