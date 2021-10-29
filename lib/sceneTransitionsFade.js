import { Animated } from 'react-native';

const sceneTransitionFade = ({ current, next }) => {
  const opacity = Animated.add(current.progress, next ? next.progress : 0).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  });
  
  return { cardStyle: { opacity } };
};

export default sceneTransitionFade;