import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import Home from './components/home';
import Pomodoro from './components/pomodoro';
import GoalList from './components/goalList';

class App extends React.Component {
  render() {
    return <Router>
      <Scene key="root" navigationBarStyle={styles.navBar} titleStyle={styles.navBarTitle} barButtonTextStyle={styles.barButtonTextStyle} barButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key="home" component={Home} title="Home" initial={true}/>
        <Scene key="pomodoro" component={Pomodoro} timerDuration={.1} title="Pomodoro"/>
        <Scene key="goalList" component={GoalList} title="GoalList"/>
      </Scene>
    </Router>
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor:'#224422'
  },
  navBarTitle:{
      color:'#DDEEDD'
  },
  barButtonTextStyle:{
      color:'#FFFFFF'
  },
  barButtonIconStyle:{
      tintColor:'#EEFFEE'
  },
});

AppRegistry.registerComponent('marblehead', () => App);
