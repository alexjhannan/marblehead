import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Pomodoro extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.title}>
            Pomodoro Timer
          </Text>
          <Text style={styles.subtitle}>
            ...work in progress...
          </Text>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.container}>
          <Text>Timer Goes Here!</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    fontFamily: 'monospace',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'monospace',
    paddingBottom: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#656565'
  },
  container: {
    alignItems: 'center'
  }
})

export default Pomodoro;
