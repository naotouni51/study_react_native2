import React from "react";
import { View, Text, TouchableOpacity } from "react-native";


class PressMe extends React.Component {
  state = {
    number: 0,
  }

  render() {
    return(
      <View style={{backgroundColor: 'yellow', margin: 5}}>
        <Text style={{fontSize: 30}}>{this.state.number}</Text>
        <TouchableOpacity onPress={() => this.setState({number: this.state.number+1})}>
          <Text style={{fontSize: 30}}>Press me!({this.props.textContent})</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PressMe