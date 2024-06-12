/**
 * 
- Create a game similar to Wordle https://www.nytimes.com/games/wordle/index.html
- Guess a five-letter word
- Player has 6 tries to guess the word.
- After each guess, the color of the tiles will change to show how close the player is to guess the word:
    - If a letter is in the right spot, the corresponding tile should be coloured green.
    - If a letter is not in the right spot, the corresponding tile should be coloured yellow.
    - If a letter is not in the word, the corresponding tile be coloured grey.
- The game should have the following controls:
    - An input to write the word.
    - A submit button to submit the guess.
    - A play again button to start a new game.
- The game should also give feedback if the game finishes:
    - “Winner” should be displayed if the player correctly guesses the word.
    - “Game Over” should be displayed if the player doesn’t correctly guess the word within the available amount of tries.

Example image: https://i.imgur.com/MXL6BiU.png
 */

import React, { useState, useCallback, FC, useMemo } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Constants from "expo-constants";
import Letter from "./Letter";

const word = "agent";

type WordProps = {
  guess: string;
};
const Word: FC<WordProps> = ({ guess }) => {
  console.log("word");
  return (
    <View style={styles.word}>
      {guess.split("").map((letter, i) => (
        <Letter answer={word} letter={letter} guess={guess} position={i} />
      ))}
    </View>
  );
};

const Wordle = () => {
  const [guesses, setGuesses] = useState<string[]>(["again"]);
  const [currentGuess, setCurrentGuess] = useState<string>("");

  const onSubmit = useCallback(() => {
    setGuesses((prevState) => [...prevState, currentGuess.toLowerCase()]);
    setCurrentGuess("");
  }, [currentGuess]);

  const result: "inProgress" | "winner" | "loser" = useMemo(() => {
    if (guesses.includes(word)) {
      return "winner";
    } else if (guesses.length == 6) {
      return "loser";
    } else {
      return "inProgress";
    }
  }, [guesses]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KWordle</Text>
      {result == "winner" && <Text>Winner</Text>}
      {result == "loser" && <Text>Loser</Text>}
      {guesses.map((guess) => (
        <Word guess={guess} />
      ))}
      <TextInput
        style={styles.textInput}
        onChangeText={setCurrentGuess}
        value={currentGuess}
      />
      <Button
        title="Submit"
        disabled={currentGuess.length !== 5}
        onPress={onSubmit}
      />
      <Button
        disabled={result == "inProgress"}
        title="Play Again"
        onPress={() => setGuesses([])}
      />
    </View>
  );
};

export default Wordle;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F5F5F6",
    padding: 8,
  },
  word: {
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    margin: 16,
    fontSize: 18,
    fontWeight: 600,
  },
  textInput: {
    padding: 16,
    borderColor: "grey",
    borderWidth: 1,
  },
});
