import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

function LoginScreen(props) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleSubmit = async () => {
    // try {
    console.log(form);
    const resultLogin = await axios
      .post('auth/login', form)
      .then(async res => {
        setIsError(false);
        setMessage(resultLogin.data.msg);
        await AsyncStorage.setItem('token', resultLogin.data.data.token);
        await AsyncStorage.setItem(
          'refreshToken',
          resultLogin.data.data.refreshToken,
        );
        await AsyncStorage.setItem(
          'idUser',
          JSON.stringify(resultLogin.data.data.id),
        );
        props.navigation.navigate('AppScreen', {screen: 'Home'});
      })
      .catch(error => {
        console.log(error);
        setIsError(true);
        setMessage(error.response);
        setForm({
          email: '',
          password: '',
        });
      });
    // } catch (error) {
    //   console.log(error);
    //   setIsError(true);
    //   setMessage(error.response.data.msg);
    //   setForm({
    //     email: '',
    //     password: '',
    //   });
    // }
  };
  const signUp = () => {
    props.navigation.navigate('SignUp');
  };
  const ResetPass = () => {
    props.navigation.navigate('ResetPass');
  };
  return (
    <View>
      <View styles={styles.body}>
        <View styles={styles.main}>
          <View styles={styles.main__container}>
            <View styles={styles.main__container__img}>
              <Image
                source={{uri: '/img/signUp/Mask Group.png'}}
                styles={styles.main__container__img__background}
                alt="images"
              />
              <View styles={styles.main__container__img__overlay}>
                <Image
                  source={{uri: '/img/signUp/tickitz 1.png'}}
                  alt="tickitz"
                  styles={styles.main__container__img__title}
                />
                <Text styles={styles.main__container__img__desc}>
                  wait, watch, wow!
                </Text>
              </View>
            </View>
            <View styles={styles.main__container__form}>
              <View>
                <Image
                  source={{uri: '/img/Home/vector tickitz 2.png'}}
                  alt="tickitz"
                  styles={styles.main__container__form__title__mobile}
                />
                <Text>Sign In</Text>
                <Text>
                  Sign in with your data that you entered during your
                  registration
                </Text>

                <View>
                  <Text>Email address</Text>
                  <TextInput
                    onChangeText={text => handleChangeForm(text, 'email')}
                    styles={styles.form__control}
                    placeholder="Write your email"
                    required
                  />
                </View>
                <View>
                  <Text for="exampleInputPassword1">Password</Text>
                  <View styles={styles.form__control__container__password}>
                    <TextInput
                      onChangeText={text => handleChangeForm(text, 'password')}
                      styles={` ${styles.form__control} ${styles.form__control__password}`}
                      placeholder="Write your password"
                      required
                      secureTextEntry={true}
                    />

                    <View styles={styles.form__img}>
                      <Image
                        source={{uri: '/img/signUp/eye 1.png'}}
                        alt="show"
                        id="image"
                      />
                    </View>
                  </View>
                </View>

                <Button
                  styles={styles.form__control__button}
                  onPress={handleSubmit}
                  title=" Sign In"
                />
                <Text>
                  Forgot your password ?{' '}
                  <Text onPress={ResetPass}>Reset now</Text>
                </Text>
                <Text>
                  Don't have an account ? <Text onPress={signUp}>Sign Up</Text>
                </Text>

                {/* {!message ? null : isError ? (
                  <View>{message}</View>
                ) : (
                  <View>{message}</View>
                )} */}
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
