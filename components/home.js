import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 10
    }
  }

  incrementCounter(val) {
    let counter = this.state.counter + val;

    this.setState({counter});
  }

  render() {
    return (
      <View>
        <Text style={styles.header}>Welcome Home!</Text>

        <View style={styles.container}>

          <Text style={styles.itemName}>Pomodoro</Text>

          <TouchableHighlight
            onPress={this.incrementCounter.bind(this, -1)}
            style={styles.itemArrow}
            underlayColor="#ffbbbb">
            <Text style={styles.itemButtonText}>&#8595;</Text>
          </TouchableHighlight>

          <Text style={styles.counter}>{this.state.counter + ' min'}</Text>

          <TouchableHighlight
            onPress={this.incrementCounter.bind(this, 1)}
            style={styles.itemArrow}
            underlayColor="#ffbbbb">
            <Text style={styles.itemButtonText}>&#8593;</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={Actions.pomodoro.bind(null, {timerDuration: this.state.counter})}
            style={styles.itemButton}
            underlayColor="#ffbbbb">
            <Text style={styles.itemButtonText}>Start</Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          onPress={Actions.goalList}
          style={styles.itemButton}
          underlayColor="#ffbbbb">
          <Text style={styles.itemButtonText}>Goal List</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 36,
    fontFamily: 'monospace',
    marginTop: 50,
    textAlign: 'center'
  },
  container: {
    marginTop: 50,
    flexDirection: 'row'
  },
  itemName: {
    flex: .25,
    textAlign: 'center'
  },
  itemButton: {
    flex: .25,
  },
  itemArrow: {
    flex: .1
  },
  itemButtonText: {
    textAlign: 'center'
  }
})

export default Home;
