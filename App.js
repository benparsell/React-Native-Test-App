import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

import axios from 'axios';

const API_KEY = "5ff84e4b92ce4f8f";

export default class App extends React.Component {
  temp_high = null;
  _getForecast(zipcode)
  {
    const request = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + zipcode + ".json";
    axios.get(request).then( (response) => {
        if(response.status == 200) {
            this.response = response.data;
            return this.response.data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
        }

    });
  }

  render() {
    this.temp_high = this._getForecast(49306);
    return (
      <View style={styles.container}>
        <Text>Weather for Belmont, MI</Text>
        <Text>High: {this.temp_high}</Text>
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
