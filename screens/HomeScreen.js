import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

class HomeScreen extends Component {
    render() {
      return(
        <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.header}>Browse</Text>
        </View>
        <View style={styles.centered}>
          <View style={styles.topRow}>
            <View style={styles.leftButton1}>
            <Image
          style={{
            width:100,
            height: 100,
            left: 20,
            top: 12,
          }}
          source={require('../Images/account.png')} />
              <Button
                title="Account"
                color="#55CCFF"
                onPress={() => this.props.navigation.navigate('Account')}
              />
            </View>
            <View style={styles.rightButton1}>
            <Image
          style={{
            width:100,
            height: 100,
            left: 10,
            top: 10,
          }}
          source={require('../Images/weatherlive.png')}
          onPress={() => this.props.navigation.navigate('Weather')}/>
              <Button
                title="Weather Live"
                color="#55CCFF"
                onPress={() => this.props.navigation.navigate('Weather')}
              />
            </View>
          </View>
          <View style={styles.bottomRow}>
            <View style={styles.leftButton2}>
            <Image
            style ={{
              width:100,
              height: 100,
              left: 25,
              top: 10,
            }}
            source={require('../Images/browse.png')} />
              <Button
                title="Location"
                color="#55CCFF"
                onPress={() => this.props.navigation.navigate('HomeScreen')}
              />
            </View>
            <View style={styles.rightButton2}>
            <Image
          style={{
            width:100,
            height: 100,
            left: 25,
            top: 10,
          }}
          source={require('../Images/radar.png')} />
              <Button
                title="Live Radar"
                color="#55CCFF"
                onPress={() => this.props.navigation.navigate('Radar')}
              />
            </View>
          </View>

         <View style={styles.bottom_logo}>

        </View>
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

  button: {
    shadowOpacity: 0.0,
    color:'#55CCFF',
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
    top: '10%',
    height: '50%',
  },

  bottomRow: {
    flexDirection: 'column',
    bottom: '10%',
    height: '50%',
  },

  rightButton1: {
    height: 140,
    width: 150,
    backgroundColor: '#55CCFF',
    position: 'absolute',
    right: 3,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    alignItems: 'center'
  },

  leftButton1: {
    height: 140,
    width: 150,
    backgroundColor: '#55CCFF',
    position: 'absolute',
    left: 2,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 3,
    // flexDirection: 'column'
  },

  rightButton2: {
    height: 140,
    width: 150,
    backgroundColor: '#55CCFF',
    position: 'absolute',
    right: 3,
    borderRadius: 14,
    borderColor: '#FFFFFF',
    borderWidth: 3,
  },

  leftButton2: {
    height: 140,
    width: 150,
    backgroundColor: '#55CCFF',
    position: 'absolute',
    left: 2,
    borderRadius: 14,
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

  center_logo: {
    width: 200,
    height: 200,
    bottom: 310,
    left: 35
  },

  bottom_logo: {
    width: 100,
    height:80,
    bottom:130,
  }

});

export default HomeScreen;
