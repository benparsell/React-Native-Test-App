import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FiveScreen extends Component {
    render() {
      return(
        <View>
          <Text>This is the Five-day weather Screen</Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go to the Home Screen" />
        </View>
      );
    }
}
export default FiveScreen;
