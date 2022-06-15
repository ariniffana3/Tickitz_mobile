import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Image
          source={require('../assets/img/Home/vectortickitz2.png')}
          style={styles.header__logo}
        />
      </View>
      <TouchableOpacity>
        <Icon
          name="menu"
          style={styles.header__icon}
          onPress={openDrawer}
          size={25}
          color="rgba(0, 0, 0, 1)"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  header__logo: {
    marginLeft: 20,
    width: 90,
    height: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  header__icon: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
  },
});
