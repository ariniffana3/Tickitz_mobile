import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, FlatList} from 'react-native';
import Seat from '../../component/Seat';

function Order(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState(['A1', 'C7']);

  useEffect(() => {
    console.log(props.route.params);
  }, []);

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
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

  return (
    <View style={styles.container}>
      <Text>Order Screen</Text>
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
      <Button title="Booking" color="#5F2EEA" onPress={handleBookingSeat} />
      <Button title="Reset" color="#5F2EEA" onPress={handleResetSeat} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  containerSeat: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
});

export default Order;
