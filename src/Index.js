import React from 'react';
import { ActivityIndicator, AsyncStorage, Button, StatusBar, StyleSheet, View, Image, Text, BackHandler } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/MaterialIcons';

import theme from '@config/theme'
import Home from '@screens/Home'
import Search from '@screens/Search'
import Camera from '@screens/Camera'
import Profile from '@screens/Profile'
import Notification from '@screens/Notification'

export default createBottomTabNavigator(
  {
    Home: Home,
    Search: Search,
    Camera: Camera,
    Notification: Notification,
    Profile: Profile,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `pie-chart${focused ? '' : '-outlined'}`;
        } else if (routeName === 'Profile') {
          iconName = `person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `bookmark${focused ? '' : '-border'}`;
        } else if (routeName === 'Camera') {
          iconName = `camera-alt${focused ? '' : ''}`;
        } else if (routeName === 'Notification') {
          iconName = `favorite${focused ? '' : '-border'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showLabel: false,
    },
  }
);