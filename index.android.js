import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Pomodoro from './components/pomodoro.js';

class Marblehead extends Component {
  render() {
    return (
      <View>
        <Pomodoro timerDuration={.1} />
      </View>
    );
  }
}

AppRegistry.registerComponent('marblehead', () => Marblehead);
