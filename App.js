import React from 'react';
import { AppRegistry, StyleSheet, Text, Image, View } from 'react-native';

import axios from 'axios';

const API_KEY = "5ff84e4b92ce4f8f";
const DEFAULT_ZIPCODE = 49401;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zipcode: DEFAULT_ZIPCODE,
      temp_high: null,
    }
  }

  _getForecast(zipcode)
  {
    const request = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + zipcode + ".json";
    return axios.get(request).then( (response) => {
        if(response.status == 200) {
            var weather = response.data.forecast.simpleforecast.forecastday;
            var temp = weather[0].high.fahrenheit;
            this.setState({temp_high: temp});
        }
    });
  }

  render() {
    this._getForecast(this.state.zipcode);

    return (
      <View style={styles.container}>
        <Text>Weather for Belmont, MI</Text>
        <Text>High: {this.state.temp_high}</Text>
        <Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
