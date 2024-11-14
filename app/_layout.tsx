import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Fizz Lab' }} />
      <Stack.Screen name="experiment/[id]" options={{ title: 'Experiment Setup' }} />
      <Stack.Screen name="experiment/[id]/result" options={{ title: 'Results' }} />
    </Stack>
  );
}
