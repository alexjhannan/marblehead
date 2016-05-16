import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  Vibration,
  View
} from 'react-native';

class Pomodoro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick(t0) {
    // t0 is the "relative starting time" of the timer
    let t1 = new Date();

    let counter = t1 - t0;

    this.setState({ counter });
  }

  toggleRunning() {
    console.log(this.timer);
    if (this.timer) {
      clearInterval(this.timer);
      return this.timer = null;
    } else {
      // t0 is the current time minus the counter's time, so that it keeps time over multiple start/stops
      let t0 = new Date() - this.state.counter;
      this.timer = setInterval(this.tick.bind(this, t0), 50);
    }
  }

  alarm() {
    Vibration.vibrate([0, 300, 100, 300, 100, 300]);
  }

  formatTimer() {
    // calculates remaining time, and fires off the alarm if the timer expires
    let timerDuration = this.props.timerDuration * 60 * 1000;
    let timeRemaining = Math.floor((timerDuration - this.state.counter)/1000);
    if (timeRemaining < 0) {
      this.alarm();
      clearInterval(this.timer);
      this.timer = null;
      return 'Ding!';
    }
    let minutesRemaining = Math.floor(timeRemaining/60);
    if (minutesRemaining < 10) { minutesRemaining = '0' + minutesRemaining; }
    let secondsRemaining = timeRemaining%60;
    if (secondsRemaining < 10) { secondsRemaining = '0' + secondsRemaining;}

    let formattedTimer;

    minutesRemaining ?
      formattedTimer = minutesRemaining + ':' + secondsRemaining :
      formattedTimer = '00:' + secondsRemaining

    return formattedTimer;
  }

  render() {
    let timer = this.formatTimer();
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
          <Text>{timer}</Text>
          <TouchableHighlight
            underlayColor='#656565'
            onPress={() => this.toggleRunning()}>
            <Text>Start/Stop</Text>
          </TouchableHighlight>
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
