import React, {useState} from 'react';
import styles from '../screen/Detail/styles';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';

function CardSchedule(props) {
  let {id, premiere, price, location, time} = props.data;

  time = time.split('');
  time.pop();
  time.shift();
  time = time.join('');
  time = time.split(',');

  return (
    <>
      <View style={styles.section__cinemaBox__cinema}>
        <View style={styles.section__cinemaBox__img}>
          <Image
            source={
              premiere === 'CineOne21'
                ? require('../assets/img/Home/Vector-1.png')
                : premiere === 'Hiflix'
                ? require('../assets/img/Home/Vector-2.png')
                : premiere === 'Ebv.Id'
                ? require('../assets/img/Home/Vector.png')
                : ''
            }
            alt=""
            style={
              premiere === 'CineOne21'
                ? styles.section__img1
                : premiere === 'Hiflix'
                ? styles.section__img2
                : premiere === 'Ebv.Id'
                ? styles.section__img3
                : ''
            }
          />
        </View>
        <View style={styles.section__cinemaBox__title}>
          <Text style={styles.section__cinemaBox__title__h3}>{premiere}</Text>
          <Text style={styles.section__cinemaBox__title__h4}>{location}</Text>
        </View>
      </View>
      <View style={styles.section__cinemaBox__time}>
        {time.map(itemDefault => (
          <TouchableOpacity
            key={itemDefault}
            style={
              itemDefault === props.dataOrder.time &&
              id === props.dataOrder.scheduleId
                ? styles.purple
                : styles.dark__grey
            }
            onPress={() =>
              props.changeDataOrder({
                time: itemDefault,
                scheduleId: id,
                price: price,
                premiere: premiere,
              })
            }>
            <Text
              style={
                itemDefault === props.dataOrder.time &&
                id === props.dataOrder.scheduleId
                  ? styles.purple
                  : styles.dark__grey
              }>
              {itemDefault}
            </Text>
          </TouchableOpacity>
          //  })
        ))}
      </View>
      <View style={styles.section__cinemaBox__price}>
        <Text style={styles.section__cinemaBox__price__1}>Price</Text>
        <Text style={styles.section__cinemaBox__price__2}>
          {price} IDR/seat
        </Text>
      </View>
      <Button
        style="btn btn-primary"
        disabled={id !== props.dataOrder.scheduleId ? true : false}
        onPress={props.handleOrder}
        title="Book Now"
        color="#5F2EEA"
      />
    </>
  );
}

CardSchedule.defaultProps = {
  category: 'Default Category',
  data: {
    id: '',
    name: '',
    category: '',
  },
};

export default CardSchedule;
