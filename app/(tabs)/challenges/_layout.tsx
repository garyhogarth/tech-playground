import { Stack } from "expo-router/stack";

const ChallengesLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen options={{ title: "Challenges" }} name="index" />
      <Stack.Screen name="wordle" />
    </Stack>
  );
};

export default ChallengesLayout;