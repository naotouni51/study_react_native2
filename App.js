import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PressMe from "./components/PressMe";


export default class App extends React.Component {

  render() {

    return (
      <View style={styles.container}>
        <PressMe textContent="react" />
        <PressMe textContent="native" />
        <PressMe textContent="勉強会" />
      </View>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
