import * as React from "react";
import { Text } from "react-native";

export default function ProfileScreen(navigation, route) {
  console.log(navigation);
  return <Text>This is {route.params}'s profile</Text>;
}
