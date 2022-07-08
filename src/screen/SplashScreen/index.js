import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

function SplashScreen(props) {
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');

    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
  };
  return (
    <View>
      <Image
        style={styles.splash__background}
        source={require('../../assets/img/signUp/Mask_Group.png')}
      />
      <View style={styles.splash__overlay} />
      <View style={styles.splash__container__logo}>
        <Image
          style={styles.splash__logo}
          source={require('../../assets/img/signUp/tickitz_1.png')}
        />
      </View>
    </View>
  );
}
export default SplashScreen;
