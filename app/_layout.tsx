import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(screens)/index" options={{ title: 'Fizz Lab' }} />
      <Stack.Screen name="(screens)/experiment/[id]" options={{ title: 'Experiment Setup' }} />
      <Stack.Screen name="(screens)/experiment/[id]/result" options={{ title: 'Results' }} />
    </Stack>
  );
}
