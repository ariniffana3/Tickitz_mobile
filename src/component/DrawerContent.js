import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {dataUser} from '../stores/actions/profile';

import Icon from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';

function DrawerContent(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  console.log('drawer content running');
  useEffect(() => {
    getdataUser();
    console.log('useEffect running');
  }, []);
  useEffect(() => {
    console.log('useeffect 2 is running');
  }, []);
  // if (firstRender) {
  //   getdataUser();
  // }
  const getdataUser = async () => {
    try {
      console.log('getdatauser running');
      const idUser = await AsyncStorage.getItem('idUser');
      console.log(idUser, 'id');
      await dispatch(dataUser(idUser));
      setFirstRender(false);
    } catch (error) {
      console.log(error);
    }
  };
  // if (!isLoading) {
  let user = useSelector(state => state.profile);
  if (!user.isLoading) {
    user = user.data[0];
  }
  // if (!user.isLoading && !user.isError) {

  // } else {
  console.log(user);
  // }
  // }

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <View style={styles.avatar}>
            <Image
              source={{
                uri: `${
                  user
                    ? user.image
                      ? `https://res.cloudinary.com/dabzupph0/image/upload/v1650965669/${user.image}`
                      : 'https://www.iconsdb.com/icons/preview/gray/user-4-xxl.png'
                    : 'https://www.iconsdb.com/icons/preview/gray/user-4-xxl.png'
                }`,
              }}
              style={{width: 40, height: 40}}
            />
          </View>
          <View style={styles.biodata}>
            <Text style={styles.title}>{`${user ? user.firstName : ''} ${
              user ? user.lastName : ''
            }`}</Text>
            <Text style={styles.caption}>
              @{`${user ? user.firstName : ''}${user ? user.lastName : ''}`}
            </Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Logout"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
    overflow: 'hidden',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
