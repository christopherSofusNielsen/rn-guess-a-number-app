import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = (props) => {
  const { numberOfRounds, userNumber, startNewGame } = props;

  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of Rounds {numberOfRounds}</Text>
      <Text>Number to guess {userNumber}</Text>
      <Button title="START NEW GAME" onPress={startNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
