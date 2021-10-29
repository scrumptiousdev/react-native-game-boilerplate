import React from 'react';
import { View } from 'react-native';
import styles from '../styles/scene.style';

const Scene = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

export default Scene;