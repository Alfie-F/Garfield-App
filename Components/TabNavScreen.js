import * as React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ScreenX from "./ScreenX";
import ScreenY from "./ScreenY";

const Tab = createBottomTabNavigator();

export default function TabNav(navigation) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "white",
      }}
    >
      <Tab.Screen
        name="ScreenX"
        component={ScreenX}
        options={{
          title: "ScreenX",
          headerStyle: { backgroundColor: "#edab7d", elevation: 0 },
          headerTitleAlign: "center",
          tabBarStyle: {
            backgroundColor: "#000",
            elevation: 1,
            height: "8%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ScreenY"
        component={ScreenY}
        options={{
          title: "ScreenY",
          headerStyle: { backgroundColor: "#edab7d", elevation: 0 },
          headerTitleAlign: "center",
          tabBarStyle: {
            backgroundColor: "#000",
            elevation: 1,
            height: "8%",
          },
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="cards-spade"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

{
  /* <SafeAreaView style={styles.container}>
        <Text>Testing TabNav within StackNav</Text>
      </SafeAreaView> */
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: "20%",
    paddingRight: "20%",
  },
});
