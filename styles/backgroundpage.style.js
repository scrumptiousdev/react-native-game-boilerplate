import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageBackgroundOpacity: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%'
  }
});

export default styles;