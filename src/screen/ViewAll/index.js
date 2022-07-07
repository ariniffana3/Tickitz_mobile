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
  ActivityIndicator,
} from 'react-native';
import styles from '../Home/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';
import CardUp from '../../component/CardUp';
import DropDownPicker from 'react-native-dropdown-picker';
import Footer from '../../component/Footer';

export default function Home(props) {
  const limit = 4;

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [dataRelease, setDataRelease] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  let [releaseDate, setReleaseDate] = useState({
    date: '',
  });
  const [totalPage, setTotalPage] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'A-Z', value: 'A-Z'},
    {label: 'Z-A', value: 'Z-A'},
  ]);
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
    getdataMovie();
  }, [releaseDate.date, page]);

  const token = AsyncStorage.getItem('token');

  const getdataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=${page}&limit=${limit}&searchRelease=${releaseDate.date}`,
        );
        setData(result.data.data);
        setPageInfo(result.data.pagination);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getdataMovie();
    }
  };

  const handleViewMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  const ListHeader = () => {
    return (
      <>
        <Text>List Movie</Text>
        <View style={styles.content}>
          <View style={styles.sort}>
            <Text>Sort</Text>
          </View>
          <View style={styles.search}>
            <Text>Search</Text>
          </View>
        </View>
        <Text>Filter Month</Text>
      </>
    );
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
    <ScrollView
    // onRefresh={handleRefresh}
    // refreshing={refresh}
    // onEndReached={handleLoadMore}
    // onEndReachedThreshold={0.1}
    >
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
        <View style={styles.main1__title}>
          <View style={styles.main__title__p1}>
            <DropDownPicker
              open={openDropdown}
              value={value}
              items={items}
              setOpen={setOpenDropdown}
              setValue={setValue}
              setItems={setItems}
              style={{width: 150}}
            />
            <View style={styles.main1__title__p1__line} />
          </View>

          <TextInput
            href=""
            onPress={handleViewAll}
            placeholder="Search Movie..."
          />
        </View>
        <View style={styles.main1__month__container}>
          <View>
            <FlatList
              horizontal
              data={month}
              keyExtractor={item => item.name}
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
            {/* <Button title="view more" onPress={handleViewMore} /> */}
          </View>
        </View>
        <View style={styles.main1__img__container__hover__viewAll}>
          <FlatList
            // horizontal
            numColumns="2"
            data={data}
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
      <Footer />
    </ScrollView>
  );
}
