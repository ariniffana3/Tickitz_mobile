import React, {useState, useEffect} from 'react';
import styles from './styles';
import axios from '../../utils/axios';
import CardSchedule from '../../component/CardSchedule';
import moment from 'moment';
import {Image, ScrollView, Text, View} from 'react-native';
import Footer from '../../component/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';

export default function Detail(props) {
  const [data, setData] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [pageInfoSchedule, setPageInfoSchedule] = useState({});
  const [location, setLocation] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Bogor', value: 'Bogor'},
    {label: 'Depok', value: 'Depok'},
    {label: 'Bandung', value: 'Bandung'},
  ]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dataOrder, setDataOrder] = useState({
    movieId: props.route.params.movieId,
    dateBooking: moment(new Date()).format('MMM Do YY'),
  });
  useEffect(() => {
    getMovieId();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, [location]);

  console.log(props.route.params);

  const getMovieId = async () => {
    try {
      const resultMovieId = await axios.get(
        `movie/${props.route.params.movieId}`,
      );
      setData(resultMovieId.data.data[0]);
      setDataOrder({...dataOrder, movieName: resultMovieId.data.data[0].name});
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataSchedule = async () => {
    try {
      const resultSchedule = await axios.get(
        `/schedule?page=1&limit=6&searchMovieId=${props.route.params.movieId}&searchLocation=${location}&sort=`,
      );
      setDataSchedule(resultSchedule.data.data);
      setPageInfoSchedule(resultSchedule.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const changeDataOrder = datachange => {
    setDataOrder({
      ...dataOrder,
      ...datachange,
    });
  };

  const handleOrder = () => {
    props.navigation.navigate('Order', {
      ...dataOrder,
    });
  };

  const handleLocation = item => {
    setLocation(item.value);
  };
  data.defaultProps = {
    releaseDate: 'default',
  };
  return (
    <ScrollView style={styles.container}>
      <View key={data.name} style={styles.detail__main}>
        <View style={styles.main__img}>
          <View style={styles.main__img__img}>
            <Image
              style={{width: 247, height: 373, borderRadius: 10}}
              source={{
                uri: `https://res.cloudinary.com/dabzupph0/image/upload/v1650965669/${data.image}`,
              }}
              alt="movie"
            />
          </View>
        </View>
        <View style={styles.main__desc}>
          <View style={styles.main__desc__title}>
            <Text style={styles.main__desc__title__h1}>{data.name}</Text>
            <Text style={styles.main__desc__title__h2}>{data.category}</Text>
          </View>
          <View style={styles.main__desc__info}>
            <View style={styles.main__desc__info__1}>
              <Text style={styles.main__desc__info__h3}>Release date</Text>
              <Text defaultValue="tes" style={styles.main__desc__info__h4}>
                {moment(data.releaseDate).format('MMM Do YY')}
              </Text>
              <Text style={styles.main__desc__info__h3}>Duration</Text>
              <Text style={styles.main__desc__info__h4}>{data.duration}</Text>
            </View>
            <View style={styles.main__desc__info__2}>
              <Text style={styles.main__desc__info__h3}>Directed by</Text>
              <Text style={styles.main__desc__info__h4}>{data.director}</Text>
              <Text style={styles.main__desc__info__h3}>Casts</Text>
              <Text style={styles.main__desc__info__h4}>{data.casts}</Text>
            </View>
          </View>
          <View style={styles.main__desc__synopsis}>
            <Text style={styles.main__desc__info__h3}>Synopsis</Text>
            <Text style={styles.main__desc__info__h4}>{data.synopsis}</Text>
          </View>
        </View>
      </View>

      <View style={styles.detail__section}>
        <Text style={styles.section__title}>Showtime and Tickets</Text>
        <View style={styles.section__option}>
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <DropDownPicker
            open={openDropdown}
            value={value}
            items={items}
            setOpen={setOpenDropdown}
            onSelectItem={handleLocation}
            setValue={setValue}
            setItems={setItems}
            style={{width: 150}}
          />
        </View>
        <View style={styles.section__cinemaBox}>
          {dataSchedule.map(item => (
            <View style={styles.section__cinemaBox__item} key={item.id}>
              {/* <span>{JSON.stringify(item)}</span> */}
              <CardSchedule
                data={item}
                handleOrder={handleOrder}
                changeDataOrder={changeDataOrder}
                dataOrder={dataOrder}
                // dataUser={dataUser}
                // month={newData}
              />
            </View>
          ))}
        </View>
        <View style={styles.viewMore}>
          <View style={styles.viewMore__line} />
          {/* <Text>View more</Text> */}
          <View style={styles.viewMore__line} />
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
