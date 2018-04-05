import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class ProfileScreen extends Component {
    render() {
      return(
        <View>
          <Text>This is the Profile Screen</Text>
          <Button onPress={() => this.props.navigation.navigate('HomeScreen')} title="Go to the Home Screen" />
        </View>
      );
    }
}
export default ProfileScreen;
