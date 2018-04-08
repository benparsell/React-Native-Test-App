import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

class CelciusScreen extends Component {
  constructor(props){
    super(props);
    this.state ={ data: null}
  }

  WeatherData() {
    fetch('http://api.wunderground.com/api/5ff84e4b92ce4f8f/forecast/q/49401.json')
      .then(response => response.json())
      .then(json =>  {

        result = json;
        this.setState({
          day1_title: result.forecast.simpleforecast.forecastday[0].date.weekday,
          day1_icon: result.forecast.simpleforecast.forecastday[0].icon_url,
          day1_high: result.forecast.simpleforecast.forecastday[0].high.celsius,
          day1_low: result.forecast.simpleforecast.forecastday[0].low.celsius,

          day2_title: result.forecast.simpleforecast.forecastday[1].date.weekday,
          day2_icon: result.forecast.simpleforecast.forecastday[1].icon_url,
          day2_high: result.forecast.simpleforecast.forecastday[1].high.celsius,
          day2_low: result.forecast.simpleforecast.forecastday[1].low.celsius,

          day3_title: result.forecast.simpleforecast.forecastday[2].date.weekday,
          day3_icon: result.forecast.simpleforecast.forecastday[2].icon_url,
          day3_high: result.forecast.simpleforecast.forecastday[2].high.celsius,
          day3_low: result.forecast.simpleforecast.forecastday[2].low.celsius,

          day4_title: result.forecast.simpleforecast.forecastday[3].date.weekday,
          day4_icon: result.forecast.simpleforecast.forecastday[3].icon_url,
          day4_high: result.forecast.simpleforecast.forecastday[3].high.celsius,
          day4_low: result.forecast.simpleforecast.forecastday[3].low.celsius,
        })
      });
  }

    render() {
      this.WeatherData();
      return(
      <View style={styles.container}>
       <View style={styles.top}>
         <Text style={styles.header}>Weather Live</Text>
       </View>
       <View style={styles.centered}>
       <Text style= {{
         color: '#A9A8A8',
         fontWeight: 'bold',
         top: 25
       }}>Weather for Today {'\n'} </Text>
       <Image style={{width: 50, height: 50}} source={{uri: this.state.day1_icon}} />
       <Text>{this.state.day1_title}</Text>
       <Text>High for today: {this.state.day1_high}</Text>
       <Text>Low for today: {this.state.day1_low} {'\n'}</Text>

       <Image style={{width: 50, height: 50}} source={{uri: this.state.day2_icon}} />
       <Text>{this.state.day2_title}</Text>
       <Text>High for {this.state.day2_title}: {this.state.day2_high}</Text>
       <Text>Low for {this.state.day2_title}: {this.state.day2_low} {'\n'}</Text>

       <Image style={{width: 50, height: 50}} source={{uri: this.state.day3_icon}} />
       <Text>{this.state.day3_title}</Text>
       <Text>High for {this.state.day3_title}: {this.state.day3_high}</Text>
       <Text>Low for {this.state.day3_title}: {this.state.day3_low} {'\n'}</Text>

       <Image style={{width: 50, height: 50}} source={{uri: this.state.day4_icon}} />
       <Text>{this.state.day4_title}</Text>
       <Text>High for {this.state.day4_title}: {this.state.day4_high}</Text>
       <Text>Low for {this.state.day4_title}: {this.state.day4_low} {'\n'}</Text>
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
export default CelciusScreen;
