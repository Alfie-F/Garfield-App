import * as React from "react";
import { Button, Image, StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Go to about"
        onPress={() => navigation.navigate("Profile")}
        color={"orange"}
      />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("TabNav")}
      >
        <Text style={styles.text}>TabNav</Text>
      </Pressable>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "orange",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
