import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(screens)/index" 
        options={{ 
          headerShown: false,
          headerBackVisible: false
        }} 
      />
      <Stack.Screen 
        name="(screens)/experiment/[id]" 
        options={{ 
          title: 'Experiment Setup',
          headerBackVisible: true 
        }} 
      />
      <Stack.Screen 
        name="(screens)/experiment/[id]/result" 
        options={{ 
          title: 'Results',
          headerBackVisible: true 
        }} 
      />
    </Stack>
  );
}
