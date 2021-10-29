import React, { useCallback } from 'react';
import Scene from '../components/Scene';
import { Text, Image } from 'react-native';
import styles from '../styles/scenesplash.style';
import { useFocusEffect } from '@react-navigation/native';
import TouchableWrapper from '../components/TouchableWrapper';

const SceneSplash = ({ navigation }) => {
  const skipSplash = () => navigation.navigate('Home');

  useFocusEffect(useCallback(() => {
    const finishSplash = setTimeout(() => {
      navigation.navigate('Home');
    }, 3000);

    return () => clearTimeout(finishSplash);
  }, []));

  return (
    <TouchableWrapper onPress={skipSplash}>
      <Scene>
        <Text>
          <Image style={styles.logo} source={require('../assets/splash.png')} />
        </Text>
      </Scene>
    </TouchableWrapper>
  );
};

export default SceneSplash;