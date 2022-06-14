import React, {useState} from 'react';
import {View, Text, Image, Button} from 'react-native';
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
      <View style={styles.body}>
        <View style={styles.main}>
          <View style={styles.main__container}>
            <View style={styles.main__container__img}>
              <View style={styles.main__container__img__overlay}>
                <Image
                  source={{uri: '/img/signUp/tickitz 1.png'}}
                  alt="tickitz"
                  style={styles.main__container__img__title}
                />
              </View>
            </View>
            <View style={styles.main__container__form}>
              <View>
                <Image
                  source={{uri: '/img/Home/vector tickitz 2.png'}}
                  alt="tickitz"
                  style={styles.main__container__form__title__mobile}
                />
                <Text style={styles.main__container__form__h1}>Sign In</Text>
                <Text style={styles.main__container__form__h2}>
                  Sign in with your data that you entered during your
                  registration
                </Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.form}>Email address</Text>
                    <TextInput
                      onChangeText={text => handleChangeForm(text, 'email')}
                      style={styles.form__control}
                      placeholder="Write your email"
                      required
                    />
                  </View>
                  <View>
                    <Text style={styles.form}>Password</Text>
                    <View style={styles.form__control__container__password}>
                      <TextInput
                        onChangeText={text =>
                          handleChangeForm(text, 'password')
                        }
                        style={styles.form__control__password}
                        placeholder="Write your password"
                        required
                        secureTextEntry={true}
                      />

                      <View style={styles.form__img}>
                        <Image
                          source={{uri: '/img/signUp/eye 1.png'}}
                          alt="show"
                          id="image"
                        />
                      </View>
                    </View>
                  </View>

                  <Button
                    buttonStyle={styles.form__control__button}
                    onPress={handleSubmit}
                    title=" Sign In"
                    color="#5F2EEA"
                  />
                </View>

                <Text style={styles.text__reset}>
                  Forgot your password ?
                  <Text onPress={ResetPass} style={styles.text__reset__link}>
                    {' '}
                    Reset now
                  </Text>
                </Text>
                <Text style={styles.text__signUp}>
                  Don't have an account ?{' '}
                  <Text onPress={signUp} style={styles.text__signUp__link}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;
