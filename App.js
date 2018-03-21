import React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, Button, Image, View } from 'react-native';

import axios from 'axios';

const API_KEY = "5ff84e4b92ce4f8f";
const DEFAULT_ZIPCODE = 49401;

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      zipcode: DEFAULT_ZIPCODE,
      temp_high: null,
      temp_low: null,
    }
  }

  _getForecast(zipcode)
  {
    const request = "http://api.wunderground.com/api/" + API_KEY + "/forecast/q/" + zipcode + ".json";
    return axios.get(request).then( (response) => {
        if(response.status == 200) {
            var weather = response.data.forecast.simpleforecast.forecastday;
            var high_temp = weather[0].high.fahrenheit;
            var low_temp = weather[0].low.fahrenheit;
            this.setState({temp_high: high_temp});
            this.setState({temp_low: low_temp});
        }
    });
  }

  _handlePress(zip)
  {
    if(zip.length == 5) {
      this.setState({zipcode: zip})
      this._getForecast(this.state.zipcode);
    }

  }

  render() {
    this._getForecast(this.state.zipcode);

    return (
      <View style={styles.container}>
        <TextInput placeholder="Enter Zipcode"
          returnKeyLabel = {"next"}
          onChangeText={this._handlePress.bind(this)}/>

        <Text>Weather for {this.state.zipcode}</Text>
        <Text>High: {this.state.temp_high}</Text>
        <Text>Low: {this.state.temp_low}</Text>
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
