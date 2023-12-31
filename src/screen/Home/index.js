import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';
import CardUp from '../../component/CardUp';
import CardDown from '../../component/CardDown';
import Footer from '../../component/Footer';

export default function Home(props) {
  const limit = 7;

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataRelease, setDataRelease] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  let [releaseDate, setReleaseDate] = useState({
    date: new Date().toISOString().split('T')[0].split('-')[1],
    // date: 4,
  });
  const dataUser = AsyncStorage.getItem('dataUser');
  const newData = 1;
  const month = [
    {number: 1, title: 'January'},
    {number: 2, title: 'February'},
    {number: 3, title: 'March'},
    {number: 4, title: 'April'},
    {number: 5, title: 'May'},
    {number: 6, title: 'June'},
    {number: 7, title: 'July'},
    {number: 8, title: 'August'},
    {number: 9, title: 'September'},
    {number: 10, title: 'October'},
    {number: 11, title: 'November'},
    {number: 12, title: 'December'},
  ];

  useEffect(() => {
    getdataMovie();
  }, []);

  useEffect(() => {
    getdataMovieRelease();
  }, []);

  useEffect(() => {
    getdataMovieRelease();
  }, [releaseDate.date]);

  const token = AsyncStorage.getItem('token');

  const getdataMovie = async () => {
    try {
      const resultMovie = await axios.get(
        `movie?page=${page}&limit=${limit}&searchRelease=${releaseDate.date}`,
      );
      setData(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  const getdataMovieRelease = async () => {
    try {
      const resultMovie = await axios.get(
        `movie?page=${page}&limit=${limit}&searchRelease=${releaseDate.date}`,
      );
      setDataRelease(resultMovie.data.data);
      setPageInfo(resultMovie.data.pagination);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDetailMovie = id => {
    console.log(id);
    props.navigation.navigate('Detail', {movieId: id});
  };
  const handleViewAll = () => {
    props.navigation.navigate('ViewAll');
  };
  const Login = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
  };
  return (
    <ScrollView>
      <View style={styles.home__section}>
        <View style={styles.section__title}>
          <View style={styles.section__title__container}>
            <Text style={styles.section__title__desc}>
              Nearest cimena, Newest movie
            </Text>
            <Text style={styles.section__title__desc__title}>
              Find out now!
            </Text>
          </View>
        </View>
        <View style={styles.section__img}>
          <View style={styles.section__img__container1}>
            <Image
              source={require('../../assets/img/Home/Rectangle31.png')}
              alt="images"
            />
            <View style={styles.section__img__overlay} />
          </View>
          <View style={styles.section__img__container2}>
            <Image
              source={require('../../assets/img/Home/Rectangle32.png')}
              alt="images"
            />
            <View style={styles.section__img__overlay} />
          </View>
          <View style={styles.section__img__container3}>
            <Image
              source={require('../../assets/img/Home/Rectangle33.png')}
              alt="images"
            />
            <View style={styles.section__img__overlay} />
          </View>
        </View>
      </View>
      <View style={styles.main1}>
        <View style={styles.main1__title}>
          <View style={styles.main__title__p1}>
            <Text>
              <Text href=""> Now Showing</Text>
            </Text>
            <View style={styles.main__title__p1__line} />
          </View>
          <Text href="" onPress={handleViewAll}>
            view all
          </Text>
        </View>
        <View style={styles.main1__img__container__hover}>
          <FlatList
            horizontal
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CardUp data={item} handleDetail={handleDetailMovie} />
            )}
          />
          {/* <View> */}
          {/* {data.map(item => ( */}
          {/* <li key={item.id}> */}
          {/* </li> */}
          {/* ))} */}
          {/* </View> */}
        </View>
      </View>
      <View style={`${styles.main1} ${styles.addition__main1}`}>
        <View style={styles.main1__title}>
          <View style={styles.main__title__p1}>
            <Text>Upcoming Movie</Text>
            <View style={styles.main1__title__p1__line} />
          </View>

          <Text href="" onPress={handleViewAll}>
            view all
          </Text>
        </View>
        <View style={styles.main1__month__container}>
          <View>
            <FlatList
              horizontal
              data={month}
              keyExtractor={item => item.number}
              renderItem={({item}) => (
                <TouchableOpacity
                  style={styles.main1__month}
                  onPress={() => {
                    setReleaseDate({date: item.number});
                  }}>
                  <Text style={styles.main1__month__text}>{item.title}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
        <View style={styles.main1__img__container__hover}>
          <FlatList
            horizontal
            data={dataRelease}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CardUp data={item} handleDetail={handleDetailMovie} />
            )}
          />
          {/* <View> */}
          {/* {dataRelease.map(item => ( */}
          {/* <li key={item.id}> */}
          {/* </li> */}
          {/* ))} */}
          {/* </View> */}
        </View>
      </View>
      <View>
        <View style={styles.footer__subscription}>
          <View style={styles.footer__subscription__text__up}>
            <Text style={styles.footer__subscription__text__up1}>
              Be the vanguard of the
            </Text>
            <Text style={styles.footer__subscription__text__up2}>
              Moviegoers
            </Text>
          </View>
          <View style={styles.footer__subscription__submit}>
            <TextInput
              type="email"
              placeholder="Type your email"
              style={styles.footer__subscription__submit__input}
            />
            <Button title="Join now" color="#5F2EEA" />
          </View>
          <Text style={styles.footer__subscription__text__down}>
            By joining you as a Tickitz member,will always send you the latest
            updates via email.
          </Text>
        </View>
        <Footer />
      </View>
    </ScrollView>
  );
}
