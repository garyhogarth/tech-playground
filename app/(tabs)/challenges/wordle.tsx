import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import Wordle from "@/features/wordle/Wordle";
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
export default function WordleScreen() {
  return (
    <ThemedView style={styles.container}>
      <Wordle />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
