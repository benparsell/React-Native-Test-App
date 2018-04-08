import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import AccScreen from './screens/AccScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import HourlyScreen from './screens/HourlyScreen';
import FiveScreen from './screens/FiveScreen';
import ProfileScreen from './screens/ProfileScreen';
import WeatherScreen from './screens/WeatherScreen';
import CelciusScreen from './screens/CelciusScreen';
import FahrenheitScreen from './screens/FahrenheitScreen';
import RadarScreen from './screens/RadarScreen';

class Hidden extends React.Component {
  render() {
    return null;
  }
}

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = DrawerNavigator({
    Welcome: { screen:WelcomeScreen, navigationOptions: {
      drawerLabel: <Hidden />
    }},

    Weather: { screen:WeatherScreen },

    Home: { screen: HomeScreen },

    Account: { screen: AccScreen },

    Login: { screen: LoginScreen, navigationOptions: {
      drawerLabel: <Hidden />
    }},

    Signup: { screen: SignUpScreen, navigationOptions: {
      drawerLabel: <Hidden />
    }},

    CelciusScreen: { screen: CelciusScreen },

    FahrenheitScreen: { screen: FahrenheitScreen },
    
    Radar: { screen: RadarScreen },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
