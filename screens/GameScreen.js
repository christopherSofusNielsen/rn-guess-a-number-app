import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min) + min);

  if (rndNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const renderListItem = (key, value, numberOfRounds) => (
  <View key={key} style={styles.listItem}>
    <BodyText>#{numberOfRounds}</BodyText>
    <BodyText>{value}</BodyText>
  </View>
);

const GameScreen = (props) => {
  const { userChoice, onGameOver } = props;
  let currentLow = useRef(1);
  let currentHigh = useRef(100);
  const initGuess = generateRandomBetween(1, 100, userChoice);
  const [pastGuesses, setPastGuesses] = useState([initGuess]);
  const [currentGuess, setCurrentGuess] = useState(initGuess);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [userChoice, onGameOver, currentGuess]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert(`Don't cheat!`, "You must give correct information", [
        { text: "okay", style: "default" },
      ]);
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    let rndNumb = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    //setRounds((currentState) => currentState + 1);
    setPastGuesses((curPastGuesses) => [rndNumb, ...curPastGuesses]);
    setCurrentGuess(rndNumb);
  };

  return (
    <View style={styles.screen}>
      <BodyText>Opponent's Guess</BodyText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, index) =>
            renderListItem(index, guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
  listContainer: {
    width: "80%",
    flex: 1,
  },
  list: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 6,
    marginTop: 10,
    backgroundColor: "white",
    width: "60%",
    borderRadius: 5,
  },
});

export default GameScreen;
