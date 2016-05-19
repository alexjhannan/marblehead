import React from 'react';
import { ListView, StyleSheet, Text, View } from 'react-native';
import Firebase from 'firebase';

class GoalList extends React.Component {
  constructor(props) {
    super(props);

    this.itemsRef = new Firebase('https://glaring-torch-9232.firebaseio.com/items');

    this.itemsRef.set({
      1: {title: "hey"},
      2: {title: "girl"}
    })

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this._listenForItems(this.itemsRef);
  }

  _listenForItems(itemsRef) {
    // keeps data up to date
    itemsRef.on('value', (snap) => {
      let items = [];

      snap.forEach(child => {
        items.push({
          title: child.val().title,
          _key: child.key()
        });
      });
      
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });
    });
  }

  _renderRow(item) {
    return (
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Goal List</Text>
        <ListView dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          style={styles.listView} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  listView: {
    flex: 1
  }
})

export default GoalList;
