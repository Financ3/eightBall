// module imports
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// util imports
import globalStyles from "../styles/globalStyles";

const Header = () => {
  return (
    <View style={compStyles.container}>
      <Text style={globalStyles.text}>Ask the 8-Ball!</Text>
    </View>
  );
};

const compStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Header;
