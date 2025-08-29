import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#6200ee" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" }
        }}
      >
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ title: "Create Account" }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: "Login" }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
