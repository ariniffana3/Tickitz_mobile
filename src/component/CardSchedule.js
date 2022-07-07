import React, {useState} from 'react';
import styles from '../screen/Detail/styles';
import {Button, Image, Text, TouchableOpacity, View} from 'react-native';

function CardSchedule(props) {
  console.log(props);
  let {id, premiere, price, location, time} = props.data;
  const timeDefault = [
    '08:30am',
    '10:00am',
    '12:00pm',
    '02:00pm',
    '04:00pm',
    '06:00pm',
    '08:00pm',
  ];
  const item = ['08:30am', '10:00am', '12:00pm'];
  time = time.split('');
  time.pop();
  time.shift();
  time = time.join('');
  time = time.split(',');

  // const mapping =()=>{
  //   time.map((item)=>{ item !== itemDefault? styles.young__grey : itemDefault === clicking? styles.purle :styles.old__grey})
  // }
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
          //  for(a=1;a<time.length;a++){
          // itemDefault == time.map((item)=> {return item}) ? console.log("berhasil"): console.log("2");
          //  }
          //  time.forEach((item)=>{

          <TouchableOpacity
            key={itemDefault}
            // item !== itemDefault? styles.young__grey : itemDefault === clicking? styles.purle :styles.old__grey
            // //time.map((item)=> {if (itemDefault == item){return `${styles.dark__grey}` }
            // return `${styles.young__grey}`}
            // itemDefault == "08:30am" ? styles.dark__grey: styles.young__grey
            style={
              itemDefault === props.dataOrder.time &&
              id === props.dataOrder.idOrder
                ? styles.purple
                : styles.dark__grey
            }
            onPress={() =>
              props.changeDataOrder({...props.data, time: itemDefault})
            }>
            <Text
              style={
                itemDefault === props.dataOrder.time &&
                id === props.dataOrder.idOrder
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
        // style={`styles.button__book `}
        style="btn btn-primary"
        //id == dataOrder.idOrder ? : false
        disabled={id !== props.dataOrder.idOrder ? true : false}
        onPress={props.handleOrder}
        title="Book Now"
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
