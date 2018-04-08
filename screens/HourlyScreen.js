import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class HourlyScreen extends Component {
    render() {
      return(
        <View>
          <Text>This is the Hourly weather Screen</Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go to the Home Screen" />
        </View>
      );
    }
}
export default HourlyScreen;
