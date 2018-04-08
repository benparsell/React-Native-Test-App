import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class WelcomeScreen extends Component {
    render() {
      return(
        <View style={styles.container}>
        <View style={styles.centered}>
          <Text style={styles.appName}> {'\n'}Weather Live</Text>
          <Text>{'\n'} </Text>
          <Button
            style={styles.continueButton}
            title="Continue"
            color="#55CCFF"
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
        </View>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  centered: {
    height: '90%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },

  appName: {
    color: '#55CCFF',
    fontSize: 36,
    textAlign: 'center',
  },

  top: {
    height: '10%',
    width: '100%',
    backgroundColor: '#55CCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#FFFFFF',
    fontSize: 20,
  },

  blueText: {
    color: '#55CCFF',
    fontWeight: 'bold',
  },
  topRow: {
    flexDirection: 'column',
    top: '5%',
    height: '50%',
  },

  bottomRow: {
    flexDirection: 'column',
    bottom: '15%',
    height: '50%',
  },

  rightButton1: {
    height: '30%',
    width: '40%',
    backgroundColor: '#55CCFF',
    position: 'absolute',
    right: '6%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },

  leftButton1: {
    height: '30%',
    width: '40%',
    backgroundColor: '#55CCFF',
    position: 'absolute',
    left: '6%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    // flexDirection: 'column'
  },

  rightButton2: {
    height: '30%',
    width: '40%',
    backgroundColor: '#55CCFF',
    position: 'absolute',
    right: '6%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },

  leftButton2: {
    height: '30%',
    width: '40%',
    backgroundColor: '#55CCFF',
    position: 'absolute',
    left: '6%',
    borderRadius: 10,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },

  button: {
    width: '60%',
    height: '10%',
    borderRadius: 10,
    borderColor: '#55CCFF',
    borderWidth: 3,
    alignItems: 'center',
    marginBottom: 10,
  },

  leftAligned: {
    justifyContent: 'flex-start',
    left: '15%',
  },

  inputBox: {
    borderColor: '#55CCFF',
    borderWidth: 3,
    width: '70%',
    height: '10%',
  },

  firstHalf: {
    height: '40%',
    backgroundColor: '#55CCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  circle: {
    backgroundColor: '#FFFFFF',
    borderRadius: 100,
    width: 100,
    height: 100,
  },
});
export default WelcomeScreen;
