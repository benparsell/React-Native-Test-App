import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class LoginScreen extends Component {
    render() {
      return(
        <View>
          <Text>This is the Login Screen</Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go to the Home Screen" />
          <Button onPress={() => this.props.navigation.navigate('HourlyScreen')} title="Go to the Hourly Screen" />

        </View>
      );
    }
}
export default LoginScreen;
