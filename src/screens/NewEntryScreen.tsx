import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native";

export function NewEntryScreen() {
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text>New Entry</Text>
    </SafeAreaView>
  );
}
