import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import HourlyScreen from './screens/HourlyScreen';
import FiveScreen from './screens/FiveScreen';
import ProfileScreen from './screens/ProfileScreen';



export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
      <Text>Search by ZipCode</Text>
    );
  }
}

const AppNavigator = DrawerNavigator({
    HomeScreen: { screen: HomeScreen },
    LoginScreen: { screen: LoginScreen},
    HourlyScreen: { screen: HourlyScreen },
    FiveScreen: { screen: FiveScreen },
    ProfileScreen: { screen: ProfileScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
