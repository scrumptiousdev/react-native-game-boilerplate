import Scene from '../components/Scene';
import styles from '../styles/scenesplash.style';
import { Text, Image, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useRef, useEffect } from 'react';
import TouchableWrapper from '../components/TouchableWrapper';
import { SCENE_SPLASH_FADE_DURATION } from '../lib/Constants';

const SceneSplash = ({ navigation }) => {
  const skipSplash = () => navigation.navigate('Home');
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: SCENE_SPLASH_FADE_DURATION,
      useNativeDriver: true
    }).start();
  }, [fadeAnim]);

  useFocusEffect(useCallback(() => {
    const finishSplash = setTimeout(() => {
      navigation.navigate('Home');
    }, SCENE_SPLASH_FADE_DURATION + 1000);

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