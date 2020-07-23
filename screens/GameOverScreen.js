import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import BoldText from "../components/BoldText";
import Colors from "../constans/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  const { numberOfRounds, userNumber, startNewGame } = props;

  return (
    <ScrollView>
      <View style={styles.screen}>
        <BoldText>The Game is Over</BoldText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            //   source={{
            //     uri:
            //       "https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg",
            //   }}
            style={{
              borderWidth: 3,
              borderColor: "black",
              width: sw() * 0.7,
              height: sw() * 0.7,
              borderRadius: (sw() * 0.7) / 2,
              overflow: "hidden",
              marginVertical: sh() / 40,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <BodyText
            style={{
              textAlign: "center",
              fontSize: sh() < 400 ? 16 : 20,
              marginVertical: sh() / 60,
            }}
          >
            Your phone needed{" "}
            <Text style={styles.highlight}>{numberOfRounds}</Text> to guess the
            number <Text style={styles.highlight}>{userNumber}</Text>
          </BodyText>
        </View>
        <View style={styles.buttonContainer}>
          <MainButton onPress={startNewGame}>START NEW GAME</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};

const sw = () => {
  return useWindowDimensions().width;
};

const sh = () => {
  return useWindowDimensions().height;
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
});

export default GameOverScreen;
