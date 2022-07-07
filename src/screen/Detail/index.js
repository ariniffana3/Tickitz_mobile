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
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [dataSchedule, setDataSchedule] = useState([]);
  const [pageInfoSchedule, setPageInfoSchedule] = useState({});
  const [dataRilis, setDataRilis] = useState({});
  const [location, setLocation] = useState([]);
  const [dateNow, setDateNow] = useState(moment(new Date()).format('L'));
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Bogor', value: 'Bogor'},
    {label: 'Depok', value: 'Depok'},
    {label: 'Bandung', value: 'Bandung'},
  ]);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getMovieId();
  }, []);
  //   useEffect(() => {
  //     getMovieId();
  //   }, [page]);
  useEffect(() => {
    getdataSchedule();
  }, []);
  useEffect(() => {
    getdataSchedule();
  }, [location]);
  // useEffect(() => {
  console.log(props.route.params);
  // }, []);

  const token = AsyncStorage.getItem('token');
  const getMovieId = async () => {
    try {
      const resultMovieId = await axios.get(
        `movie/${props.route.params.movieId}`,
      );
      setData(resultMovieId.data.data[0]);
      // setDataRilis(data.releaseDate);
      // setDataRilis(moment(dataRilis).format("MMM Do YY"));
    } catch (error) {
      console.log(error.response);
    }
  };
  console.log(data.image);
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

  const [dataOrder, setDataOrder] = useState({
    idOrder: '',
    movieId: props.route.params.movieId,
    movieName: data.name,
    // userId: state.userId,
    dateBooking: moment(new Date()).format('MMM Do YY'),
    time: '',
    price: '',
  });

  const handleOrder = () => {
    props.navigation.navigate('Order', {
      // id: 1,

      ...dataOrder,
    });
    console.log(dataOrder);
    console.log('handle order');
  };
  const changeDataOrder = data => {
    console.log(data);
    setDataOrder({
      ...dataOrder,
      idOrder: data.id,
      time: data.time,
      price: data.price,
      premiere: data.premiere,
      movieName: data.name,
    });
  };
  const Home = () => {
    props.navigation.navigate('Home');
  };
  // const additionData = {
  //   ...state,
  //   name: data.name,
  //   userId: state.userId,
  //   dateBooking: moment(new Date()).format("MMM Do YY"),
  // };
  const handleLocation = e => {
    setLocation(e.target.value);
  };
  data.defaultProps = {
    releaseDate: 'default',
  };
  console.log(location);
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
