import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, StatusBar, ScrollView, StyleSheet, Text, Button, Alert } from "react-native";
import scanner from "./scanner";

class home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
        <Text>Hello, world!</Text>
        <Button title="Press me"
        onPress={() =>
          navigation.navigate('scanner')}
        />
      </View>
    );
  };
}
export default home;
