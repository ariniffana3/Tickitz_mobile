import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';
import Footer from '../../component/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ActionSheetIOS,
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import getDataUser from '../../stores/actions/profile';
import History from '../../component/History';

function Profile(props) {
  const dispatch = useDispatch();
  const [isHistory, setIsHistory] = useState(false);
  const [dataHistory, setDatahistory] = useState([]);
  const dataUser = useSelector(state => state.profile.data[0]);
  const [form, setForm] = useState({...dataUser});
  const [formPassword, setFormPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    getdataUser();
  }, []);

  const getdataUser = async () => {
    try {
      console.log('get data user id');
      const idUser = await AsyncStorage.getItem('idUser');
      const result = await dispatch(getDataUser(idUser));
      console.log('result', result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProfile = async event => {
    try {
      let idUser = await AsyncStorage.getItem('idUser');
      idUser = JSON.parse(idUser);
      const result = await axios.patch(`user/profile/${idUser}`, form);
      await getdataUser();
      alert('Success Update');
    } catch (error) {
      console.log(error);
      alert('Failed to Update');
    }
  };

  const handleUpdatePassword = async event => {
    try {
      console.log(formPassword);
      let idUser = await AsyncStorage.getItem('idUser');
      idUser = JSON.parse(idUser);
      const result = await axios.patch(`user/password/${idUser}`, formPassword);
      alert('Password Updated');
    } catch (error) {
      console.log(error.response.data.msg);
      alert(`Failed to Update Password ${error.response.data.msg}`);
    }
  };

  const handleAccount = async (text, name) => {
    await setForm({...form, [name]: text});
  };
  const handlePassword = async (text, name) => {
    await setFormPassword({...formPassword, [name]: text});
  };
  const handleTicket = data => {
    props.navigation.navigate('Ticket');
  };

  return (
    <ScrollView>
      <View style={styles.profile__container}>
        <View style={styles.profile__title}>
          <Text onPress={() => setIsHistory(false)}>Details Account</Text>
          <Text
            style={styles.profile__title__history}
            onPress={() => setIsHistory(true)}>
            Order History
          </Text>
        </View>
        {isHistory ? (
          <View>
            <FlatList
              data={dataHistory}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <History data={item} handleTicket={handleTicket} />
              )}
            />
          </View>
        ) : (
          <View>
            <View style={styles.profile__photo}>
              <Text style={{fontSize: 20}}>INFO</Text>
              <Image
                source={{
                  uri: `${
                    dataUser
                      ? dataUser.image
                        ? `https://res.cloudinary.com/dabzupph0/image/upload/v1650965669/${dataUser.image}`
                        : 'https://www.iconsdb.com/icons/preview/gray/user-4-xxl.png'
                      : 'https://www.iconsdb.com/icons/preview/gray/user-4-xxl.png'
                  }`,
                }}
                style={{
                  width: 60,
                  height: 60,
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  borderRadius: 30,
                }}
              />
              <Text style={styles.profile__photo__name}>
                {dataUser ? `${dataUser.firstName} ${dataUser.lastName}` : ''}
              </Text>
              <View style={styles.profile__photo__button}>
                <Button
                  title="Change Photo"
                  color="#5F2EEA"
                  style={{width: 150}}
                />
                <Button
                  title="Delete Photo"
                  color="#5F2EEA"
                  style={{width: 150}}
                />
              </View>
            </View>
            <View style={styles.profile__account}>
              <Text style={styles.profile__account__h3}>
                Details Information
              </Text>
              <View style={styles.profile__account__container}>
                <View style={styles.mb_3}>
                  <Text for="exampleInputFirstName1" style={'form-label'}>
                    First Name
                  </Text>
                  <TextInput
                    type="text"
                    name="firstName"
                    style={styles.profile__account__input}
                    id="exampleInputFirstName1"
                    onChangeText={text => handleAccount(text, 'firstName')}
                    defaultValue={`${dataUser ? dataUser.firstName : ''}`}
                  />
                </View>
                <View style={styles.mb_3}>
                  <Text for="exampleInputFirstName1" style={'form-label'}>
                    Last Name
                  </Text>
                  <TextInput
                    type="text"
                    style={styles.profile__account__input}
                    id="exampleInputFirstName1"
                    onChangeText={text => handleAccount(text, 'lastName')}
                    name="lastName"
                    defaultValue={`${dataUser ? dataUser.lastName : ''}`}
                  />
                </View>
                <View style={styles.mb_3}>
                  <Text for="exampleInputEmail1" style={'form-label'}>
                    Email address
                  </Text>
                  <TextInput
                    type="email"
                    keyboardType="email-address"
                    style={styles.profile__account__input}
                    id="exampleInputEmail1"
                    defaultValue={`${dataUser ? dataUser.email : ''}`}
                    editable={false}
                  />
                </View>
                <View style={styles.mb_3}>
                  <Text for="exampleInputPhone1" style={'form-label'}>
                    Phone Number
                  </Text>
                  <View style={styles.input__group}>
                    {/* <View style={'input-group-text'} id="addon-wrapping"> */}
                    <Text>+62 </Text>
                    <TextInput
                      type="tel"
                      style={styles.form__control__telp}
                      id="exampleInputPhone1"
                      onChangeText={text => handleAccount(text, 'noTelp')}
                      name="noTelp"
                      defaultValue={`${dataUser ? dataUser.noTelp : ''}`}
                      aria-describedby="addon-wrapping"
                      keyboardType="phone-pad"
                    />
                  </View>
                </View>
                <View>
                  <Button
                    title="update profile"
                    onPress={handleUpdateProfile}
                    color="#5F2EEA"
                  />
                </View>
              </View>
            </View>
            <View style={styles.profile__password}>
              <Text style={styles.profile__password__h3}>
                Account and Privacy
              </Text>
              <View style={styles.profile__password__container}>
                <View style={styles.mb_3}>
                  <Text for="exampleInputFirstName1" style={'form-label'}>
                    New Password
                  </Text>
                  <TextInput
                    type="text"
                    style={styles.profile__password__input}
                    id="exampleInputFirstName1"
                    onChangeText={text => {
                      handlePassword(text, 'newPassword');
                    }}
                    placeholder="type new password"
                    secureTextEntry={true}
                  />
                </View>
                <View style={styles.mb_3}>
                  <Text for="exampleInputEmail1" style={'form-label'}>
                    Confirm
                  </Text>
                  <TextInput
                    type="email"
                    style={styles.profile__password__input}
                    id="exampleInputEmail1"
                    onChangeText={text => {
                      handlePassword(text, 'confirmPassword');
                    }}
                    secureTextEntry={true}
                    placeholder="type confirm password"
                  />
                </View>
                <View>
                  <Button
                    title="update password"
                    color="#5F2EEA"
                    onPress={handleUpdatePassword}
                  />
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Profile;
