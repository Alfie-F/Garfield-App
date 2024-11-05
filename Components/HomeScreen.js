import * as React from "react";
import { Button, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Button
          title="Go to about"
          onPress={() => navigation.navigate("Profile")}
        />
        <Image
          style={styles.Image}
          source={require("../assets/Garf.png")}
        ></Image>
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
  },
  Image: {
    width: 220,
    height: 131.4,
  },
  //   button: {
  //     height: "200px",
  //     rowGap: 200,
  //     paddingBottom: 400,
  //   },
});
