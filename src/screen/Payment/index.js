import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';
import Footer from '../../component/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';
import dataUser from '../../stores/actions/profile';
import {booking} from '../../stores/actions/booking';
import moment from 'moment';

function Payment(props) {
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
          <Text>Total payment</Text>
          <Text style={styles.main__info__price__h4}>
            {dataOrder.totalPrice} IDR
          </Text>
        </View>
        <View style={styles.main__personal}>
          <Text style={styles.main__personal__h3}>Personal Info</Text>
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
                readOnly
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
                readOnly
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
                  disabled
                />
              </View>
            </View>
            <View style={styles.alert__warning}>
              <Image
                source={require('../../assets/img/Vector_(3).png')}
                alt=""
              />
              <Text> Fill your data correctly.</Text>
            </View>
          </View>
        </View>
        <View style={styles.main__button}>
          <Button
            onPress={handleOrder}
            title="Pay your order"
            color="#5F2EEA"
          />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Payment;
