import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ImageBackground } from "react-native";

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]+$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address.");
      return false;
    }
    if (phone && !phoneRegex.test(phone)) {
      Alert.alert("Invalid Phone", "Phone number must contain only numbers.");
      return false;
    }
    if (password !== confirmPassword) {
      Alert.alert("Password Mismatch", "Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSignup = () => {
    if (validateForm()) {
      navigation.replace("Home"); // direct to Home
    }
  };

  return (
    <View style={styles.container}>
      {/* Left image + overlay */}
      <ImageBackground
        source={{ uri: "https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80" }}
        style={styles.imageSection}
      >
        <View style={styles.logoOverlay}>
          <Text style={styles.logoText}>ODIN</Text>
        </View>
      </ImageBackground>

      {/* Right form section */}
      <View style={styles.formSection}>
        <Text style={styles.intro}>
          This is not a real service! Sign up <Text style={{ fontStyle: "italic" }}>now</Text> to get started.
        </Text>
        <Text style={styles.intro}>You <Text style={{ fontStyle: "italic" }}>know</Text> you want to.</Text>

        <Text style={styles.formTitle}>Let’s do this!</Text>

        <TextInput style={styles.input} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
        <TextInput style={styles.input} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
        <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
        <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>
            Log in
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  imageSection: { flex: 0.4, justifyContent: "center", alignItems: "center" },
  logoOverlay: { backgroundColor: "rgba(0,0,0,0.6)", padding: 20, borderRadius: 12 },
  logoText: { fontSize: 42, color: "white", fontWeight: "bold", fontFamily: "serif" },
  formSection: { flex: 0.6, padding: 20, justifyContent: "center" },
  intro: { fontSize: 16, marginBottom: 8 },
  formTitle: { fontSize: 22, fontWeight: "bold", marginVertical: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: "#596D48",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3
  },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  loginText: { marginTop: 16, fontSize: 14 },
  loginLink: { color: "#596D48", fontWeight: "bold" }
});
