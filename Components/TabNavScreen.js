import * as React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const Tab = createBottomTabNavigator();

export default function TabNav(navigation) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={x}
        options={{
          title: "Does Garfield like today?",
          headerStyle: { backgroundColor: "#ff7f00" },
          headerTitleAlign: "center",
          //   tabBarIcon: ({ size, color }) => (
          //     <MaterialCommunityIcons name="home" size={size} color={color} />
          //   ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={y}
        options={{
          title: "Does Garfield like today?",
          headerStyle: { backgroundColor: "#ff7f00" },
          headerTitleAlign: "center",
          //   tabBarIcon: ({ size, color }) => (
          //     <MaterialCommunityIcons name="profile" size={size} color={color} />
          //   ),
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
