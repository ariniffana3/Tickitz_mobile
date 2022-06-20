import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default function ListMovie(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  // useEffect(() => {
  //   getDataMovie();
  // }, []);
  return (
    <View>
      <Text>ListMovie</Text>
    </View>
  );
}
