import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import DrawerContent from '../component/DrawerContent';
import Header from '../component/Header';
import ViewAll from '../screen/ViewAll';
import Order from '../screen/Order';
import Counter from '../screen/Counter';
import Detail from '../screen/Detail';
import Payment from '../screen/Payment';
import Midtrans from '../screen/Midtrans';
import Profile from '../screen/Profile';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Midtrans}
        name="Midtrans"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
function ViewAllNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="ProfileFunction"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ViewAllNavigator}
        name="ViewAll"
        options={{
          title: 'List Movie',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon3 name="movie" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="Profile"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon2 name="person" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
