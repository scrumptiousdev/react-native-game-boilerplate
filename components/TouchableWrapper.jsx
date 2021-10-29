import React from 'react';
import styles from '../styles/touchablewrapper.style';
import { TouchableWithoutFeedback, View } from 'react-native';

const TouchableWrapper = ({ onPress, children }) => (
  <TouchableWithoutFeedback
    style={styles.touchableWrapper}
    onPress={() => onPress()}
  >
    <View style={styles.touchableWrapperHelper}>
      {children}
    </View>
  </TouchableWithoutFeedback>
);

export default TouchableWrapper;