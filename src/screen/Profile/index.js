import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';
import Footer from '../../component/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';
import {dataUser} from '../../stores/actions/profile';
import {booking} from '../../stores/actions/booking';
import moment from 'moment';

function Profile(props) {
  const [dataUserStorage, setDataUserStorage] = useState([]);
  const [dataOrder, setDataOrder] = useState(props.route.params);
  console.log(JSON.stringify(dataOrder));
  let user = useSelector(state => state.profile);
  user = user.data[0];
  const dispatch = useDispatch();

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

  const handleOrder = async () => {
    try {
      const idUser = await AsyncStorage.getItem('idUser');
      const data = {
        userId: idUser.split('')[1],
        scheduleId: dataOrder.scheduleId,
        dateBooking: moment(new Date()).format('L'),
        timeBooking: dataOrder.time,
        paymentMethod: 'default',
        totalPayment: dataOrder.totalPrice,
        seat: dataOrder.seat,
      };
      await dispatch(booking(data));
      // if (!dataBooking.isLoading) {
      //   if (dataBooking.isError) {
      //     alert('Failed to process');
      //   } else {
      //     props.navigation.navigate('Midtrans');
      //   }
      // }
      // const result = await axios
      //   .post('booking', dataOrder)
      //   .catch(error => console.log(error.response));

      props.navigation.navigate('Midtrans');
    } catch (error) {
      console.log(error);
      alert('Failed to process');
    }
  };

  return (
    <ScrollView>
      <View style={styles.payment__main}>
        <View style={styles.main__info__price}>
          <Text>Details Account</Text>
          <Text style={styles.main__info__price__h4}>Order History</Text>
        </View>
        <View>
          <Text>INFO</Text>
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
            style={{width: 40, height: 40}}
          />
          <Text>{user ? `${user.firstName} ${user.lastName}` : ''}</Text>
          <Button title="Change Photo" color="#5F2EEA" />
          <Button title="Delete Photo" color="#5F2EEA" />
        </View>
        <View style={styles.main__personal}>
          <Text style={styles.main__personal__h3}>Details Information</Text>
          <View style={styles.main__personal__container}>
            <View style={styles.mb_3}>
              <Text for="exampleInputFirstName1" style={'form-label'}>
                Full Name
              </Text>
              <TextInput
                type="text"
                style={`form-control ${styles.main__personal__input}`}
                id="exampleInputFirstName1"
                value={`${user ? user.firstName : ''}  ${
                  user ? user.lastName : ''
                }`}
              />
            </View>
            <View style={styles.mb_3}>
              <Text for="exampleInputEmail1" style={'form-label'}>
                Email address
              </Text>
              <TextInput
                type="email"
                style={`form-control ${styles.main__personal__input}`}
                id="exampleInputEmail1"
                value={`${user ? user.email : ''}`}
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
                  style={`form-control ${styles.form__control__telp}`}
                  id="exampleInputPhone1"
                  value={`${user ? user.noTelp : ''}`}
                  aria-describedby="addon-wrapping"
                />
              </View>
            </View>
            <View>
              <Button title="update profile" color="#5F2EEA" />
            </View>
          </View>
        </View>
        <View style={styles.main__personal}>
          <Text style={styles.main__personal__h3}>Account and Privacy</Text>
          <View style={styles.main__personal__container}>
            <View style={styles.mb_3}>
              <Text for="exampleInputFirstName1" style={'form-label'}>
                Full Name
              </Text>
              <TextInput
                type="text"
                style={`form-control ${styles.main__personal__input}`}
                id="exampleInputFirstName1"
                value={`${user ? user.firstName : ''}  ${
                  user ? user.lastName : ''
                }`}
              />
            </View>
            <View style={styles.mb_3}>
              <Text for="exampleInputEmail1" style={'form-label'}>
                Email address
              </Text>
              <TextInput
                type="email"
                style={`form-control ${styles.main__personal__input}`}
                id="exampleInputEmail1"
                value={`${user ? user.email : ''}`}
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
                  style={`form-control ${styles.form__control__telp}`}
                  id="exampleInputPhone1"
                  value={`${user ? user.noTelp : ''}`}
                  aria-describedby="addon-wrapping"
                />
              </View>
            </View>
            <View>
              <Button title="update profile" color="#5F2EEA" />
            </View>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Profile;
