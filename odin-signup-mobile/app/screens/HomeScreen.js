import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Welcome Home!</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Login")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  button: {
    backgroundColor: "#596D48",
    padding: 14,
    borderRadius: 8
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});
