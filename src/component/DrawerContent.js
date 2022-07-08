import React, {useEffect} from 'react';
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
  let user = useSelector(state => state.profile);
  user = user.data[0];
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    getdataUser();
  }, []);
  const getdataUser = async () => {
    try {
      const idUser = await AsyncStorage.getItem('idUser');
      console.log(idUser);
      await dispatch(dataUser(idUser));
    } catch (error) {
      console.log(error.response);
    }
  };

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
                uri: `https://res.cloudinary.com/dabzupph0/image/upload/v1650965669/${user.image}`,
              }}
            />
          </View>
          <View style={styles.biodata}>
            <Text
              style={styles.title}>{`${user.firstName} ${user.lastName}`}</Text>
            <Text style={styles.caption}>
              @{`${user.firstName}${user.lastName}`}
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
