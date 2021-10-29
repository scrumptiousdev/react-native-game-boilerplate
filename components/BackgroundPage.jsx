import React from 'react';
import Scene from './Scene';
import { ImageBackground } from 'react-native';
import styles from '../styles/backgroundpage.style.js';

const BackgroundPage = ({ background, opacity = 0, children }) => opacity ?
(
  <Scene>
    <ImageBackground source={background} style={[styles.imageBackgroundOpacity, { opacity }]} />
    {children}
  </Scene>
)
:
(
  <ImageBackground source={background} style={styles.imageBackground}>
    {children}
  </ImageBackground>
);

export default BackgroundPage;