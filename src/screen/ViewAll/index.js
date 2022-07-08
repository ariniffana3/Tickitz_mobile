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
import Icon from 'react-native-vector-icons/Feather';

export default function Home(props) {
  const limit = 4;

  const [page, setPage] = useState(1);
  const [sort, setsort] = useState('name ASC');
  const [data, setData] = useState([]);
  const [tempSearch, setTempSearch] = useState('');
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
    {label: 'A-Z', value: 'name ASC'},
    {label: 'Z-A', value: 'name DESC'},
  ]);
  const [search, setSearch] = useState('');
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
  }, [releaseDate.date, page, sort, search]);

  const getdataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=${page}&limit=${limit}&searchRelease=${releaseDate.date}&sort=${sort}&searchName=${search}`,
        );
        setData(result.data.data);
        setPageInfo(result.data.pagination);
        setTotalPage(result.data.pagination.totalPage);
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }

        if (page === result.data.pagination.totalPage) {
          setLast(true);
        } else {
          setLast(false);
        }
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
    const newPage = page + 1;
    setPage(newPage);
    // if (!loadMore) {
    //   const newPage = page + 1;
    //   setLoadMore(true);
    //   if (newPage <= totalPage + 1) {
    //     setLoading(true);
    //     setPage(newPage);
    //   } else {
    //     setLoading(false);
    //   }
    // }
  };
  const onSelectItem = item => {
    setPage(1);
    setsort(item.value);
  };
  // {nativeEvent: {key: keyValue}}
  const handleSearch = text => {
    setTempSearch(text);
  };
  const handlePressSearch = () => {
    setPage(1);
    setSearch(tempSearch);
  };
  const handleDetailMovie = id => {
    console.log(id);
    props.navigation.navigate('Detail', {movieId: id});
  };
  const handleViewAll = () => {
    props.navigation.navigate('ViewAll');
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
          <View>
            <Text style={{fontSize: 17}}>Upcoming Movie</Text>
            <View style={styles.main1__title__p1__line} />
          </View>
        </View>
        <View style={styles.main1__title}>
          <View style={styles.main__title__p1}>
            <DropDownPicker
              open={openDropdown}
              value={value}
              items={items}
              setOpen={setOpenDropdown}
              onSelectItem={onSelectItem}
              setValue={setValue}
              setItems={setItems}
              style={{width: 150}}
            />
            <View style={styles.main1__title__p1__line} />
          </View>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TextInput
              onChangeText={handleSearch}
              placeholder="Search Movie..."
            />
            <Text onPress={handlePressSearch}>
              <Icon name="search" color="black" />
            </Text>
          </View>
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
        <View style={styles.main1__img__container__hover__viewall}>
          <FlatList
            // horizontal
            numColumns="2"
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <CardUp data={item} handleDetail={handleDetailMovie} />
            )}
          />
          {!last ? (
            <View style={{width: 120, marginLeft: 'auto', marginRight: 'auto'}}>
              <Button
                title="load more"
                onPress={handleViewMore}
                color="#5F2EEA"
              />
            </View>
          ) : (
            <View />
          )}
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
