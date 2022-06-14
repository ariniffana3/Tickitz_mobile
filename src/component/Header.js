import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Header(props) {
  const openDrawer = () => {
    props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <View>
        <Text>Logo</Text>
      </View>
      <TouchableOpacity onPress={openDrawer}>
        <Text> Icon Hamburger</Text>
      </TouchableOpacity>
      <Text>Header Component</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
