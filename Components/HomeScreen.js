import * as React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  View,
  Text,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const windowWidth = Dimensions.get("screen").width;
const windowHeight = Dimensions.get("screen").height;

export default function HomeScreen({ navigation }) {
  console.log(windowHeight, windowWidth);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.maintext}>
        <Text style={styles.maintext}>
          Day of week will go here! "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
      </View>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={styles.text}>About</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("TabNav")}
      >
        <Text style={styles.text}>Tab Nav Widgets</Text>
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
    width: { windowWidth },
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: "#edab7d",
    alignItems: "center",
    justifyContent: "center",
  },
  Image: {
    position: "absolute",
    width: windowWidth,
    aspectRatio: 1.68 / 1,
    resizeMode: "contain",
    // top: windowHeight - windowWidth * 1.68,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: 20,
    height: 50,
    width: "30%",
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "orange",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
  maintext: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    width: "100%",
    marginHorizontal: "5%",
    alignItems: "center",
    justifyContent: "center",
  },
});
