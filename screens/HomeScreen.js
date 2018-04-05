import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { TabNavigator } from 'react-navigation';

class HomeScreen extends Component {
    render() {
      return(
        <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30,
        }}>
        <Image
        style={{width: 50, height: 50}}
        source={require('../assets/images/appIcon.png')}
        />
          <Text style={{
            marginTop: 10
          }}>CIS 443 Weather App</Text>
        </View>
      );
    }
}

class Notifications extends Component {
    render() {
      return(
        <View>

          <Text>This is the Notifications Screen</Text>
        </View>
      );
    }
}

const HomeScreenTabNavigator = TabNavigator({

    HomeScreen: {
      screen: HomeScreen
    },
    Notifications: {
      screen: Notifications
    }

})

export default HomeScreenTabNavigator;
