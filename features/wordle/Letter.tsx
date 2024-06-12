import React, { useState, useCallback, FC, useMemo } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import Constants from "expo-constants";

const word = "agent";

const COLOR_WRONG = "#65696d";
const COLOR_IN_WORD = "#bda746";
const COLOR_CORRECT = "#589c4f";

type LetterProps = {
  answer: string;
  letter: string;
  guess: string;
  position: number;
};

const Letter: FC<LetterProps> = ({ answer, letter, guess, position }) => {
  let backgroundColor = COLOR_WRONG;

  if (guess[position] == word[position]) {
    backgroundColor = COLOR_CORRECT;
  } else if (word.includes(letter)) {
    backgroundColor = COLOR_IN_WORD;
  }

  return (
    <View style={[styles.tile, { backgroundColor }]}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
};

export default Letter;

const styles = StyleSheet.create({
  tile: {
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    // borderRadius: 16,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    elevation: 3,
  },
  letter: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
});
