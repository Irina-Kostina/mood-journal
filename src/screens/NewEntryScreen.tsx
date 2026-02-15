import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function NewEntryScreen() {
  const [text, setText] = useState("");
  const [mood, setMood] = useState<number | null>(null);

  const now = new Date();

  const handleSave = () => {
    if (!text || !mood) {
      return;
    }

    console.log({
      text,
      mood,
      date: now,
    });

    setText("");
    setMood(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.date}>
        {now.toLocaleDateString()} {now.toLocaleTimeString()}
      </Text>

      <TextInput
        placeholder="Write how you feel..."
        value={text}
        onChangeText={setText}
        multiline
        style={styles.input}
      />

      <View style={styles.moodRow}>
        {[1, 2, 3, 4, 5].map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setMood(value)}
            style={[
              styles.moodButton,
              mood === value && styles.moodSelected,
            ]}
          >
            <Text>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  date: {
    marginBottom: 12,
    color: "#888",
  },
  input: {
    flex: 1,
    fontSize: 18,
    textAlignVertical: "top",
  },
  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  moodButton: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    width: 48,
    alignItems: "center",
  },
  moodSelected: {
    backgroundColor: "#e0e0e0",
  },
  saveButton: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#111",
    alignItems: "center",
  },
  saveText: {
    color: "white",
    fontWeight: "600",
  },
});
