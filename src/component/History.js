import React from 'react';
import {Button, Image, Text, View} from 'react-native';

export default function History(props) {
  const {premiere, date, time, movieName, statusUsed} = props.data;
  return (
    <View>
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
      />
      <Text>{`${date} - ${time}`}</Text>
      <Text>{`${movieName}`}</Text>
      <Button
        title={statusUsed === 'active' ? 'Ticket in active' : 'Ticket used'}
        disabled={statusUsed === 'active' ? false : true}
      />
    </View>
  );
}
