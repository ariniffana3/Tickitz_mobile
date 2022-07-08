import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  splash__background: {
    height: '100%',
    width: '100%',
  },
  splash__overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(43, 21, 107, 0.8)',
    width: '100%',
    height: '100%',
  },
  splash__logo: {
    position: 'absolute',
    maxWidth: 200,
    height: 75,
  },
  splash__container__logo: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
});
