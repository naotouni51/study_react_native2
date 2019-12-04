import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


class PressMe extends React.Component {
  state = {
    number: 0,
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.pressMeText}>{this.state.number}</Text>
        <TouchableOpacity onPress={() => this.setState({number: this.state.number+1})}>
          <Text style={styles.pressMeText}>Press me!({this.props.textContent})</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    margin: 5
  },
  pressMeText: {
    textAlign: "center",
    fontSize: 30
  }
});

export default PressMe