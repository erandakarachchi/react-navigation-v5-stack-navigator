import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> This is Home Screen </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "red",
  },
});

export default Home;
