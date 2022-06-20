import React, {useState} from 'react';
import {View, Text, Image, Button, ScrollView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

function SignUp(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChangeForm = (text, name) => {
    setForm({...form, [name]: text});
  };

  const handleSubmit = async () => {
    try {
      console.log(form);
      const resultLogin = await axios.post('auth/register', form);
      // .then(async res => {
      setIsError(false);
      setMessage(resultLogin.data.msg);
      props.navigation.navigate('AppScreen', {screen: 'Home'});
      // })
      // .catch(error => {
      // });
    } catch (error) {
      console.log(error);
      setIsError(true);
      setMessage(error.response.data.msg);
      console.log(message);
    }
  };

  const Login = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };
  return (
    <ScrollView>
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
                <Text style={styles.main__container__form__h1}>Sign Up</Text>
                <Text style={styles.main__container__form__h2}>
                  Fill your additional details
                </Text>
                <View style={styles.form}>
                  <View>
                    <Text style={styles.form}>First Name</Text>
                    <TextInput
                      onChangeText={text => handleChangeForm(text, 'firstName')}
                      style={styles.form__control}
                      placeholder="Write your First Name"
                      required
                    />
                  </View>
                  <View>
                    <Text style={styles.form}>Last Name</Text>
                    <TextInput
                      onChangeText={text => handleChangeForm(text, 'lastName')}
                      style={styles.form__control}
                      placeholder="Write your Last Name"
                      required
                    />
                  </View>
                  <View>
                    <Text style={styles.form}>Phone Number</Text>
                    <TextInput
                      onChangeText={text =>
                        handleChangeForm(text, 'phoneNumber')
                      }
                      style={styles.form__control}
                      placeholder="Write your Phone Number"
                      required
                    />
                  </View>
                  <View>
                    <Text style={styles.form}>Email</Text>
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
                  Already have account ?
                  <Text onPress={Login} style={styles.text__reset__link}>
                    Sign In
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default SignUp;
