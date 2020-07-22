import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Colors from "../constans/colors";

const MainButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.text}>
          {props.children ? props.children : props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  text: {
    color: "white",
    fontFamily: "open-sans",
  },
});

export default MainButton;
