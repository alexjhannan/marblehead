import React from 'react';
import { AppRegistry } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './components/home.js';
import Pomodoro from './components/pomodoro.js';

class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root">
        <Scene key="home" component={Home} title="Home" initial={true}/>
        <Scene key="pomodoro" component={Pomodoro} timerDuration={.1} title="Pomodoro"/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('marblehead', () => App);
