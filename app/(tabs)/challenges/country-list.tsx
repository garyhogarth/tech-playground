import { StyleSheet } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import CountryList from "@/features/CountryList/CountryList";

export default function WordleScreen() {
  return (
    <ThemedView style={styles.container}>
      <CountryList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
