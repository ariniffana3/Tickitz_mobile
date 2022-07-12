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
import {dataUser} from '../../stores/actions/profile';
import {booking} from '../../stores/actions/booking';
import moment from 'moment';
import History from '../../component/History';

function Profile(props) {
  const [dataUserStorage, setDataUserStorage] = useState([]);
  // const [user, setUser] = useState(useSelector(state => state.profile));
  const dispatch = useDispatch();
  const [isHistory, setIsHistory] = useState(false);
  const [dataHistory, setDatahistory] = useState([]);
  let user = useSelector(state => state.profile);
  user = user.data[0];
  const [form, setForm] = useState({...user});
  const [tempForm, setTempForm] = useState({...user});
  const [formPassword, setFormPassword] = useState({});

  useEffect(() => {
    getdataUser();
  }, []);

  const getdataUser = async () => {
    try {
      const idUser = await AsyncStorage.getItem('idUser');
      await dispatch(dataUser(idUser));
    } catch (error) {
      console.log(error.response);
    }
  };
  const handleUpdateProfile = async event => {
    try {
      event.persist();
      // event.preventDefault();
      // event.stopPropagation();
      let idUser = await AsyncStorage.getItem('idUser');
      idUser = JSON.parse(idUser);
      // const form2 = {
      //   firstName: 'arincoba2',
      //   lastName: 'iffanaCoba2',
      // };
      await setForm({...tempForm});
      const result = await axios.patch(`user/profile/${idUser}`, form);
      getdataUser();
      // user = result.data
    } catch (error) {
      console.log(error.response);
      alert('Failed to Update');
    }
  };

  const handleAccount = async event => {
    event.persist();
    // const {eventCount, target, text} = event.nativeEvent;
    // console.log(eventCount, target, text);
    await setTempForm({...tempForm, [event.target.name]: event.target.value});
    console.log(event.target.value);
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
                    user
                      ? user.image
                        ? `https://res.cloudinary.com/dabzupph0/image/upload/v1650965669/${user.image}`
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
                {user ? `${user.firstName} ${user.lastName}` : ''}
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
                    onChange={async (text, event) => {
                      try {
                        event.persist();
                        await setTempForm({
                          ...tempForm,
                          firstName: text,
                        });
                        console.log(text, tempForm);
                      } catch (error) {
                        console.log(error);
                      }
                    }}
                    // onChange={handleAccount}
                    defaultValue={`${user ? user.firstName : ''}`}
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
                    onChange={async text => {
                      await setTempForm({
                        ...tempForm,
                        lastName: text,
                      });
                    }}
                    name="lastName"
                    // onChange={handleAccount}
                    defaultValue={`${user ? user.lastName : ''}`}
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
                    onChange={text => {
                      setTempForm({
                        ...tempForm,
                        email: text,
                      });
                    }}
                    defaultValue={`${user ? user.email : ''}`}
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
                    {/* </View> */}
                    <TextInput
                      type="tel"
                      style={styles.form__control__telp}
                      id="exampleInputPhone1"
                      onChange={async text => {
                        await setTempForm({
                          ...tempForm,
                          noTelp: text,
                        });
                      }}
                      name="noTelp"
                      // onChange={handleAccount}
                      defaultValue={`${user ? user.noTelp : ''}`}
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
                    onChange={text => {
                      setFormPassword({...form, newPassword: text});
                    }}
                    placeholder="type new password"
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
                    onChange={text => {
                      setForm({...form, confirmPassword: text});
                    }}
                    placeholder="type confirm password"
                  />
                </View>
                <View>
                  <Button title="update password" color="#5F2EEA" />
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
