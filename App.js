import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state = {
    number: 0,
  }

  render() {

    return (
      <View style={styles.container}>
        <Text>{this.state.number}</Text>
        <TouchableOpacity onPress={() => this.setState({number: this.state.number+1})}>
          <Text>Press me!(state)</Text>
        </TouchableOpacity>
      </View>
    )
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
