import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export class Splash extends Component {
  goToScreen(routeName) {
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: routeName }],
    });
  }
  componentDidMount() {
    setTimeout(
      () => {
        this.goToScreen("Home");
      },
      5000,
      this
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> This is Splash </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});

export default Splash;
