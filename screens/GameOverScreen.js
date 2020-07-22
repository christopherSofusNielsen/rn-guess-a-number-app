import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import BoldText from "../components/BoldText";
import Colors from "../constans/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const { numberOfRounds, userNumber, startNewGame } = props;

  return (
    <View style={styles.screen}>
      <BoldText>The Game is Over</BoldText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          //   source={{
          //     uri:
          //       "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
          //   }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{numberOfRounds}</Text> to guess the
          number <Text style={styles.highlight}>{userNumber}</Text>
        </BodyText>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton onPress={startNewGame}>START NEW GAME</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary,
  },
  textContainer: {
    width: "60%",
  },
  resultText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
