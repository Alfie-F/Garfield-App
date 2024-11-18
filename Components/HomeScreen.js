import * as React from "react";
import { Button, Image, StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("Profile")}
        color={"orange"}
      />
      <Image
        style={styles.Image}
        source={require("../assets/Garf.png")}
      ></Image>
    </SafeAreaView>
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
    width: 330,
    height: 197.1,
    position: "absolute",
    bottom: 5,
  },
  //   button: {
  //     height: "200px",
  //     rowGap: 200,
  //     paddingBottom: 400,
  //   },
});
