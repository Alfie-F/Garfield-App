import * as React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function ProfileScreen(navigation, route) {
  console.log(navigation);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text>
          This is an app that tells you if it's monday what could you possibly
          need an about section for?
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
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
