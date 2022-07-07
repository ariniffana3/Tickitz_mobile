import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';
import Footer from '../../component/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button, Image, ScrollView, Text, TextInput, View} from 'react-native';

function Payment(props) {
  const [dataUser, setDataUser] = useState([]);
  const [dataUserStorage, setDataUserStorage] = useState([]);
  const dataOrder = props.route.params;
  console.log(JSON.stringify(dataOrder));
  const user = useSelector(state => state.user);

  useEffect(() => {
    getdataUser();
  }, []);
  // useEffect(() => {
  //   getdataUser();
  // }, [state.userId]);
  // useEffect(() => {
  //   console.log("useEffect")
  // },[]);
  const getdata = async () => {
    try {
      // console.log('tess')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // const resultSchedule = await axios.get(`user/4`);
      // setDataUser(resultSchedule.data.data);
      console.log('error');
    } catch (error) {
      console.log(error.response);
    }
  };

  // const token = localStorage.getItem("token");
  // dataUserStorage = AsyncStorage.getItem('dataUser');
  // console.log(typeof dataUserStorage);
  // console.log(dataUserStorage.id);
  const getdataUser = async () => {
    try {
      // console.log('tess')
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      // const resultSchedule = await axios.get(`user/${dataUserStorage.id}`);
      // setDataUser(resultSchedule.data.data);
      //  console.log("error")
      // const resultSchedule = user;
      // setDataUser(user.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  // console.log(dataUser);

  const Home = () => {
    props.navigation.navigate('Home');
  };
  const handleOrder = async () => {
    try {
      // const result = await axios.post('booking', state);
      // props.navigation.navigate('Midtrans', {link: result.redirectUrl});
    } catch (error) {
      alert('Failed to Process');
    }
  };
  return (
    <ScrollView>
      <View style={styles.payment__main}>
        <View style={styles.main__info__price}>
          <Text>Total payment</Text>
          {/* <Text style={styles.main__info__price__h4}>{state.price} IDR</Text> */}
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
                value={`${dataUser.firstName}  ${dataUser.lastName}`}
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
                value={`${dataUser.email}`}
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
                  value={`${dataUser.noTelp}`}
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
          <Button onclick={handleOrder} title="Pay your order" />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}

export default Payment;
