import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import Seat from '../../component/Seat';
import Footer from '../../component/Footer';
import styles from './styles';

function Order(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);
  const [bookedSeat, setBookedSeat] = useState([]);
  // console.log(props.route.params, 'a');
  const state = props.route.params;
  // console.log(state, 'b');
  // console.log(bookedSeat);
  useEffect(() => {
    console.log('order screen');
    console.log(props.route.params);
  }, []);
  console.log(state);
  const handleSelectedSeat = data => {
    setBookedSeat([...bookedSeat, data]);
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
      setBookedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };
  const handleSelectSeat = seat => {
    setBookedSeat([...bookedSeat, seat]);
    // console.log(seat);
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== seat;
      });
      setSelectedSeat(deleteSeat);
      setBookedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };
  const Home = () => {
    props.navigation.navigate('Home');
  };
  const handleOrder = () => {
    props.navigation.navigate('Payment', {...state});
  };
  return (
    <ScrollView style={styles.order__main}>
      <View style={styles.main__container1}>
        <View style={styles.main__title}>
          <Text style={styles.order__main__h3}>Movie Selected</Text>
          <View style={styles.main__title__container}>
            <Text style={styles.order__main__h4}>
              {state ? state.movieName : 'Luca'}
            </Text>
            <Button onPress={Home} title="Change movie" />
          </View>
        </View>
        <View style={styles.main__seat}>
          <Text style={styles.order__main__h3}>Choose Your Seat</Text>
          <View style={styles.main__seat__container}>
            {/* <View style="main_seat_container">
              <p>screen</p>
            </View> */}
            <View style={`card ${styles.card}`}>
              <View style={styles.containerSeat}>
                <FlatList
                  data={listSeat}
                  keyExtractor={item => item}
                  renderItem={({item}) => (
                    <Seat
                      seatAlphabhet={item}
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      selectSeat={handleSelectedSeat}
                    />
                  )}
                />
              </View>
            </View>
            {/* <img src="/img/Untitled.png" alt="" /> */}
          </View>
        </View>
      </View>
      <View style={styles.main__order}>
        <Text style={styles.order__main__h3}>Order Info</Text>
        <View style={styles.main__order__container}>
          <View style={styles.main__order__title}>
            <View style={styles.main__order__title__img}>
              <Image
                source={
                  state
                    ? state.premiere === 'CineOne21'
                      ? require('../../assets/img/Home/Vector-1.png')
                      : state.premiere === 'Hiflix'
                      ? require('../../assets/img/Home/Vector-2.png')
                      : state.premiere === 'Ebv.Id'
                      ? require('../../assets/img/Home/Vector.png')
                      : ''
                    : require('../../assets/img/Home/Vector-1.png')
                }
                alt=""
              />
            </View>
            <View style={styles.main__order__title_text}>
              <Text style={styles.main__order__title_text}>
                {state ? state.premiere : 'CineOne21'} Cinema
              </Text>
            </View>
          </View>
          <View style={styles.main__order__info}>
            <View style={styles.main__order__info__1}>
              <Text>Movie selected</Text>
              <Text style={styles.main__order__info__1__h4}>
                {state ? state.movieName : 'Luca'}
              </Text>
            </View>
            <View style={styles.main__order__info__1}>
              <Text>{state ? state.dateBooking : 'Tuesday,07 July 2022'}</Text>
              <Text style={styles.main__order__info__1__h4}>
                {state ? state.time : '02:00pm'}
              </Text>
            </View>
            <View style={styles.main__order__info__1}>
              <Text>One ticket price</Text>
              <Text style={styles.main__order__info__1__h4}>
                {state ? state.price : '30000'} IDR
              </Text>
            </View>
            <View style={styles.main__order__info__1}>
              <Text>Seat choosed</Text>
              <Text style={styles.main__order__info__1__h4}>
                {bookedSeat ? bookedSeat.map(i => `${i}, `) : ''}
              </Text>
            </View>
          </View>
          <View style={styles.main__order__payment}>
            <Text style={styles.main__order__payment__h3}>Total Payment</Text>
            <Text style={styles.main__order__payment__h4}>
              {state ? bookedSeat.length * state.price : '60000'} IDR
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.main__seat__button}>
        {/* <Button onPress={Home} title="Change your movie" /> */}
        <Button onPress={handleOrder} title="Checkout now" />
      </View>
      <Footer />
    </ScrollView>
    // <View style={styles.container}>
    //   <Text>Order Screen</Text>
    //   <View style={styles.containerSeat}>
    //     <FlatList
    //       data={listSeat}
    //       keyExtractor={item => item}
    //       renderItem={({item}) => (
    //         <Seat
    //           seatAlphabhet={item}
    //           reserved={reservedSeat}
    //           selected={selectedSeat}
    //           selectSeat={handleSelectedSeat}
    //         />
    //       )}
    //     />
    //   </View>
    //   <Button title="Booking" color="#5F2EEA" onPress={handleBookingSeat} />
    //   <Button title="Reset" color="#5F2EEA" onPress={handleResetSeat} />
    // </View>
  );
}

export default Order;
