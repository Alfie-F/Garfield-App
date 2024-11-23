// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Components/HomeScreen";
import ProfileScreen from "./Components/ProfileScreen";
import TabNav from "./Components/TabNavScreen";
import React from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Does Garfield like today?",
            headerStyle: { backgroundColor: "#ff7f00" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "About",
            headerStyle: { backgroundColor: "#ff7f00" },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="TabNav"
          component={TabNav}
          options={{
            title: "Tab Nav Widgets",
            headerStyle: { backgroundColor: "#ff7f00" },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
