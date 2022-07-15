// module imports
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet, SafeAreaView } from "react-native";

// local component imports
import Header from "./components/Header";
import EightBall from "./components/EightBall";
import Shake from "./components/Shake";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <View style={componentStyles.main}>
        <StatusBar style="light" />
        <SafeAreaView style={componentStyles.body}>
          <Header />
          <EightBall />
          <Shake />
          <Footer />
        </SafeAreaView>
      </View>
    );
  }
}

const componentStyles = StyleSheet.create({
  main: {
    flex: 1,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "space-between",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
